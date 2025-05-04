
import React from "react";
import { Navigate } from "react-router-dom";
import AuthForm from "@/components/auth/AuthForm";
import { useAuth } from "@/lib/context/AuthContext";

const AdminLogin = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  // Redirect if already authenticated as admin
  if (isAuthenticated && isAdmin) {
    return <Navigate to="/admin" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-textile-light p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-textile-primary">Textile Admin</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Login to access the admin dashboard
          </p>
        </div>
        <AuthForm type="admin-login" />
      </div>
    </div>
  );
};

export default AdminLogin;
