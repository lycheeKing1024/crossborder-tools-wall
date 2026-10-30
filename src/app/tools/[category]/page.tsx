import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { CategoryToolsClient } from "./CategoryToolsClient";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();
  return <CategoryToolsClient categorySlug={cat.slug} />;
}
