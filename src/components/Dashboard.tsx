
import React, { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Loader2, Car, MessageSquare, Users, AlertTriangle } from "lucide-react";

interface DashboardStats {
  totalCars: number;
  availableCars: number;
  pendingInquiries: number;
  totalMembers: number;
}

const Dashboard: React.FC = () => {
  const { profile } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({
    totalCars: 0,
    availableCars: 0,
    pendingInquiries: 0,
    totalMembers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        // Get total cars
        const { count: totalCars } = await supabase
          .from('cars')
          .select('*', { count: 'exact', head: true });

        // Get available cars
        const { count: availableCars } = await supabase
          .from('cars')
          .select('*', { count: 'exact', head: true })
          .eq('availability', 'available');

        // Get pending inquiries
        const { count: pendingInquiries } = await supabase
          .from('inquiries')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'new');

        // Get total members if admin
        let totalMembers = 0;
        if (profile?.role === 'admin' || profile?.role === 'superadmin') {
          const { count: members } = await supabase
            .from('profiles')
            .select('*', { count: 'exact', head: true });
          totalMembers = members || 0;
        }

        setStats({
          totalCars: totalCars || 0,
          availableCars: availableCars || 0,
          pendingInquiries: pendingInquiries || 0,
          totalMembers
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, [profile?.role]);

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Loading dashboard...</span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {profile && !profile.is_approved && (
        <Card className="mb-6 border-yellow-400 bg-yellow-50">
          <CardContent className="p-4 flex items-center gap-3">
            <AlertTriangle className="text-yellow-500" />
            <div>
              <p className="font-medium text-yellow-800">Your account is pending approval</p>
              <p className="text-sm text-yellow-600">An administrator needs to approve your account before you can access all features.</p>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Car className="mr-2 h-5 w-5" />
              Total Cars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.totalCars}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Car className="mr-2 h-5 w-5" />
              Available Cars
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.availableCars}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              New Inquiries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{stats.pendingInquiries}</p>
          </CardContent>
        </Card>
        
        {profile && (profile.role === 'admin' || profile.role === 'superadmin') && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Registered Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.totalMembers}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
