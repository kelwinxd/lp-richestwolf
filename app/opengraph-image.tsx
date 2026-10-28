import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { product, priceLabel, site } from "@/lib/config";

export const alt = `${product.title} by ${site.name} — ${product.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  // Satori can't read WebP, so it gets the source PNG cover
  const cover = await readFile(join(process.cwd(), "assets", "cover.png"));
  const coverSrc = `data:image/png;base64,${cover.toString("base64")}`;
  const coverH = 500;
  const coverW = Math.round((coverH * product.coverWidth) / product.coverHeight);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 90px",
          background: "radial-gradient(circle at 78% 50%, rgba(233,168,74,0.25), #0b0b0c 60%)",
          color: "#f4f1ea",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 22, letterSpacing: 8, color: "#e9a84a" }}>RICHEST WOLF</div>
          <div style={{ fontSize: 84, lineHeight: 1.05, marginTop: 20 }}>{product.title}</div>
          <div style={{ fontSize: 32, lineHeight: 1.3, marginTop: 20, color: "#d8d3c8" }}>{product.subtitle}</div>
          <div style={{ fontSize: 26, marginTop: 34, color: "#a8a39a" }}>{`Instant PDF download · ${priceLabel}`}</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverSrc}
          width={coverW}
          height={coverH}
          alt=""
          style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.8)", transform: "rotate(3deg)" }}
        />
      </div>
    ),
    size,
  );
}
