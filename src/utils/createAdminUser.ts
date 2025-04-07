
import { supabase } from "@/integrations/supabase/client";

export const createAdminUser = async (email: string, password: string): Promise<void> => {
  try {
    console.log("Creating admin user with email:", email);
    
    // Check if user already exists
    const { data: existingUsers, error: fetchError } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email);
    
    if (fetchError) {
      console.error("Error checking for existing user:", fetchError);
      throw fetchError;
    }
    
    const existingUser = existingUsers && existingUsers.length > 0 ? existingUsers[0] : null;
    
    if (existingUser) {
      console.log("User already exists, updating to admin...");
      // Update existing user to admin
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          role: 'superadmin',
          is_approved: true
        })
        .eq('id', existingUser.id);
      
      if (updateError) throw updateError;
      console.log("Existing user updated to admin");
      return;
    }
    
    // Create new admin user
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
