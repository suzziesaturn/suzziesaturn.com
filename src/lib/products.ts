import fs from "node:fs";
import path from "node:path";
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
}

type RawProduct = Omit<Product, "hasImage">;

const publicDir = path.join(process.cwd(), "public");

export const products: Product[] = (data as RawProduct[]).map((product) => ({
  ...product,
  hasImage: fs.existsSync(path.join(publicDir, product.image)),
}));

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
