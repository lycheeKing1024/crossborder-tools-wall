"use client";

import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export function PriceDisclaimer() {
  const { t } = useI18n();
  return (
    <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900">
      ⚠️ {t(siteConfig.disclaimerZh, siteConfig.disclaimerEn)}{" "}
      <span className="opacity-70">
        ({t("数据刷新", "Data refresh")}: {siteConfig.lastDataRefresh})
      </span>
    </p>
  );
}
