"use client";

import Image from "next/image";
import Link from "next/link";

export default function CreatorCTA() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: "#003BE2",
        padding: "clamp(80px, 10vw, 140px) 0",
        minHeight: "clamp(480px, 50vw, 560px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="creator-cta"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.12,
        }}
      />

      {/* Decorative 3D Shapes per Reference Image */}

      {/* 1. Top-Left Outer Corner: Lime Spring Frame.png (positioned higher up into top corner) */}
      <div
        className="absolute pointer-events-none cta-deco"
        style={{
          left: "-50px",
          top: "-40px",
          width: "clamp(120px, 16vw, 220px)",
          height: "clamp(120px, 16vw, 220px)",
          zIndex: 5,
        }}
      >
        <Image src="/assets/Frame.png" alt="" fill sizes="220px" className="object-contain object-left-top" />
      </div>

      {/* 2. Top-Left Inner: White Squiggle mask-group.png */}
      <div
        className="absolute pointer-events-none cta-deco"
        style={{
          left: "clamp(120px, 14vw, 200px)",
          top: "12%",
          width: "clamp(80px, 11vw, 150px)",
          height: "clamp(80px, 11vw, 150px)",
          zIndex: 5,
        }}
      >
        <Image src="/assets/mask-group.png" alt="" fill sizes="150px" className="object-contain" />
      </div>

      {/* 3. Middle-Left Edge: White Cone Cone copy.png */}
      <div
        className="absolute pointer-events-none cta-deco"
        style={{
          left: "0px",
          top: "42%",
          width: "clamp(80px, 11vw, 150px)",
          height: "clamp(80px, 11vw, 150px)",
          zIndex: 5,
        }}
      >
        <Image src="/assets/Cone copy.png" alt="" fill sizes="150px" className="object-contain object-left" />
      </div>

      {/* 4. Bottom-Left Corner: Lime Torus Ring mask-group-2.png (positioned lower) */}
      <div
        className="absolute pointer-events-none cta-deco"
        style={{
          left: "clamp(20px, 4vw, 50px)",
          bottom: "-90px",
          width: "clamp(130px, 16vw, 220px)",
          height: "clamp(130px, 16vw, 220px)",
          zIndex: 5,
        }}
      >
        <Image src="/assets/mask-group-2.png" alt="" fill sizes="220px" className="object-contain" />
      </div>

      {/* 5. Top-Right Inner: White Squiggle mask-group-3.png */}
      <div
        className="absolute pointer-events-none cta-deco"
        style={{
          right: "clamp(140px, 16vw, 240px)",
          top: "10%",
          width: "clamp(90px, 12vw, 160px)",
          height: "clamp(90px, 12vw, 160px)",
          zIndex: 5,
        }}
      >
        <Image src="/assets/mask-group-3.png" alt="" fill sizes="160px" className="object-contain" />
      </div>

      {/* 6. Top-Right Outer Edge: White 3D Cylinder Mask Group copy.png */}
      <div
        className="absolute pointer-events-none cta-deco"
        style={{
          right: "-20px",
          top: "10%",
          width: "clamp(130px, 17vw, 240px)",
          height: "clamp(150px, 19vw, 270px)",
          zIndex: 5,
        }}
      >
        <Image src="/assets/Mask Group copy.png" alt="" fill sizes="270px" className="object-contain object-right" />
      </div>

      {/* 7. Bottom-Right Corner: Lime Spring Frame.png (positioned lower) */}
      <div
        className="absolute pointer-events-none cta-deco"
        style={{
          right: "clamp(20px, 4vw, 50px)",
          bottom: "-90px",
          width: "clamp(130px, 16vw, 220px)",
          height: "clamp(130px, 16vw, 220px)",
          zIndex: 5,
        }}
      >
        <Image src="/assets/Frame.png" alt="" fill sizes="220px" className="object-contain" />
      </div>

      {/* Center Content */}
      <div
        className="relative"
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "840px",
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 24px)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            lineHeight: "120%",
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(14px, 1.5vw, 16px)",
            lineHeight: "160%",
            color: "rgba(255,255,255,0.75)",
            marginTop: "20px",
            maxWidth: "760px",
          }}
        >
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and international
          creators. Utilize our Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link href="/register" style={{ textDecoration: "none" }}>
          <button
            id="join-creator-btn"
            style={{
              marginTop: "36px",
              padding: "14px clamp(28px, 4vw, 42px)",
              borderRadius: "24px",
              backgroundColor: "#CBFC01",
              color: "#242528",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: "120%",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 8px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            Join as Creator
          </button>
        </Link>
      </div>
    </section>
  );
}
