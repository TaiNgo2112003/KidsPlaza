// types/index.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  details?: string;
  stock?: number;
  category?: string;
  rating?: number;
}