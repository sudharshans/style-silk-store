
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/lib/context/AuthContext";
import { useCart } from "@/lib/context/CartContext";
import { ShoppingCart, User, Menu } from "lucide-react";

const Header = () => {
  const { isAuthenticated, user, logout, isAdmin } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-textile-primary">Textile</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-textile-primary">
              Home
            </Link>
            <Link to="/shop" className="transition-colors hover:text-textile-primary">
              Shop
            </Link>
            <Link to="/categories" className="transition-colors hover:text-textile-primary">
              Categories
            </Link>
            <Link to="/about" className="transition-colors hover:text-textile-primary">
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart className="h-5 w-5" />
            {cart.items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-textile-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Button>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user?.name}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/account" className="cursor-pointer w-full">
                    Account
                  </Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="cursor-pointer w-full">
                      Admin Dashboard
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => logout()}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="default" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
