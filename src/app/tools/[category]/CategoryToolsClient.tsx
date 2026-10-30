"use client";

import Link from "next/link";
import { PriceDisclaimer } from "@/components/PriceDisclaimer";
import { ToolCard } from "@/components/ToolCard";
import { getCategory } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import { useI18n } from "@/lib/i18n";

export function CategoryToolsClient({
  categorySlug,
}: {
  categorySlug: string;
}) {
  const { t } = useI18n();
  const cat = getCategory(categorySlug)!;
  const list = getToolsByCategory(cat.id);

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:py-12">
      <div>
        <Link
          href="/tools"
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          ← {t("全部工具", "All tools")}
        </Link>
        <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          {cat.icon} {t(cat.nameZh, cat.nameEn)}
          <span className="ml-2 text-lg font-normal text-slate-400">
            / {t(cat.nameEn, cat.nameZh)}
          </span>
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          {t(cat.descriptionZh, cat.descriptionEn)}
        </p>
      </div>
      <PriceDisclaimer />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
