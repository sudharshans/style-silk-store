
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/context/AuthContext";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { isAuthenticated, isAdmin } = useAuth();

  // Redirect if not authenticated or not an admin
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/admin-login" />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 lg:ml-64">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
