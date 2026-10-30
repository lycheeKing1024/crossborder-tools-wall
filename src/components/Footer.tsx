"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {t(siteConfig.nameZh, siteConfig.nameEn)}
          <span className="mx-2 text-slate-300">·</span>
          {t("价格仅供参考", "Prices are approximate")}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/tools" className="hover:text-indigo-700">
            {t("工具墙", "Tools")}
          </Link>
          <Link href="/sponsor" className="hover:text-indigo-700">
            {t("赞助", "Sponsor")}
          </Link>
          <Link href="/about" className="hover:text-indigo-700">
            {t("关于", "About")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
