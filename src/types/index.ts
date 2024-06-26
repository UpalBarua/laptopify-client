import { brands } from "@/config/laptops";

export type Laptop = {
  _id: string;
  image: string;
  isOnFlashSale: boolean;
  brand: string;
  model: string;
  release_year: number;
  processor: string;
  ram: string;
  storage: string;
  display_size: string;
  resolution: string;
  graphics_card: string;
  weight: string;
  price: number;
  colors: string[];
  description: string;
  ratings: {
    average: number;
    count: number;
  };
  reviews: {
    username: string;
    rating: number;
    comment: string;
  }[];
  createdAt: string;
};

export type Brand = (typeof brands)[number];
