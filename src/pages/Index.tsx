
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/ProductGrid";
import { products, categories } from "@/lib/data";

const Index = () => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-textile-light py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Quality Textiles for Your Style
            </h1>
            <p className="text-lg mb-8">
              Discover sustainable fashion that combines comfort, style, and quality craftsmanship.
            </p>
            <div className="space-x-4">
              <Button className="bg-textile-primary hover:bg-textile-secondary" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="w-full max-w-lg">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <img
                src="/placeholder.svg"
                alt="Fashion model"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              to="/shop"
              className="text-textile-primary hover:underline font-medium"
            >
              View All
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-textile-light">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories
              .filter((cat) => cat.id !== "all")
              .slice(0, 4)
              .map((category) => (
                <Link
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square relative">
                    <img
                      src="/placeholder.svg"
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                      <h3 className="text-white text-xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-textile-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Style?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who have transformed their wardrobe with our premium textiles.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-textile-primary hover:bg-textile-light"
            asChild
          >
            <Link to="/shop">Shop Collection</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
