import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Virat P K Gupta — AI Engineer";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#050507",
          backgroundImage:
            "radial-gradient(900px 500px at 15% 10%, rgba(59,130,246,0.35), transparent), radial-gradient(800px 500px at 90% 90%, rgba(168,85,247,0.30), transparent)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              border: "1.5px solid rgba(138,180,255,0.4)",
              background: "linear-gradient(135deg,#0b1220,#1a0f2e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#8ab4ff",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            VG
          </div>
          <span style={{ color: "#fafafa", fontSize: "30px", fontWeight: 700 }}>
            Virat<span style={{ color: "#8ab4ff" }}>.</span>
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#8ab4ff",
              fontSize: "26px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Production AI Engineer
          </span>
          <div
            style={{
              display: "flex",
              color: "#fafafa",
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: "900px",
              alignItems: "baseline",
              gap: "12px",
            }}
          >
            <span>Building Production-Grade</span>
            <span style={{ color: "#8ab4ff" }}>AI Systems</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            color: "#a1a1aa",
            fontSize: "24px",
          }}
        >
          <span
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              padding: "10px 22px",
            }}
          >
            LLMs
          </span>
          <span
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              padding: "10px 22px",
            }}
          >
            Agentic AI
          </span>
          <span
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              padding: "10px 22px",
            }}
          >
            RAG
          </span>
          <span
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "999px",
              padding: "10px 22px",
            }}
          >
            Multi-Agent
          </span>
        </div>
      </div>
    ),
    size,
  );
}