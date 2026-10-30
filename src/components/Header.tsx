"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { categories } from "@/data/categories";
import { useI18n } from "@/lib/i18n";

const nav = [
  { href: "/", zh: "首页", en: "Home" },
  { href: "/tools", zh: "全部工具", en: "All tools" },
  { href: "/sponsor", zh: "赞助", en: "Sponsor" },
  { href: "/about", zh: "关于", en: "About" },
];

export function Header() {
  const { locale, setLocale, t } = useI18n();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="group flex min-w-0 flex-col">
          <span className="truncate text-base font-bold tracking-tight text-slate-900 group-hover:text-indigo-700">
            {t(siteConfig.nameZh, siteConfig.nameEn)}
          </span>
          <span className="hidden text-[11px] text-slate-500 sm:block">
            {t("跨境卖家工具比价", "Seller tools comparison")}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  active
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {t(item.zh, item.en)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-slate-200 bg-slate-50 p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLocale("zh")}
              className={`rounded-full px-2.5 py-1 ${
                locale === "zh"
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-500"
              }`}
              aria-pressed={locale === "zh"}
            >
              中文
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full px-2.5 py-1 ${
                locale === "en"
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-500"
              }`}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-slate-100 px-4 py-2 md:hidden">
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/tools/${c.slug}`}
            className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {c.icon} {t(c.nameZh, c.nameEn)}
          </Link>
        ))}
        <Link
          href="/sponsor"
          className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800"
        >
          {t("赞助位", "Sponsor")}
        </Link>
      </div>
    </header>
  );
}
