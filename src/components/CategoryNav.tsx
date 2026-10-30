"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { tools } from "@/data/tools";
import { useI18n } from "@/lib/i18n";

export function CategoryNav() {
  const { t } = useI18n();
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((c) => {
        const count = tools.filter((x) => x.category === c.id).length;
        return (
          <Link
            key={c.id}
            href={`/tools/${c.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
          >
            <div className="text-2xl">{c.icon}</div>
            <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-indigo-700">
              {t(c.nameZh, c.nameEn)}
              <span className="ml-2 text-sm font-normal text-slate-400">
                / {t(c.nameEn, c.nameZh)}
              </span>
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-slate-600">
              {t(c.descriptionZh, c.descriptionEn)}
            </p>
            <p className="mt-3 text-xs font-medium text-indigo-600">
              {count} {t("个工具", "tools")} →
            </p>
          </Link>
        );
      })}
    </div>
  );
}
