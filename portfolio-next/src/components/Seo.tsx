import { useEffect } from "react";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

interface ArticleMeta {
  publishedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  imagePath?: string;
  imageAlt?: string;
  robots?: string;
  type?: "website" | "article";
  jsonLd?: JsonLd;
  articleMeta?: ArticleMeta;
}

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content?: string
) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLinkCanonical(href?: string) {
  const selector = 'link[rel="canonical"]';
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!href) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function upsertLinkAlternate(type: string, href?: string, title?: string) {
  const selector = `link[rel="alternate"][type="${type}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!href) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "alternate");
    element.setAttribute("type", type);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
  if (title) {
    element.setAttribute("title", title);
  } else {
    element.removeAttribute("title");
  }
}

function syncArticleMeta(type?: string, articleMeta?: ArticleMeta) {
  // Remove any existing article: meta tags
  for (const el of document.head.querySelectorAll('meta[property^="article:"]')) {
    el.remove();
  }

  if (type !== "article" || !articleMeta) return;

  const append = (content: string, property: string) => {
    const el = document.createElement("meta");
    el.setAttribute("property", property);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  };

  if (articleMeta.publishedTime) append(articleMeta.publishedTime, "article:published_time");
  if (articleMeta.author) append(articleMeta.author, "article:author");
  if (articleMeta.section) append(articleMeta.section, "article:section");
  for (const tag of articleMeta.tags ?? []) {
    append(tag, "article:tag");
  }
}

function upsertJsonLd(jsonLd?: JsonLd) {
  const selector = 'script[data-seo-jsonld="true"]';
  const existing = document.head.querySelector<HTMLScriptElement>(selector);

  if (!jsonLd) {
    existing?.remove();
    return;
  }

  const script =
    existing ?? document.head.appendChild(document.createElement("script"));
  script.type = "application/ld+json";
  script.setAttribute("data-seo-jsonld", "true");
  script.textContent = JSON.stringify(jsonLd);
}

export default function Seo({
  title,
  description,
  canonicalPath,
  imagePath,
  imageAlt,
  robots = "index,follow",
  type = "website",
  jsonLd,
  articleMeta,
}: SeoProps) {
  useEffect(() => {
    document.title = title;

    const canonicalUrl = canonicalPath ? absoluteUrl(canonicalPath) : undefined;
    const imageUrl = imagePath ? absoluteUrl(imagePath) : undefined;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", robots);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("name", "twitter:card", imageUrl ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", imageAlt);
    upsertLinkCanonical(canonicalUrl);
    upsertLinkAlternate("application/rss+xml", absoluteUrl("/feed.xml"), "Yujia Zhang Feed");
    upsertJsonLd(jsonLd);
    syncArticleMeta(type, articleMeta);
  }, [articleMeta, canonicalPath, description, imageAlt, imagePath, jsonLd, robots, title, type]);

  return null;
}
