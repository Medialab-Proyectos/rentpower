"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function PageIntro() {
  const [phase, setPhase] = useState<
    "hidden" | "enter" | "particles" | "text" | "exit" | "done"
  >("hidden");

  useEffect(() => {
    // Only run once per session
    if (sessionStorage.getItem("mp_intro_seen")) {
      setPhase("done");
      return;
    }

    // Kickoff chain
    const t0 = setTimeout(() => setPhase("enter"), 300);
    const t1 = setTimeout(() => setPhase("particles"), 1500);
    const t2 = setTimeout(() => setPhase("text"), 3000);
    const t3 = setTimeout(() => setPhase("exit"), 6200);
    const t4 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("mp_intro_seen", "1");
    }, 7200);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      {/* ── Keyframe definitions ── */}
      <style>{`
        @keyframes mp-scanline {
          0%   { transform: translateY(-100%); opacity: 0.6; }
          100% { transform: translateY(200vh);  opacity: 0.0; }
        }
        @keyframes mp-glow-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1.0; transform: scale(1.08); }
        }
        @keyframes mp-logo-in {
          0%   { opacity: 0; transform: scale(0.6) translateY(20px); filter: blur(12px); }
          60%  { opacity: 1; transform: scale(1.04) translateY(-4px); filter: blur(0); }
          100% { opacity: 1; transform: scale(1) translateY(0);       filter: blur(0); }
        }
        @keyframes mp-ring-expand {
          0%   { opacity: 0.8; transform: scale(0.4); }
          100% { opacity: 0;   transform: scale(2.6); }
        }
        @keyframes mp-tagline-in {
          0%   { opacity: 0; letter-spacing: 0.6em; }
          100% { opacity: 1; letter-spacing: 0.2em; }
        }
        @keyframes mp-particle {
          0%   { opacity: 0; transform: translate(0, 0) scale(0); }
          20%  { opacity: 1; }
          100% { opacity: 0; transform: var(--tx, translateX(60px)) var(--ty, translateY(-80px)) scale(0.4); }
        }
        @keyframes mp-curtain-up {
          0%   { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(0 0 100% 0); }
        }
        @keyframes mp-flash {
          0%   { opacity: 0; }
          30%  { opacity: 0.18; }
          100% { opacity: 0; }
        }
      `}</style>

      {/* ── Overlay wrapper ── */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, #0f1c2e 0%, #020509 100%)",
          animation:
            phase === "exit"
              ? "mp-curtain-up 0.85s cubic-bezier(0.76,0,0.24,1) forwards"
              : undefined,
        }}
      >
        {/* Scanline sweep */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
          style={{
            background:
              "linear-gradient(to right, transparent, #00ffe3 40%, #00a6d6 60%, transparent)",
            animation: "mp-scanline 1.4s ease-in-out forwards",
            animationDelay: "0.3s",
            opacity: 0,
          }}
        />

        {/* Flash on exit */}
        {phase === "exit" && (
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "white",
              animation: "mp-flash 0.4s ease-out forwards",
            }}
          />
        )}

        {/* Ambient glow blob */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 480,
            height: 480,
            background:
              "radial-gradient(circle, rgba(0,255,227,0.12) 0%, rgba(0,166,214,0.06) 60%, transparent 100%)",
            animation:
              phase === "enter" || phase === "particles" || phase === "text"
                ? "mp-glow-pulse 2.4s ease-in-out infinite"
                : undefined,
          }}
        />

        {/* Expanding ring 1 */}
        {phase !== "hidden" && (
          <div
            className="absolute rounded-full pointer-events-none border border-cyan-400/30"
            style={{
              width: 260,
              height: 260,
              animation: "mp-ring-expand 1.8s ease-out forwards",
              animationDelay: "0.5s",
            }}
          />
        )}
        {/* Expanding ring 2 */}
        {phase !== "hidden" && (
          <div
            className="absolute rounded-full pointer-events-none border border-blue-400/20"
            style={{
              width: 260,
              height: 260,
              animation: "mp-ring-expand 2.2s ease-out forwards",
              animationDelay: "0.9s",
            }}
          />
        )}

        {/* Particles */}
        {(phase === "particles" || phase === "text" || phase === "exit") &&
          PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: p.size,
                height: p.size,
                left: `calc(50% + ${p.x}px)`,
                top: `calc(50% + ${p.y}px)`,
                background: p.color,
                boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                "--tx": `translateX(${p.dx}px)`,
                "--ty": `translateY(${p.dy}px)`,
                animation: `mp-particle ${p.dur}s ease-out forwards`,
                animationDelay: `${p.delay}s`,
              } as React.CSSProperties}
            />
          ))}

        {/* Logo + tagline column */}
        <div className="relative flex flex-col items-center gap-6 z-10">
          {/* Logo */}
          <div
            style={{
              animation:
                phase === "enter" ||
                phase === "particles" ||
                phase === "text" ||
                phase === "exit"
                  ? "mp-logo-in 0.75s cubic-bezier(0.34,1.56,0.64,1) forwards"
                  : undefined,
              opacity: 0,
            }}
          >
            <Image
              src="/images/macpower-logo-white.svg"
              alt="MacPower IT Solutions"
              width={260}
              height={52}
              priority
              className="w-[220px] sm:w-[280px] md:w-[320px] h-auto select-none"
            />
          </div>

          {/* Divider line */}
          {(phase === "text" || phase === "exit") && (
            <div
              className="h-px w-48 sm:w-64"
              style={{
                background:
                  "linear-gradient(to right, transparent, #00ffe3, #00a6d6, transparent)",
                animation: "mp-tagline-in 0.5s ease-out forwards",
              }}
            />
          )}

          {/* Tagline */}
          {(phase === "text" || phase === "exit") && (
            <p
              className="text-xs sm:text-sm font-light text-cyan-300/80 uppercase tracking-[0.2em]"
              style={{
                animation: "mp-tagline-in 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              Apple Business Partner · Colombia
            </p>
          )}
        </div>
      </div>
    </>
  );
}

