
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AuthFormProps {
  type: "login" | "admin-login" | "register";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (type === "register") {
      // In a real app, this would call a registration API
      alert("Registration would be handled by a backend service.");
      return;
    }
    
    // For login
    const role = type === "admin-login" ? "admin" : "user";
    const success = login(email, password, role);
    
    if (success) {
      navigate(role === "admin" ? "/admin" : "/");
    }
  };

  const title = 
    type === "login" ? "Login" : 
    type === "admin-login" ? "Admin Login" : 
    "Create an Account";
  
  const description = 
    type === "login" ? "Enter your credentials below to login to your account." : 
    type === "admin-login" ? "Enter your admin credentials to access the dashboard." :
    "Enter your details below to create your account.";
  
  const buttonText = 
    type === "login" ? "Sign In" : 
    type === "admin-login" ? "Admin Sign In" :
    "Sign Up";

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {type === "register" && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {type !== "admin-login" && (
                <a
                  href="#"
                  className="text-sm text-textile-primary hover:underline"
                >
                  Forgot password?
                </a>
              )}
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit" className="w-full bg-textile-primary hover:bg-textile-secondary">
            {buttonText}
          </Button>
          
          {type !== "admin-login" && (
            <div className="mt-4 text-center text-sm">
              {type === "login" ? (
                <>
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="text-textile-primary hover:underline"
                  >
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-textile-primary hover:underline"
                  >
                    Sign in
                  </a>
                </>
              )}
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default AuthForm;
