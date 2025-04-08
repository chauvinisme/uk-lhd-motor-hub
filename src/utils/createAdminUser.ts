
import { supabase } from "@/integrations/supabase/client";

export const createAdminUser = async (): Promise<void> => {
  const adminEmail = "admin@examplez.com";
  const adminPassword = "AmazonPrime212@";

  try {
    console.log("Creating admin user with email:", adminEmail);
    
    // Check if user already exists
    const { data: existingUsers, error: searchError } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);

    if (searchError) {
      console.error("Error checking for existing users:", searchError);
      // Continue with the process as we'll try to create the admin anyway
    }

    // If we have existing users, attempt to find and update the admin
    if (existingUsers && existingUsers.length > 0) {
      console.log("Existing users found, checking for admin user...");
      
      // Get user by email
      const { data: users, error: userError } = await supabase.auth.admin.listUsers();
      
      if (userError) {
        console.error("Error listing users:", userError);
      } else if (users && users.users) {
        // Find the admin user in the user list
        const adminUser = users.users.find(user => user.email === adminEmail);
        
        if (adminUser) {
          console.log("Admin user found, ensuring account is confirmed and has superadmin role");
          
          // Update the user to confirm email if not already confirmed
          const { error: confirmError } = await supabase.auth.admin.updateUserById(
            adminUser.id,
            { email_confirm: true }
          );
          
          if (confirmError) {
            console.error("Error confirming admin email:", confirmError);
          } else {
            console.log("Admin email confirmed successfully");
          }
          
          // Check if profile exists and update to superadmin
          const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', adminUser.id)
            .single();
          
          if (profileError && profileError.code !== 'PGRST116') {
            console.error("Error checking profile:", profileError);
          }
          
          if (profileData) {
            console.log("Profile exists, updating to superadmin...");
            // Update existing profile to superadmin
            const { error: updateError } = await supabase
              .from('profiles')
              .update({
                role: 'superadmin',
                is_approved: true
              })
              .eq('id', profileData.id);
            
            if (updateError) throw updateError;
            console.log("Existing user profile updated to superadmin");
            return;
          }
          
          // If we get here, user exists in auth.users but not in profiles
          console.log("User exists in auth but no profile found. Creating profile...");
          const { error: insertError } = await supabase
            .from('profiles')
            .insert({
              id: adminUser.id,
              role: 'superadmin',
              is_approved: true,
              first_name: 'Admin',
              last_name: 'User'
            });
          
          if (insertError) throw insertError;
          console.log("Profile created for existing user");
          return;
        }
      }
    }
    
    // No admin user found, create a new one
    console.log("Creating new admin user...");
    const { data, error } = await supabase.auth.signUp({
      email: adminEmail,
      password: adminPassword,
      options: {
        data: {
          first_name: 'Admin',
          last_name: 'User'
        }
      }
    });
    
    if (error) throw error;
    
    if (data.user) {
      // Confirm the email immediately using admin API
      const { error: confirmError } = await supabase.auth.admin.updateUserById(
        data.user.id,
        { email_confirm: true }
      );
      
      if (confirmError) {
        console.error("Error confirming admin email:", confirmError);
      } else {
        console.log("Admin email confirmed successfully");
      }
      
      // Update the user's role to superadmin and approve them
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          role: 'superadmin',
          is_approved: true
        })
        .eq('id', data.user.id);
      
      if (updateError) throw updateError;
      
      console.log('Admin user created and confirmed successfully');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
};
