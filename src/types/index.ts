
export type Coupon = {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  location: string;
  category: string;
  rating: number;
  expiresAt: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type User = {
  id: string;
  name?: string;
  email?: string;
  avatar?: string;
  isGuest: boolean;
};
