"use client";

import { siteConfig } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export default function SponsorPage() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:py-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
          {t("赞助位 / Sponsor", "Sponsor")}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
          {t("如何获得首页精选曝光", "How to get featured")}
        </h1>
        <p className="mt-3 text-slate-600">
          {t(
            "本站后续通过赞助/精选列表变现。当前不接入收款，价格档位待定。",
            "Monetization will be via sponsor/featured listings. No payment integration yet — pricing TBD.",
          )}
        </p>
      </div>

      <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-6">
        <h2 className="text-lg font-bold text-slate-900">
          {t("档位与价格", "Tiers & pricing")}
        </h2>
        <p className="mt-2 text-slate-700">
          {t(siteConfig.sponsorPricingNoteZh, siteConfig.sponsorPricingNoteEn)}
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>
            {t(
              "首页赞助位（明确标注「赞助位/Sponsor」）",
              "Home sponsor slot (clearly labeled Sponsor)",
            )}
          </li>
          <li>
            {t(
              "分类页精选置顶（可选）",
              "Optional category-page featured pin",
            )}
          </li>
          <li>
            {t(
              "工具卡片「精选」角标（可选）",
              "Optional Featured badge on tool cards",
            )}
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">
          {t("联系我们", "Contact")}
        </h2>
        <p className="mt-2 text-slate-600">
          {t(
            "邮件沟通意向、素材与上线时间。占位邮箱可稍后替换。",
            "Email intent, creatives and go-live timing. Placeholder email — replace later.",
          )}
        </p>
        <a
          href={`mailto:${siteConfig.sponsorEmail}?subject=${encodeURIComponent(
            t("赞助咨询 - 跨境工具比价墙", "Sponsor inquiry - Tools Wall"),
          )}`}
          className="mt-4 inline-flex rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          {siteConfig.sponsorEmail}
        </a>
      </div>

      <p className="text-xs text-slate-400">
        {t(
          "收款与合同流程以后再说；本页仅展示招商信息。",
          "Billing & contracts later — this page is sponsor info only.",
        )}
      </p>
    </div>
  );
}
