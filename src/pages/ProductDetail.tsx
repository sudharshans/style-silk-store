
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/CartContext";
import { ShoppingCart, ArrowLeft, Plus, Minus } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/shop")} className="bg-textile-primary hover:bg-textile-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-transparent hover:text-textile-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold mt-4">${product.price.toFixed(2)}</p>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Availability</h3>
              <p className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                {product.stock > 0
                  ? `In Stock (${product.stock} available)`
                  : "Out of Stock"}
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <Button
                  disabled={product.stock <= 0}
                  variant="default"
                  size="lg"
                  className="bg-textile-primary hover:bg-textile-secondary"
                  onClick={() => addItem(product)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
