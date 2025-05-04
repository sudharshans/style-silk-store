
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-textile-light mt-auto">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-textile-primary">Textile</h3>
            <p className="text-sm text-gray-600 mb-4">
              Premium quality clothing made with sustainable materials.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm text-gray-600 hover:text-textile-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories/t-shirts" className="text-sm text-gray-600 hover:text-textile-primary">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link to="/categories/pants" className="text-sm text-gray-600 hover:text-textile-primary">
                  Pants
                </Link>
              </li>
              <li>
                <Link to="/categories/sweaters" className="text-sm text-gray-600 hover:text-textile-primary">
                  Sweaters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-textile-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-textile-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-textile-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-gray-600 hover:text-textile-primary">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-textile-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-gray-600 hover:text-textile-primary">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm text-gray-600 hover:text-textile-primary">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-sm text-gray-600 hover:text-textile-primary">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Textile. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-textile-primary">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-textile-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
