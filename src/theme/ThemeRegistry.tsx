"use client";
import * as React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";

// Ensures Emotion styles are injected consistently between SSR and client to avoid hydration mismatches.
export default function ThemeRegistry({
  children,
}: React.PropsWithChildren<{}>) {
  const [cache] = React.useState(() => {
    const cache = createCache({ key: "mui", prepend: true });
    // compat flag for emotion + React 19 style streaming
    (cache as any).compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const entries = Object.entries(cache.inserted);
    if (entries.length === 0) return null;
    return (
      <style
        data-emotion={`${cache.key} ${entries.map(([key]) => key).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: entries.map(([, val]) => val).join(" "),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
