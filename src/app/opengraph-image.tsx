/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
import { siteConfig } from "src/global/config";

export const runtime = "edge";
export const alt = siteConfig.description;
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
        }}
      >
        <h1>Ariful</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
