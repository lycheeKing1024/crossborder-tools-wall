"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function SponsorSlot({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n();
  return (
    <aside
      className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 ${
        compact ? "p-4" : "p-6 sm:p-8"
      }`}
      aria-label={t("赞助位", "Sponsor slot")}
    >
      <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
        {t("赞助位 / Sponsor", "Sponsor")}
      </span>
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
        {t("广告位招租", "Featured listing available")}
      </p>
      <h3
        className={`mt-2 font-bold text-slate-900 ${compact ? "text-lg" : "text-xl sm:text-2xl"}`}
      >
        {t("把你的工具放到首页推荐", "Put your tool on the home feature")}
      </h3>
      <p className="mt-2 max-w-xl text-sm text-slate-600">
        {t(
          "面向 Shopify / Shopee / TikTok Shop 卖家的比价墙流量。价格待定，先聊档位。",
          "Traffic from sellers comparing logistics, payments, ERP & ads. Pricing TBD — talk tiers first.",
        )}
      </p>
      <Link
        href="/sponsor"
        className="mt-4 inline-flex items-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-600"
      >
        {t("了解赞助 →", "Become a sponsor →")}
      </Link>
    </aside>
  );
}
