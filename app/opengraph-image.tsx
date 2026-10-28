import { ImageResponse } from "next/og";
import { product, priceLabel } from "@/lib/config";

export const alt = `${product.title} — ${product.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: once the real cover exists, render it here instead of the typographic version.
export default function OgImage() {
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
          background: "radial-gradient(circle at 75% 50%, rgba(201,162,75,0.28), #0b0b0c 60%)",
          color: "#f4f1ea",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}>
          <div style={{ fontSize: 22, letterSpacing: 8, color: "#c9a24b" }}>THE EBOOK</div>
          <div style={{ fontSize: 76, lineHeight: 1.05, marginTop: 20 }}>{product.subtitle}</div>
          <div style={{ fontSize: 28, marginTop: 30, color: "#a8a39a" }}>{`Instant PDF download · ${priceLabel}`}</div>
        </div>
        <div
          style={{
            width: 300,
            height: 450,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #1a1a1c, #070708)",
            border: "2px solid #c9a24b",
            boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
            transform: "rotate(4deg)",
          }}
        >
          <div style={{ fontSize: 52, color: "#c9a24b", letterSpacing: 4 }}>RICHEST</div>
          <div style={{ fontSize: 52, color: "#c9a24b", letterSpacing: 4 }}>WOLF</div>
        </div>
      </div>
    ),
    size,
  );
}
