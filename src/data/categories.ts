export type CategoryId = "logistics" | "payments" | "erp" | "ads";

export type Category = {
  id: CategoryId;
  nameZh: string;
  nameEn: string;
  slug: string;
  descriptionZh: string;
  descriptionEn: string;
  icon: string;
};

export const categories: Category[] = [
  {
    id: "logistics",
    nameZh: "物流",
    nameEn: "Logistics",
    slug: "logistics",
    descriptionZh: "跨境尾程、专线与仓配方案，适合 Shopify / Shopee / TikTok Shop 卖家。",
    descriptionEn:
      "Last-mile, linehaul and fulfillment options for Shopify / Shopee / TikTok Shop sellers.",
    icon: "📦",
  },
  {
    id: "payments",
    nameZh: "收款",
    nameEn: "Payments",
    slug: "payments",
    descriptionZh: "跨境收款、结汇与多币种账户工具。",
    descriptionEn: "Cross-border payout, FX settlement and multi-currency accounts.",
    icon: "💳",
  },
  {
    id: "erp",
    nameZh: "ERP",
    nameEn: "ERP",
    slug: "erp",
    descriptionZh: "多平台订单、库存与采购协同系统。",
    descriptionEn: "Multi-channel order, inventory and purchasing systems.",
    icon: "🧩",
  },
  {
    id: "ads",
    nameZh: "广告",
    nameEn: "Ads",
    slug: "ads",
    descriptionZh: "站内与站外投放渠道，获客与转化。",
    descriptionEn: "On-platform and off-platform ad channels for acquisition.",
    icon: "📣",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug || c.id === slug);
}
