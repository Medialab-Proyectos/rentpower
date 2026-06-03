import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "RentPower | Mayorista tecnológico para resellers LATAM";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0e1a 0%, #0f1429 50%, #0a0e1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow effects */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(143,38,251,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(57,88,250,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* "R" icon with gradient */}
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, #8f26fb 0%, #3958fa 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "56px",
              fontWeight: 900,
              color: "white",
              boxShadow: "0 20px 60px rgba(143,38,251,0.3)",
            }}
          >
            R
          </div>

          {/* Brand name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: "72px",
                fontWeight: 800,
                letterSpacing: "-2px",
                background: "linear-gradient(135deg, #ededed 0%, #b4b8d0 100%)",
                backgroundClip: "text",
                color: "transparent",
                display: "flex",
              }}
            >
              RentPower
            </div>

            {/* Separator line */}
            <div
              style={{
                width: "120px",
                height: "3px",
                background: "linear-gradient(90deg, #8f26fb, #3958fa)",
                borderRadius: "2px",
                display: "flex",
              }}
            />

            {/* Subtitle */}
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "8px",
                color: "#b4b8d0",
                display: "flex",
              }}
            >
              WHOLESALER
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "18px",
              color: "#6b7280",
              marginTop: "16px",
              display: "flex",
            }}
          >
            Mayorista tecnológico para resellers LATAM
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
