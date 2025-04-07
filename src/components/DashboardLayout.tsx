
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import DashboardSidebar from "./DashboardSidebar";
import { Loader2 } from "lucide-react";

const DashboardLayout: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="md:ml-64 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
