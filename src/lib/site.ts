const rawUrl = import.meta.env.VITE_SITE_URL ?? "https://vedanyaa.com";

export const SITE = {
  name: "Vedanyaa Infotech",
  url: rawUrl.replace(/\/$/, ""),
  email: "info.vedanyaa@gmail.com",
  locale: "en_US",
  description:
    "Vedanyaa Infotech is a trusted software development company building PHP, MERN, Next.js, AI-driven apps, e-commerce platforms and custom ERP solutions for global clients.",
};

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return SITE.url;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}
