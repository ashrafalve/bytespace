import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50"
      style={{ height: "120px", width: "100%" }}
    >
      {/* Logo — left: 122px, vertically centered */}
      <Link
        href="/"
        className="absolute flex items-center gap-2"
        style={{ left: "122px", top: "35px", textDecoration: "none" }}
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

      {/* Nav Links — centered */}
      <div
        className="absolute flex items-center"
        style={{
          gap: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          top: "50%",
          marginTop: "-13px",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Poppins', var(--font-poppins), sans-serif",
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
          href="#courses-section"
          style={{
            fontFamily: "'Poppins', var(--font-poppins), sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "160%",
            color: "#F5F5F6",
            textDecoration: "none",
          }}
        >
          Courses
        </a>
        <a
          href="#creator-cta"
          style={{
            fontFamily: "'Poppins', var(--font-poppins), sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "160%",
            color: "#F5F5F6",
            textDecoration: "none",
          }}
        >
          Creators
        </a>
      </div>

      {/* Auth + Cart — right: 120px */}
      <div
        className="absolute flex items-center"
        style={{
          gap: "24px",
          right: "120px",
          top: "48px",
        }}
      >
        <Link
          href="/login"
          style={{
            fontFamily: "'Poppins', var(--font-poppins), sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#F5F5F6",
            textDecoration: "none",
          }}
        >
          Sign In
        </Link>
        <Link
          href="/register"
          style={{
            fontFamily: "'Poppins', var(--font-poppins), sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#F5F5F6",
            textDecoration: "none",
          }}
        >
          Join Us
        </Link>
        <button
          className="relative flex items-center justify-center"
          style={{ width: "24px", height: "24px", background: "none", border: "none", cursor: "pointer" }}
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
    </nav>
  );
}

