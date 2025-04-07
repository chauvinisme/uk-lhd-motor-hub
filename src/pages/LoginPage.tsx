
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Placeholder for login logic
    console.log("Login attempt with:", { email, password });
    
    // Simulate login error for demo purposes
    if (email === "demo@example.com" && password === "password") {
      // Redirect to dashboard would happen here in a real app
      window.location.href = "/dashboard";
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Placeholder for registration logic
    console.log("Registration attempt with:", { name, email, password });
    
    // Show signup not allowed message
    setError("Direct registration is not available. Please contact an admin for an invitation.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-navy">UK-LHD Motor Hub</h1>
              <p className="text-gray-600">Access your account</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 mb-6 w-full">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="login-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                      required
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <Link to="/forgot-password" className="text-sm text-motor-red hover:underline">
                        Forgot Password?
                      </Link>
                    </div>
                    <input
                      type="password"
                      id="login-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-motor-red focus:ring-motor-red border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </form>

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
                <form onSubmit={handleRegister} className="space-y-4">
                  {error && (
                    <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
                      {error}
                    </div>
                  )}

                  <div className="bg-blue-50 text-blue-700 p-4 rounded-md text-sm mb-4">
                    Registration is by invitation only. Please contact an administrator to request access.
                  </div>

                  <div>
                    <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="register-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="register-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="register-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-motor-red"
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-motor-red focus:ring-motor-red border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I agree to the{" "}
                      <Link to="/terms" className="text-motor-red hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy-policy" className="text-motor-red hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  <Button type="submit" className="w-full">
                    Register
                  </Button>
                </form>

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
