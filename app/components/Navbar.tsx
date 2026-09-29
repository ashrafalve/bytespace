"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full">
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 24px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <Image src="/logo.png" alt="ByteSpace Logo" width={29} height={32} />
          <span
            style={{
              fontFamily: "'Clash Display', 'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "30px",
              color: "#F5F5F6",
              marginLeft: "8px",
            }}
          >
            ByteSpace
          </span>
        </Link>

        {/* Desktop Nav Links — centered */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "120%",
              color: "#F5F5F6",
              textDecoration: "none",
              borderBottom: "1.5px solid #F5F5F6",
              paddingBottom: "2px",
            }}
          >
            Home
          </Link>
          <a
            href="#courses"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#F5F5F6",
              textDecoration: "none",
            }}
          >
            Courses
          </a>
          <a
            href="#creator-cta"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#F5F5F6",
              textDecoration: "none",
            }}
          >
            Creators
          </a>
        </div>

        {/* Desktop Auth + Cart */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexShrink: 0,
          }}
        >
          <Link
            href="/login"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#F5F5F6",
              textDecoration: "none",
            }}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#F5F5F6",
              textDecoration: "none",
            }}
          >
            Join Us
          </Link>
          <button
            className="relative flex items-center justify-center"
            style={{
              width: "24px",
              height: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              flexShrink: 0,
              position: "relative",
            }}
            aria-label="Cart"
          >
            <Image
              src="/icons/Vector (7).png"
              alt="Cart"
              fill
              sizes="24px"
              className="object-contain"
            />
          </button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "#F5F5F6",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "#F5F5F6",
              borderRadius: "2px",
              opacity: menuOpen ? 0 : 1,
              transition: "all 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "#F5F5F6",
              borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#003BE2",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ color: "#F5F5F6", fontFamily: "'Poppins', sans-serif", fontSize: "16px", textDecoration: "none" }}>Home</Link>
          <a href="#courses" onClick={() => setMenuOpen(false)} style={{ color: "#F5F5F6", fontFamily: "'Poppins', sans-serif", fontSize: "16px", textDecoration: "none" }}>Courses</a>
          <a href="#creator-cta" onClick={() => setMenuOpen(false)} style={{ color: "#F5F5F6", fontFamily: "'Poppins', sans-serif", fontSize: "16px", textDecoration: "none" }}>Creators</a>
          <Link href="/login" onClick={() => setMenuOpen(false)} style={{ color: "#F5F5F6", fontFamily: "'Poppins', sans-serif", fontSize: "16px", textDecoration: "none" }}>Sign In</Link>
          <Link href="/register" onClick={() => setMenuOpen(false)} style={{ color: "#D4FB20", fontFamily: "'Poppins', sans-serif", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}>Join Us</Link>
        </div>
      )}

    </nav>
  );
}
