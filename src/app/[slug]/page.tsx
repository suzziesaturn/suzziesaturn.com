import { getProductById, products } from "@/lib/products";
import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";

const RESERVED = ["about", "contact", "shipping", "returns", "sizing", "privacy", "products"];

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  if (RESERVED.includes(params.slug)) notFound();
  const product = getProductById(params.slug);
  if (!product) notFound();
  return <ProductPageClient product={product} />;
}
