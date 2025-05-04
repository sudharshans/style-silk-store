
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/lib/context/CartContext";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-medium">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
          {product.description}
        </p>
        <p className="text-lg font-semibold mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="outline"
          className="w-full"
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          disabled={product.stock <= 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
