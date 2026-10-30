"use client";

import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">
        {t("关于本站", "About")}
      </h1>
      <p className="text-slate-700 leading-relaxed">
        {t(
          `${siteConfig.nameZh} 是给跨境电商卖家（Shopify / Shopee / TikTok Shop 等）看的工具比价墙：物流、收款、ERP、广告的公开价位摘要与一句话优缺点。`,
          `${siteConfig.nameEn} is a comparison wall for cross-border sellers (Shopify / Shopee / TikTok Shop, etc.): public pricing notes and one-line pros/cons for logistics, payments, ERP and ads.`,
        )}
      </p>
      <p className="text-slate-700 leading-relaxed">
        {t(
          "数据存在 TypeScript 常量里，方便以后用 routine 做每日更新。本站 $0 启动、可部署到 Vercel 免费档；赞助变现尚未接入收款。",
          "Data lives in TS constants for easy daily routine updates. Built for a $0 launch on Vercel free tier; sponsor monetization has no payment integration yet.",
        )}
      </p>
      <p className="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
        {t(siteConfig.disclaimerZh, siteConfig.disclaimerEn)}
      </p>
    </div>
  );
}
