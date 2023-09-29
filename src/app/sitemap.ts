import { MetadataRoute } from "next";

interface ROUTES_SITEMAP_OPTIONS {
  [key: string]: string;
}

export const ROUTES_SITEMAP: ROUTES_SITEMAP_OPTIONS = {
  default: "/",
  faq: "/faq",
  policy: "/policy",
  signin: "/signin",
  signup: "/signup",
  contact: "/contact",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(ROUTES_SITEMAP).map((d) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_ADDRESS}${ROUTES_SITEMAP[d].slice(1)}`,
    lastModified: new Date(),
  }));
}
