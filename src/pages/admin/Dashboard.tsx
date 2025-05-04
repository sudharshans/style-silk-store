
import React from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products, users } from "@/lib/data";
import { Package, Users, ShoppingCart, TrendingUp } from "lucide-react";

const AdminDashboard = () => {
  // For a demo, we'll calculate some basic stats
  const totalProducts = products.length;
  const totalUsers = users.filter(u => u.role === 'user').length;
  const lowStockProducts = products.filter(p => p.stock < 10).length;
  const totalInventoryValue = products.reduce(
    (sum, product) => sum + product.price * product.stock,
    0
  );

  const stats = [
    {
      title: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Users",
      value: totalUsers,
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Low Stock Items",
      value: lowStockProducts,
      icon: ShoppingCart,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Inventory Value",
      value: `$${totalInventoryValue.toFixed(2)}`,
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-md ${stat.color}`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              This is a demo dashboard. In a real application, this would show recent orders, user signups, etc.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Low Stock Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {products
                .filter(p => p.stock < 10)
                .slice(0, 5)
                .map(product => (
                  <div key={product.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm font-semibold">
                      Stock: {product.stock}
                    </div>
                  </div>
                ))}
              {lowStockProducts === 0 && (
                <div className="text-center text-muted-foreground">
                  No products with low stock
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
