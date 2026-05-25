import fs from "node:fs";
import path from "node:path";
import data from "@/data/products.json";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  /** Public path to the product image, e.g. /images/products/slides-1.jpg */
  image: string;
  description: string;
  sizes: string[];
  /**
   * Resolved at module load: true if a real file exists under public/.
   * Cards show the editorial placeholder when this is false (e.g. before real photos are added).
   */
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
