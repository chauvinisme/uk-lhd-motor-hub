
import { createAdminUser } from "./createAdminUser";

export const setupAdmin = async () => {
  try {
    // Create the admin user with the specified credentials
    await createAdminUser();
    console.log("Admin setup complete");
    return { success: true };
  } catch (error) {
    console.error("Admin setup failed:", error);
    return { success: false, error };
  }
};
