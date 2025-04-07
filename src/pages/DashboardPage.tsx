
import React, { useState } from "react";
import { Navigate, Route, Routes, Link, useLocation } from "react-router-dom";
import { 
  Home, CarFront, Users, Settings, LogOut, Menu, X, ChevronRight,
  ClipboardList, MessageSquare, Bell, User 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Listings", href: "/dashboard/listings", icon: CarFront },
    { name: "Users", href: "/dashboard/users", icon: Users },
    { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleSidebar}></div>
        <div className="relative flex flex-col w-full max-w-xs bg-navy text-white h-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center justify-center px-4">
              <span className="text-2xl font-bold">UK-<span className="text-motor-red">LHD</span></span>
            </div>
            <nav className="mt-8 flex-1 px-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-base rounded-md ${
                      isActive(item.href)
                        ? "bg-navy-800 text-white"
                        : "text-gray-300 hover:bg-navy-800 hover:text-white"
                    }`}
                    onClick={toggleSidebar}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <div className="border-t border-gray-700 p-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:text-white hover:bg-navy-800"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 bg-navy text-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center justify-center px-4">
              <span className="text-2xl font-bold">UK-<span className="text-motor-red">LHD</span></span>
            </div>
            <nav className="mt-8 flex-1 px-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 text-base rounded-md ${
                      isActive(item.href)
                        ? "bg-navy-800 text-white"
                        : "text-gray-300 hover:bg-navy-800 hover:text-white"
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <div className="border-t border-gray-700 p-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:text-white hover:bg-navy-800"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <button
              className="lg:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={toggleSidebar}
            >
              <Menu size={24} />
            </button>

            <div className="flex-1 lg:ml-4">
              <h1 className="text-lg font-semibold text-gray-900 lg:block hidden">
                Admin Dashboard
              </h1>
            </div>

            <div className="flex items-center">
              <div className="hidden md:flex items-center gap-4 mr-4">
                <button className="text-gray-400 hover:text-gray-700 focus:outline-none">
                  <Bell size={20} />
                </button>
                <button className="text-gray-400 hover:text-gray-700 focus:outline-none">
                  <MessageSquare size={20} />
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div className="ml-3 hidden md:block">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Admin User
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      admin@uk-lhd.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  const stats = [
    { name: "Total Vehicles", value: "124", change: "+12%", changeType: "increase" },
    { name: "Active Listings", value: "89", change: "+4%", changeType: "increase" },
    { name: "Sold Vehicles", value: "35", change: "-2%", changeType: "decrease" },
    { name: "Total Users", value: "28", change: "+8%", changeType: "increase" },
  ];

  const recentActivity = [
    { id: 1, type: "New Listing", user: "Sarah Thompson", details: "Added Mercedes-Benz E350", time: "2 hours ago" },
    { id: 2, type: "User Registration", user: "Michael Chen", details: "New member registered", time: "4 hours ago" },
    { id: 3, type: "Vehicle Sold", user: "James Wilson", details: "Sold BMW X5 to John Smith", time: "Yesterday" },
    { id: 4, type: "Price Update", user: "Sarah Thompson", details: "Updated Audi A6 price", time: "Yesterday" },
    { id: 5, type: "New Inquiry", user: "System", details: "New inquiry for Porsche 911", time: "2 days ago" },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
          <p className="mt-1 text-sm text-gray-600">
            Welcome back! Here's what's happening with your inventory today.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg shadow px-6 py-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </h2>
                  <div className="mt-1 flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <p
                      className={`ml-2 text-xs font-medium ${
                        stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Recent Activity
                </h3>
              </div>
              <div className="px-6 py-5">
                <ul className="divide-y divide-gray-200">
                  {recentActivity.map((activity) => (
                    <li key={activity.id} className="py-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <User className="h-6 w-6 text-gray-400" />
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-baseline justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              {activity.type}
                            </p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">{activity.user}</span> {activity.details}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm">
                    View All Activity
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Quick Actions
                </h3>
              </div>
              <div className="px-6 py-5">
                <div className="space-y-4">
                  <Button className="w-full flex justify-between">
                    Add New Vehicle <ChevronRight size={16} />
                  </Button>
                  <Button variant="outline" className="w-full flex justify-between">
                    View Inquiries <ChevronRight size={16} />
                  </Button>
                  <Button variant="outline" className="w-full flex justify-between">
                    Manage Users <ChevronRight size={16} />
                  </Button>
                  <Button variant="outline" className="w-full flex justify-between">
                    Update Settings <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListingsPage = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Vehicle Listings</h1>
        <p className="mt-1 text-sm text-gray-600">
          Manage your vehicle inventory
        </p>
        {/* Placeholder for actual content */}
        <div className="mt-6 bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-500">
            Listings management interface would be shown here
          </p>
        </div>
      </div>
    </div>
  );
};

const UsersPage = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Users Management</h1>
        <p className="mt-1 text-sm text-gray-600">
          Manage system users and permissions
        </p>
        {/* Placeholder for actual content */}
        <div className="mt-6 bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-500">
            User management interface would be shown here
          </p>
        </div>
      </div>
    </div>
  );
};

const MessagesPage = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
        <p className="mt-1 text-sm text-gray-600">
          View and respond to inquiries
        </p>
        {/* Placeholder for actual content */}
        <div className="mt-6 bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-500">
            Messaging interface would be shown here
          </p>
        </div>
      </div>
    </div>
  );
};

const SettingsPage = () => {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-600">
          Manage your account and system settings
        </p>
        {/* Placeholder for actual content */}
        <div className="mt-6 bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-500">
            Settings interface would be shown here
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Controller
const DashboardPage: React.FC = () => {
  // Mock authentication check - in a real app this would check if the user is authenticated
  const isAuthenticated = true; // Placeholder: In a real app, this would come from auth state

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </DashboardLayout>
  );
};

export default DashboardPage;
