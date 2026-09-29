"use client";

import Image from "next/image";
import Link from "next/link";

export default function CreatorCTA() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#003BE2", padding: "80px 0" }}
      id="creator-cta"
    >
      {/* Grid overlay â€” 120px, 12% opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.12,
        }}
      />

      {/* Decorative shapes */}

      {/* Yellow squiggle â€” top-left */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "40px", top: "20px", width: "100px", height: "120px" }}
      >
        <Image
          src="/images/Frame.png"
          alt=""
          fill
          sizes="100px"
          className="object-contain"
        />
      </div>

      {/* White squiggle â€” top-left-inner */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "180px", top: "30px", width: "80px", height: "100px" }}
      >
        <Image
          src="/images/Frame (1).png"
          alt=""
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>

      {/* White cone â€” top-right-center */}
      <div
        className="absolute pointer-events-none"
        style={{ right: "360px", top: "10px", width: "100px", height: "120px" }}
      >
        <Image
          src="/images/Cone.png"
          alt=""
          fill
          sizes="100px"
          className="object-contain"
        />
      </div>

      {/* Green cone â€” far top-right */}
      <div
        className="absolute pointer-events-none"
        style={{ right: "100px", top: "-10px", width: "120px", height: "160px" }}
      >
        <Image
          src="/images/Cone (1).png"
          alt=""
          fill
          sizes="120px"
          className="object-contain"
        />
      </div>

      {/* White cylinder/torus â€” top-right */}
      <div
        className="absolute pointer-events-none"
        style={{ right: "20px", top: "20px", width: "100px", height: "120px", opacity: 0.8 }}
      >
        <Image
          src="/images/Cone (2).png"
          alt=""
          fill
          sizes="100px"
          className="object-contain"
        />
      </div>

      {/* Bottom-left yellow loop */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "30px",
          bottom: "20px",
          width: "100px",
          height: "120px",
          transform: "rotate(30deg) scaleY(-1)",
        }}
      >
        <Image
          src="/images/Frame.png"
          alt=""
          fill
          sizes="100px"
          className="object-contain"
        />
      </div>

      {/* Bottom-right white squiggle */}
      <div
        className="absolute pointer-events-none"
        style={{ right: "60px", bottom: "20px", width: "80px", height: "100px" }}
      >
        <Image
          src="/images/Mask Group.png"
          alt=""
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>

      {/* White cone bottom-left-inner */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "220px",
          bottom: "20px",
          width: "70px",
          height: "90px",
          opacity: 0.6,
        }}
      >
        <Image
          src="/images/Cone.png"
          alt=""
          fill
          sizes="70px"
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div
        className="relative"
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Poppins', var(--font-poppins), sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
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
            fontFamily: "'Poppins', var(--font-poppins), sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "160%",
            color: "rgba(255,255,255,0.65)",
            marginTop: "20px",
            maxWidth: "600px",
          }}
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link href="/register" style={{ textDecoration: "none" }}>
          <button
            id="join-creator-btn"
            style={{
              marginTop: "40px",
              padding: "14px 40px",
              borderRadius: "24px",
              backgroundColor: "#D4FB20",
              color: "#242528",
              fontFamily: "'Poppins', var(--font-poppins), sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "120%",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
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

