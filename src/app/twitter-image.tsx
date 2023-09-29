/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
import { siteConfig } from "src/global/config";

export const runtime = "edge";
export const alt =
  "Experienced Senior Frontend Engineer | JavaScript, React.js, Next.js Expert";
export const contentType = "image/png";

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          flex: 1,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 30,
          backgroundImage:
            "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
        }}
      >
        <h1 style={{ fontSize: 54 }}>{siteConfig.name}</h1>
      </div>
    ),
    {
      ...size,
    }
  );
}
