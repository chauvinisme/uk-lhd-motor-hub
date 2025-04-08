
import React from 'react';

interface AuthHeaderProps {
  title?: string;
  subtitle?: string;
  showAdminInfo?: boolean;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ 
  title = "UK-LHD Motor Hub",
  subtitle = "Access your account",
  showAdminInfo = false
}) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-bold text-navy">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
      {showAdminInfo && (
        <p className="text-sm text-blue-600 mt-2">
          Admin login: admin@examplez.com / AmazonPrime212@
        </p>
      )}
    </div>
  );
};

export default AuthHeader;
