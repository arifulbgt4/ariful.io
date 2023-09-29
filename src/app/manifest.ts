import { MetadataRoute } from "next";
import { siteConfig } from "src/global/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Ariful",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#090c24",
    theme_color: "#42a5f5",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
