import data from "@/data/products.json";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  details: { label: string; value: string }[];
  sizes: { label: string; priceId: string }[];
  hasImage: boolean;
  videos?: string[];
}

type RawProduct = Omit<Product, "hasImage">;

export const products: Product[] = (data as RawProduct[]).map((product) => ({
  ...product,
  hasImage: true,
}));

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
