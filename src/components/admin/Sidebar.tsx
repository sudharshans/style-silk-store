
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  Package,
  Users,
  ShoppingCart,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const links = [
    { href: "/admin", icon: LayoutGrid, label: "Dashboard" },
    { href: "/admin/products", icon: Package, label: "Products" },
    { href: "/admin/users", icon: Users, label: "Users" },
    { href: "/admin/orders", icon: ShoppingCart, label: "Orders" },
    { href: "/admin/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r bg-background lg:flex lg:flex-col">
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/admin" className="flex items-center gap-2 font-semibold">
          <span className="text-textile-primary text-xl">Textile</span>
          <span className="text-sm text-muted-foreground">Admin</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto py-6 px-4">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                  location.pathname === link.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex h-14 items-center border-t px-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Textile Admin
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
