
import { supabase } from "@/integrations/supabase/client";

export const createAdminUser = async (email: string, password: string): Promise<void> => {
  try {
    console.log("Creating admin user with email:", email);
    
    // Check if user already exists in auth
    const { data: userList, error: authCheckError } = await supabase.auth.admin.listUsers({
      perPage: 1,
      page: 1,
    });
    
    if (authCheckError) {
      console.error("Error checking for existing user:", authCheckError);
      // Continue with the process, as we'll try to create the user anyway
    }
    
    // Search for user in the returned list
    const existingUser = userList?.users?.find(user => user.email === email);
    
    if (existingUser) {
      console.log("User already exists in auth.users, checking profile...");
      
      // Check if profile exists
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', existingUser.id)
        .single();
      
      if (profileError && profileError.code !== 'PGRST116') {
        // PGRST116 is "no rows returned" error, which is expected if profile doesn't exist
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
          id: existingUser.id,
          role: 'superadmin',
          is_approved: true,
          first_name: 'Admin',
          last_name: 'User'
        });
      
      if (insertError) throw insertError;
      console.log("Profile created for existing user");
      return;
    }
    
    // No existing user, create new one
    console.log("Creating new admin user...");
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: 'Admin',
          last_name: 'User'
        }
      }
    });
    
    if (error) throw error;
    
    if (data.user) {
      // Update the user's role to superadmin and approve them
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          role: 'superadmin',
          is_approved: true
        })
        .eq('id', data.user.id);
      
      if (updateError) throw updateError;
      
      console.log('Admin user created successfully');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
};
