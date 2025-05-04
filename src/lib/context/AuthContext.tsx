
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, users } from "../data";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: "user" | "admin") => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  
  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("textileUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string, role?: "user" | "admin"): boolean => {
    // For demo purposes, we'll use a simple check
    // In a real app, you would validate against a backend
    
    // If role is specified, look for users with that role
    let userFound = users.find((u) => 
      u.email === email && 
      (role ? u.role === role : true)
    );
    
    if (userFound) {
      // Password would be verified here in a real app
      localStorage.setItem("textileUser", JSON.stringify(userFound));
      setUser(userFound);
      toast.success(`Welcome back, ${userFound.name}`);
      return true;
    }
    
    toast.error("Invalid credentials");
    return false;
  };

  const logout = () => {
    localStorage.removeItem("textileUser");
    setUser(null);
    toast.info("Logged out successfully");
  };

  const isAuthenticated = !!user;
  const isAdmin = isAuthenticated && user?.role === "admin";

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
