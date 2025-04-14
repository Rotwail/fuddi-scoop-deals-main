
import { Coupon, Category } from "../types";

export const categories: Category[] = [
  {
    id: "all",
    name: "All",
    icon: "grid"
  },
  {
    id: "sweet",
    name: "Dulces",
    icon: "cake"
  },
  {
    id: "savory",
    name: "Salados",
    icon: "burger"
  },
  {
    id: "drinks",
    name: "Bebidas",
    icon: "cup-soda"
  },
  {
    id: "lunch",
    name: "Almuerzos",
    icon: "utensils"
  }
];

export const coupons: Coupon[] = [
  {
    id: "1",
    name: "Muffin + Café Nescafé",
    description: "Delicioso muffin con café Nescafé",
    originalPrice: 3.600,
    discountedPrice: 3.100,
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1974&auto=format&fit=crop",
    location: "Cafetería Central",
    category: "sweet",
    rating: 4.5,
    expiresAt: new Date(Date.now() + 86400000 * 2).toISOString() // 2 days from now
  },
  {
    id: "2",
    name: "Gohan + Jugo en caja",
    description: "Bowl de arroz con proteína y verduras más jugo natural",
    originalPrice: 4.000,
    discountedPrice: 3.700,
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1974&auto=format&fit=crop",
    location: "Food Court",
    category: "lunch",
    rating: 4.9,
    expiresAt: new Date(Date.now() + 86400000 * 3).toISOString() // 3 days from now
  },
  {
    id: "3",
    name: "Empanada + Lata",
    description: "Empanada chilena con bebida en lata a elección",
    originalPrice: 3.600,
    discountedPrice: 2.900,
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1974&auto=format&fit=crop",
    location: "Kiosco del Pasillo",
    category: "savory",
    rating: 4.7,
    expiresAt: new Date(Date.now() + 86400000 * 1).toISOString() // 1 day from now
  }
];
