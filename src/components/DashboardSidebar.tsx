
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  Home, 
  Car, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  X,
  FilePlus
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

const DashboardSidebar: React.FC = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { path: "/dashboard/cars", label: "Car Listings", icon: <Car size={20} /> },
    { 
      path: "/dashboard/new-car", 
      label: "Add New Car", 
      icon: <FilePlus size={20} />,
      role: ["admin", "superadmin", "member"] 
    },
    { 
      path: "/dashboard/users", 
      label: "Users", 
      icon: <Users size={20} />,
      role: ["admin", "superadmin"] 
    },
    { 
      path: "/dashboard/inquiries", 
      label: "Inquiries", 
      icon: <MessageSquare size={20} />,
      role: ["admin", "superadmin"] 
    },
    { 
      path: "/dashboard/settings", 
      label: "Settings", 
      icon: <Settings size={20} /> 
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMobileSidebar}
          className="h-10 w-10 rounded-full"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 bg-white shadow-lg transition-transform ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex flex-col items-center justify-center p-5 border-b">
          <h1 className="text-xl font-bold">UK-LHD Motor Hub</h1>
          {profile && (
            <div className="mt-2 text-sm text-center">
              <p>
                {profile.first_name} {profile.last_name}
              </p>
              <p className="text-xs text-gray-500 capitalize">{profile.role}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-4 gap-1">
          {navItems.map((item) =>
            !item.role || (profile && item.role.includes(profile.role)) ? (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-2 rounded-md ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => {
                  if (isMobileOpen) setIsMobileOpen(false);
                }}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ) : null
          )}
        </nav>

        {/* Logout button */}
        <div className="absolute bottom-5 w-full px-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            onClick={handleSignOut}
          >
            <LogOut size={18} />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}
    </>
  );
};

export default DashboardSidebar;
