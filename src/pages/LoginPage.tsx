
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";
import { setupAdmin } from "@/utils/setupAdmin";
import AuthHeader from "@/components/auth/AuthHeader";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("login");
  const { user } = useAuth();
  
  // Try to create initial admin user when the component mounts
  useEffect(() => {
    const setupAdminUser = async () => {
      try {
        await setupAdmin();
      } catch (error) {
        console.error("Error during admin user setup:", error);
      }
    };
    
    setupAdminUser();
  }, []);

  // Redirect if already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <AuthHeader showAdminInfo={true} />

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 mb-6 w-full">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <LoginForm defaultEmail="admin@examplez.com" />
                <div className="mt-6 text-center text-sm text-gray-600">
                  <p>
                    Don't have an account?{" "}
                    <button 
                      onClick={() => setActiveTab("register")}
                      className="text-motor-red hover:underline focus:outline-none"
                    >
                      Register
                    </button>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="register">
                <RegisterForm />
                <div className="mt-6 text-center text-sm text-gray-600">
                  <p>
                    Already have an account?{" "}
                    <button 
                      onClick={() => setActiveTab("login")}
                      className="text-motor-red hover:underline focus:outline-none"
                    >
                      Login
                    </button>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
