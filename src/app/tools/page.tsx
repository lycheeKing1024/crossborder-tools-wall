"use client";

import Link from "next/link";
import { CategoryNav } from "@/components/CategoryNav";
import { PriceDisclaimer } from "@/components/PriceDisclaimer";
import { ToolCard } from "@/components/ToolCard";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { useI18n } from "@/lib/i18n";

export default function ToolsPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:py-12">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          {t("全部工具", "All tools")}
        </h1>
        <p className="mt-2 text-slate-600">
          {t(
            `共 ${tools.length} 个起步条目，按物流 / 收款 / ERP / 广告分类。`,
            `${tools.length} starter entries across logistics, payments, ERP & ads.`,
          )}
        </p>
      </div>

      <PriceDisclaimer />
      <CategoryNav />

      {categories.map((cat) => {
        const list = tools.filter((x) => x.category === cat.id);
        return (
          <section key={cat.id} id={cat.slug}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                {cat.icon} {t(cat.nameZh, cat.nameEn)}
              </h2>
              <Link
                href={`/tools/${cat.slug}`}
                className="text-sm text-indigo-600 hover:underline"
              >
                {t("分类页", "Category")} →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
