"use client";

import { getCategory } from "@/data/categories";
import type { Tool } from "@/data/tools";
import { useI18n } from "@/lib/i18n";

export function ToolCard({ tool }: { tool: Tool }) {
  const { t } = useI18n();
  const cat = getCategory(tool.category);

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            {t(tool.nameZh, tool.nameEn)}
          </h3>
          {cat && (
            <p className="mt-0.5 text-xs font-medium text-indigo-600">
              {cat.icon} {t(cat.nameZh, cat.nameEn)}
            </p>
          )}
        </div>
        {tool.featured && (
          <span className="shrink-0 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold uppercase text-indigo-700">
            {t("精选", "Featured")}
          </span>
        )}
      </div>

      <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
        <span className="font-semibold text-slate-500">
          {t("价格概览", "Pricing")} · {t("约", "~")}
        </span>
        <br />
        {t(tool.pricingSummaryZh, tool.pricingSummaryEn)}
      </p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tool.regions.map((r) => (
          <span
            key={r}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
          >
            {r}
          </span>
        ))}
      </div>

      <ul className="mt-3 space-y-1 text-sm">
        <li className="text-emerald-700">
          <span className="font-semibold">+</span> {t(tool.prosZh, tool.prosEn)}
        </li>
        <li className="text-rose-700">
          <span className="font-semibold">−</span> {t(tool.consZh, tool.consEn)}
        </li>
      </ul>

      <div className="mt-auto flex items-center justify-between gap-2 pt-4 text-xs text-slate-400">
        <span>
          {t("更新", "Updated")} {tool.lastUpdated}
        </span>
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 hover:underline"
        >
          {t("官网", "Website")} ↗
        </a>
      </div>
    </article>
  );
}
