"use client";

const HAPPY_AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=36&h=36&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=36&h=36&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=36&h=36&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=36&h=36&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=36&h=36&fit=crop&crop=face&q=80",
];

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in as ${email || "designer@example.com"}`);
  };

  return (
    <main
      className="relative w-full min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#003BE2", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Full-viewport grid background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.12,
        }}
      />

      {/* Logo */}
      <div className="relative z-10" style={{ padding: "clamp(24px, 4vw, 48px) clamp(16px, 6vw, 122px)" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <Image src="/logo.png" alt="ByteSpace Logo" width={29} height={32} />
        </Link>
      </div>

      {/* Two-column layout */}
      <div
        className="relative z-10"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 80px) clamp(48px, 8vw, 80px)",
          display: "flex",
          alignItems: "flex-start",
          gap: "clamp(32px, 5vw, 80px)",
          flexWrap: "wrap",
        }}
      >
        {/* ===== LEFT COLUMN ===== */}
        <div
          className="login-left"
          style={{
            flex: "1 1 340px",
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            color: "#F5F5F6",
          }}
        >
          {/* Header text */}
          <div style={{ marginBottom: "clamp(24px, 4vw, 48px)" }}>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 600,
                color: "#F5F5F6",
                margin: "0 0 12px 0",
              }}
            >
              Sign in with ease
            </p>
            <p
              style={{
                fontSize: "clamp(14px, 1.5vw, 18px)",
                fontWeight: 400,
                lineHeight: "1.6",
                color: "#F5F5F6",
                margin: 0,
                maxWidth: "480px",
              }}
            >
              Experience a seamless and efficient sign-in process that grants you instant access to a
              world of knowledge.
            </p>
          </div>

          {/* Stacked cards visual */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              minHeight: "clamp(380px, 50vw, 520px)",
            }}
          >
            {/* 3D Torus Ring */}
            <div
              className="login-deco"
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "clamp(80px, 12vw, 146px)",
                height: "clamp(80px, 12vw, 146px)",
                zIndex: 30,
                pointerEvents: "none",
              }}
            >
              <Image src="/assets/mask-group-2.png" alt="" width={147} height={147} className="object-contain w-full h-full" />
            </div>

            {/* CARD 1 — background card */}
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "clamp(80px, 14vw, 150px)",
                width: "clamp(260px, 45vw, 373px)",
                height: "clamp(280px, 48vw, 384px)",
                borderRadius: "24px",
                overflow: "hidden",
                backgroundColor: "white",
                border: "1px solid #CED0D3",
                boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                zIndex: 10,
                color: "#242528",
              }}
            >
              {/* mask-group squiggle — top-right corner of background card */}
              <div style={{ position: "absolute", top: "-8px", right: "-8px", width: "160px", height: "160px", zIndex: 5, pointerEvents: "none", opacity: 1 }}>
                <Image src="/assets/mask-group.png" alt="" fill sizes="160px" className="object-contain" />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "16px",
                  right: "16px",
                  height: "clamp(130px, 22vw, 195px)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "url('https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80') center / cover no-repeat, #443131",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "12px",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "24px",
                      backgroundColor: "rgba(246,246,246,0.6)",
                      backdropFilter: "blur(4px)",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#4F4F4F",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ position: "absolute", left: "16px", top: "clamp(158px, 26vw, 228px)", right: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 600, color: "#000", margin: "0 0 4px 0", flex: 1 }}>
                    Build Digital Asset
                  </h3>
                  <span style={{ display: "flex", alignItems: "center", gap: "2px", fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#82868E", flexShrink: 0, marginTop: "2px" }}>
                    4.5
                    <span style={{ color: "#CBFC01", fontSize: "14px", lineHeight: 1 }}>★</span>
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#4F4F4F", margin: "0 0 12px 0" }}>
                  <span>by </span>purepearl studio
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", margin: "6px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "4px 10px", borderRadius: "24px", backgroundColor: "#F5F5F6" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <rect x="2" y="12" width="5" height="9" rx="1" fill="#4B4C53" />
                      <rect x="9" y="7" width="5" height="14" rx="1" fill="#4B4C53" />
                      <rect x="16" y="3" width="5" height="18" rx="1" fill="#4B4C53" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: 500, color: "#4B4C53" }}>Beginner</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                    {HAPPY_AVATARS.slice(0, 3).map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt="Student"
                        style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          border: "2px solid #FFFFFF",
                          marginLeft: i === 0 ? "0" : "-6px",
                          objectFit: "cover",
                          position: "relative",
                          zIndex: 10 - i,
                          display: "block",
                        }}
                      />
                    ))}
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        backgroundColor: "#D4FB20",
                        border: "2px solid #FFFFFF",
                        marginLeft: "-6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "9px",
                        color: "#242528",
                        position: "relative",
                        zIndex: 1,
                        flexShrink: 0,
                      }}
                    >
                      26+
                    </div>
                  </div>
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 600, color: "#003BE2", margin: "6px 0 0 0" }}>
                  $25 <span style={{ fontSize: "12px", fontWeight: 400, color: "#4F4F4F" }}>/lifetime</span>
                </p>
              </div>
            </div>

            {/* CARD 2 — foreground card */}
            <div
              style={{
                position: "absolute",
                left: "clamp(60px, 10vw, 111px)",
                top: "0",
                width: "clamp(260px, 45vw, 373px)",
                height: "clamp(280px, 48vw, 384px)",
                borderRadius: "24px",
                overflow: "hidden",
                backgroundColor: "white",
                border: "1px solid #CED0D3",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                zIndex: 20,
                color: "#242528",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "16px",
                  right: "16px",
                  height: "clamp(130px, 22vw, 195px)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "url('https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&q=80') center / cover no-repeat, #443131",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "12px",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "24px",
                      backgroundColor: "rgba(246,246,246,0.6)",
                      backdropFilter: "blur(4px)",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#4F4F4F",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ position: "absolute", left: "16px", top: "clamp(158px, 26vw, 228px)", right: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 600, color: "#000", margin: "0 0 4px 0", flex: 1 }}>
                    the Power of Big Data
                  </h3>
                  <span style={{ display: "flex", alignItems: "center", gap: "2px", fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#82868E", flexShrink: 0, marginTop: "2px" }}>
                    4.5
                    <span style={{ color: "#CBFC01", fontSize: "14px", lineHeight: 1 }}>★</span>
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#4F4F4F", margin: "0 0 8px 0" }}>
                  <span>by </span>purepearl studio
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", margin: "6px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "4px 10px", borderRadius: "24px", backgroundColor: "#F5F5F6" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <rect x="2" y="12" width="5" height="9" rx="1" fill="#4B4C53" />
                      <rect x="9" y="7" width="5" height="14" rx="1" fill="#4B4C53" />
                      <rect x="16" y="3" width="5" height="18" rx="1" fill="#4B4C53" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: 500, color: "#4B4C53" }}>Beginner</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                    {HAPPY_AVATARS.slice(0, 3).map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt="Student"
                        style={{
                          width: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          border: "2px solid #FFFFFF",
                          marginLeft: i === 0 ? "0" : "-6px",
                          objectFit: "cover",
                          position: "relative",
                          zIndex: 10 - i,
                          display: "block",
                        }}
                      />
                    ))}
                    <div
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        backgroundColor: "#D4FB20",
                        border: "2px solid #FFFFFF",
                        marginLeft: "-6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "9px",
                        color: "#242528",
                        position: "relative",
                        zIndex: 1,
                        flexShrink: 0,
                      }}
                    >
                      26+
                    </div>
                  </div>
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", fontWeight: 600, color: "#003BE2", margin: "6px 0 0 0" }}>
                  $25 <span style={{ fontSize: "12px", fontWeight: 400, color: "#4F4F4F" }}>/lifetime</span>
                </p>
              </div>
            </div>

            {/* 3D Pyramid */}
            <div
              className="login-deco"
              style={{
                position: "absolute",
                left: "0",
                bottom: "clamp(-100px, -12vw, -130px)",
                width: "clamp(100px, 15vw, 188px)",
                height: "clamp(100px, 15vw, 188px)",
                zIndex: 30,
                pointerEvents: "none",
              }}
            >
              <Image src="/assets/mask-group-3.png" alt="" width={189} height={189} className="object-contain w-full h-full" />
            </div>

            {/* Happy Students badge */}
            <div
              style={{
                position: "absolute",
                right: "0",
                bottom: "clamp(-40px, -4vw, -60px)",
                width: "clamp(200px, 28vw, 258px)",
                borderRadius: "16px",
                backgroundColor: "#D4FB20",
                padding: "clamp(12px, 2vw, 16px)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                zIndex: 40,
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                overflow: "visible",
              }}
            >
              {/* mask-group squiggle — top of badge */}
              <div style={{ position: "absolute", top: "-100px", right: "-8px", width: "144px", height: "144px", pointerEvents: "none", opacity: 1 }}>
                <Image src="/assets/mask-group.png" alt="" fill sizes="144px" className="object-contain" />
              </div>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", fontWeight: 500, color: "#242528", margin: 0 }}>Happy Students</p>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ fontSize: "12px", color: "#82868E" }}><strong style={{ color: "#242528" }}>4.5</strong> (240)</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#CBFC01">
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 19.022l-7.417 4.501L6 15.27 0 9.423l8.332-1.268z" />
                  </svg>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {HAPPY_AVATARS.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt="student" width={36} height={36}
                    style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #D4FB20", marginLeft: i === 0 ? "0" : "-12px", objectFit: "cover" }}
                  />
                ))}
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#242528", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, marginLeft: "-12px", border: "2px solid #D4FB20" }}>2K+</div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN — Sign In Form ===== */}
        <div
          style={{
            flex: "1 1 340px",
            minWidth: "300px",
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            padding: "clamp(28px, 5vw, 63px)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
            color: "#242528",
            alignSelf: "flex-start",
          }}
        >
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "18px", color: "#003BE2", margin: "0 0 4px 0" }}>Sign In</p>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, color: "#242528", margin: "0 0 clamp(24px, 4vw, 40px) 0", lineHeight: "1.2" }}>
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2.5vw, 24px)" }}>
            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 500, color: "#242528" }}>Email</label>
              <input
                type="email"
                required
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  height: "52px",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "1px solid #E5E6E8",
                  fontSize: "16px",
                  color: "#242528",
                  outline: "none",
                  fontFamily: "'Poppins', sans-serif",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Password */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", fontWeight: 500, color: "#242528" }}>Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  height: "52px",
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "1px solid #E5E6E8",
                  fontSize: "16px",
                  color: "#242528",
                  outline: "none",
                  fontFamily: "'Poppins', sans-serif",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Submit */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
              <button
                type="submit"
                style={{
                  padding: "12px 32px",
                  borderRadius: "24px",
                  backgroundColor: "#D4FB20",
                  color: "#242528",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "18px",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Social Logins */}
          <div style={{ marginTop: "clamp(20px, 3vw, 32px)", display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(16px, 2.5vw, 24px)" }}>
            <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#E5E6E8" }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#888888" }}>or</span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#E5E6E8" }} />
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <button
                type="button"
                style={{ width: "56px", height: "56px", borderRadius: "50%", border: "1px solid #E5E6E8", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backgroundColor: "transparent" }}
                aria-label="Facebook Sign In"
              >
                <Image src="/icons/fb.png" alt="Facebook" width={24} height={24} style={{ objectFit: "contain" }} />
              </button>
              <button
                type="button"
                style={{ width: "56px", height: "56px", borderRadius: "50%", border: "1px solid #E5E6E8", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backgroundColor: "transparent" }}
                aria-label="Google Sign In"
              >
                <Image src="/icons/goggle.png" alt="Google" width={24} height={24} style={{ objectFit: "contain" }} />
              </button>
            </div>
          </div>

          {/* Bottom link */}
          <div style={{ marginTop: "clamp(20px, 3vw, 32px)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#888888" }}>New user?</span>
            <Link href="/register" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#003BE2", textDecoration: "none", fontWeight: 500 }}>
              Create an account
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .login-deco { display: none !important; }
          .login-left { display: none !important; }
        }
      `}</style>
    </main>
  );
}
