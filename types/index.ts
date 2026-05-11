export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  emoji: string;
  badge?: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  origin: string;
  description: string;
  organic: boolean;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  count: number;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  initials: string;
  bgColor: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  highlighted: boolean;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
  emoji: string;
}

export interface TrustBrand {
  id: string;
  name: string;
  emoji: string;
}

export interface Order {
  id: string;
  customer: string;
  items: string;
  total: number;
  status: 'pending' | 'processing' | 'delivered' | 'cancelled';
  date: string;
  address: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Seller {
  id: string;
  name: string;
  farm: string;
  location: string;
  rating: number;
  products: number;
  sales: number;
  initials: string;
  bgColor: string;
  certified: boolean;
  specialty: string;
  joined: string;
}