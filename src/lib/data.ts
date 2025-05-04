
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "A premium quality cotton t-shirt that provides ultimate comfort and style.",
    price: 24.99,
    category: "t-shirts",
    image: "/placeholder.svg",
    stock: 50,
    featured: true,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans made from sustainable denim.",
    price: 59.99,
    category: "pants",
    image: "/placeholder.svg",
    stock: 30,
    featured: true,
  },
  {
    id: "3",
    name: "Wool Sweater",
    description: "Warm wool blend sweater perfect for colder days.",
    price: 79.99,
    category: "sweaters",
    image: "/placeholder.svg",
    stock: 25,
    featured: true,
  },
  {
    id: "4",
    name: "Silk Blouse",
    description: "Elegant silk blouse for formal occasions.",
    price: 89.99,
    category: "blouses",
    image: "/placeholder.svg",
    stock: 15,
    featured: false,
  },
  {
    id: "5",
    name: "Linen Shorts",
    description: "Breathable linen shorts for summer comfort.",
    price: 39.99,
    category: "shorts",
    image: "/placeholder.svg",
    stock: 35,
    featured: false,
  },
  {
    id: "6",
    name: "Cotton Dress",
    description: "Casual cotton dress for everyday elegance.",
    price: 69.99,
    category: "dresses",
    image: "/placeholder.svg",
    stock: 20,
    featured: true,
  },
  {
    id: "7",
    name: "Cashmere Scarf",
    description: "Luxurious cashmere scarf for ultimate softness and warmth.",
    price: 49.99,
    category: "accessories",
    image: "/placeholder.svg",
    stock: 40,
    featured: false,
  },
  {
    id: "8",
    name: "Denim Jacket",
    description: "Classic denim jacket that never goes out of style.",
    price: 89.99,
    category: "jackets",
    image: "/placeholder.svg",
    stock: 18,
    featured: true,
  },
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "t-shirts", name: "T-Shirts" },
  { id: "pants", name: "Pants" },
  { id: "sweaters", name: "Sweaters" },
  { id: "blouses", name: "Blouses" },
  { id: "shorts", name: "Shorts" },
  { id: "dresses", name: "Dresses" },
  { id: "accessories", name: "Accessories" },
  { id: "jackets", name: "Jackets" },
];

export interface User {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin";
}

export const users: User[] = [
  {
    id: "1",
    email: "admin@textile.com",
    name: "Admin User",
    role: "admin",
  },
  {
    id: "2",
    email: "user@example.com",
    name: "Regular User",
    role: "user",
  },
];
