
import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AuthForm from "@/components/auth/AuthForm";
import { useAuth } from "@/lib/context/AuthContext";

const Login = () => {
  const { isAuthenticated } = useAuth();

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <AuthForm type="login" />
      </div>
    </Layout>
  );
};

export default Login;
