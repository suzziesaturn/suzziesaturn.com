import { getProductById, products } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductPageClient from "./ProductPageClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductById(params.slug);
  if (!product) notFound();
  return <ProductPageClient product={product} />;
}