// ── Static particle data (pre-calculated for perf) ──
const PARTICLES = [
  { x: -40, y: -30, dx: -120, dy: -160, size: 4, dur: 1.6, delay: 0.0, color: "#00ffe3" },
  { x:  50, y: -20, dx:  140, dy: -130, size: 3, dur: 1.8, delay: 0.1, color: "#00a6d6" },
  { x:  20, y:  40, dx:   80, dy:  140, size: 5, dur: 1.5, delay: 0.0, color: "#00ffe3" },
  { x: -60, y:  30, dx: -100, dy:  120, size: 3, dur: 1.9, delay: 0.2, color: "#60d9fa" },
  { x:  80, y:   5, dx:  160, dy:  -60, size: 4, dur: 1.7, delay: 0.1, color: "#00a6d6" },
  { x: -80, y: -10, dx: -150, dy:  -80, size: 3, dur: 2.0, delay: 0.3, color: "#00ffe3" },
  { x:  10, y: -60, dx:   60, dy: -160, size: 6, dur: 1.6, delay: 0.0, color: "#60d9fa" },
  { x: -20, y:  70, dx:  -70, dy:  170, size: 4, dur: 1.8, delay: 0.2, color: "#00ffe3" },
  { x:  60, y:  50, dx:  130, dy:  110, size: 3, dur: 2.1, delay: 0.15, color: "#00a6d6" },
  { x: -50, y: -55, dx: -110, dy: -140, size: 5, dur: 1.7, delay: 0.05, color: "#00ffe3" },
  { x: 100, y: -30, dx:  180, dy:  -90, size: 3, dur: 1.9, delay: 0.25, color: "#60d9fa" },
  { x: -90, y:  60, dx: -170, dy:  130, size: 4, dur: 1.5, delay: 0.1,  color: "#00a6d6" },
];
