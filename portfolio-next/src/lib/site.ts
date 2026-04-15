const rawSiteUrl =
  import.meta.env.VITE_SITE_URL?.trim() || "https://yujiazhang.co.uk";

export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export const SITE_NAME = "Yujia Zhang";

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
