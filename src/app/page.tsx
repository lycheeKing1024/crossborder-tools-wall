"use client";

import Link from "next/link";
import { CategoryNav } from "@/components/CategoryNav";
import { PriceDisclaimer } from "@/components/PriceDisclaimer";
import { SponsorSlot } from "@/components/SponsorSlot";
import { ToolCard } from "@/components/ToolCard";
import { siteConfig } from "@/data/site";
import { getFeaturedTools } from "@/data/tools";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useI18n();
  const featured = getFeaturedTools();

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-8 sm:py-12">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 px-6 py-10 text-white shadow-lg sm:px-10 sm:py-14">
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
            {t("跨境卖家工具墙", "Cross-border seller tools")}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t(siteConfig.nameZh, siteConfig.nameEn)}
          </h1>
          <p className="mt-3 text-base text-indigo-100 sm:text-lg">
            {t(siteConfig.taglineZh, siteConfig.taglineEn)}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/tools"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 shadow hover:bg-indigo-50"
            >
              {t("浏览全部工具", "Browse all tools")}
            </Link>
            <Link
              href="/sponsor"
              className="rounded-xl border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              {t("赞助位说明", "Sponsor info")}
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 right-10 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
      </section>

      <PriceDisclaimer />

      <section>
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          {t("按品类逛", "Browse by category")}
        </h2>
        <CategoryNav />
      </section>

      <SponsorSlot />

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-xl font-bold text-slate-900">
            {t("精选工具", "Featured tools")}
          </h2>
          <Link
            href="/tools"
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            {t("查看全部", "View all")} →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {featured.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
