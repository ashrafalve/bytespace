import Image from "next/image";

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=43&h=43&fit=crop&crop=face&q=80",
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#003BE2" }}
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

      {/* Solid filled lime half-circle background behind student image */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "clamp(500px, 70vw, 950px)",
          height: "clamp(500px, 70vw, 950px)",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-45%",
          borderRadius: "50%",
          backgroundColor: "#CBFC01",
          zIndex: 1,
        }}
      />

      {/* Decorative 3D shapes — hidden <=640px */}

      {/* Top-Left Edge: Yellow shape Frame.png */}
      <div
        className="absolute pointer-events-none hero-deco"
        style={{ left: "-45px", top: "12%", width: "clamp(95px, 13vw, 200px)", height: "clamp(95px, 13vw, 200px)" }}
      >
        <Image src="/assets/Frame.png" alt="" fill sizes="200px" className="object-contain object-left" />
      </div>

      {/* Top-Left Inner: Small flipped shape Frame (1).png */}
      <div
        className="absolute pointer-events-none hero-deco"
        style={{ left: "19%", top: "40%", width: "clamp(80px, 12vw, 175px)", height: "clamp(80px, 12vw, 175px)", transform: "scaleX(-1)" }}
      >
        <Image src="/assets/Frame (1).png" alt="" fill sizes="175px" className="object-contain" />
      </div>

      {/* Bottom-Left: White torus ring cone (positioned more right and down) */}
      <div
        className="absolute pointer-events-none hero-deco"
        style={{ left: "clamp(120px, 20vw, 26%)", top: "71%", width: "clamp(90px, 13vw, 190px)", height: "clamp(90px, 13vw, 190px)", zIndex: 3 }}
      >
        <Image src="/assets/Cone (2).png" alt="" fill sizes="190px" className="object-contain" />
      </div>

      {/* Top-Right Edge: Green cone Cone (1).png (flush to right edge, zero gap) */}
      <div
        className="absolute pointer-events-none hero-deco"
        style={{ right: "0px", top: "12%", width: "clamp(130px, 18vw, 290px)", height: "clamp(130px, 18vw, 290px)" }}
      >
        <Image src="/assets/Cone (1).png" alt="" fill sizes="290px" className="object-contain object-right" />
      </div>

      {/* Middle-Right: White pyramid cone (original Mask Group slot & size) */}
      <div
        className="absolute pointer-events-none hero-deco"
        style={{ right: "10%", top: "38%", width: "clamp(80px, 12vw, 188px)", height: "clamp(80px, 12vw, 188px)" }}
      >
        <Image src="/assets/Cone.png" alt="" fill sizes="188px" className="object-contain" />
      </div>

      {/* Bottom-Right: Yellow frame shape Frame (1).png (touching right edge of green bg circle) */}
      <div
        className="absolute pointer-events-none hero-deco"
        style={{ right: "clamp(110px, 18.5vw, 23.5%)", top: "73%", width: "clamp(95px, 13.5vw, 200px)", height: "clamp(95px, 13.5vw, 200px)" }}
      >
        <Image src="/assets/Frame (1).png" alt="" fill sizes="200px" className="object-contain" />
      </div>

      {/* Hero Content */}
      <div
        className="relative flex flex-col items-center"
        style={{
          zIndex: 10,
          paddingTop: "clamp(48px, 8vh, 110px)",
          paddingBottom: "0px",
          paddingLeft: "clamp(16px, 4vw, 24px)",
          paddingRight: "clamp(16px, 4vw, 24px)",
          gap: "clamp(16px, 3vw, 36px)",
        }}
      >
        {/* Text Block */}
        <div
          className="flex flex-col items-center"
          style={{ gap: "16px", maxWidth: "1100px", width: "100%" }}
        >
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.8rem, 1.4vw, 1.125rem)",
              lineHeight: "160%",
              textAlign: "center",
              color: "#E5E6E8",
              margin: 0,
              paddingTop: "clamp(8px, 2.5vw, 28px)",
              maxWidth: "480px",
            }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 5.5vw, 4.5rem)",
              lineHeight: "118%",
              letterSpacing: "-0.01em",
              textAlign: "center",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
        </div>

        {/* Search Bar */}
        <div
          className="flex items-center w-full"
          style={{
            gap: "8px",
            maxWidth: "581px",
            height: "48px",
          }}
        >
          <div
            className="flex items-center"
            style={{
              flex: 1,
              height: "52px",
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              padding: "12px 24px",
              gap: "8px",
              minWidth: 0,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#82868E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              aria-label="Search courses"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 2vw, 18px)",
                lineHeight: "160%",
                color: "#82868E",
                minWidth: 0,
              }}
            />
          </div>

          <button
            id="hero-search-btn"
            style={{
              height: "46px",
              padding: "0 clamp(16px, 3vw, 28px)",
              backgroundColor: "#D4FB20",
              borderRadius: "24px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(14px, 2vw, 18px)",
              lineHeight: "120%",
              color: "#242528",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            Search
          </button>
        </div>

        {/* Hero Visual Area: Main Student Image + 3 Floating Cards positioned per home/index.html */}
        <div
          className="relative w-full flex justify-center items-end"
          style={{
            maxWidth: "1200px",
            minHeight: "clamp(220px, 42vw, 541px)",
            marginTop: "clamp(8px, 3vw, 32px)",
            paddingBottom: "0px",
            marginBottom: "0px",
          }}
        >
          {/* Main Hero Image (Student Girl / Boy with Laptop) */}
          <div
            className="hero-image-slide-up"
            style={{
              position: "relative",
              width: "clamp(220px, 40vw, 578px)",
              height: "clamp(220px, 40vw, 541px)",
              zIndex: 10,
              marginBottom: "0px",
              filter:
                "drop-shadow(51px 73px 72px rgba(0,0,0,0.13)) drop-shadow(25px 37px 36px rgba(0,0,0,0.1))",
            }}
          >
            <Image
              src="/images/Image.png"
              alt="Student with laptop"
              fill
              sizes="(max-width: 768px) 70vw, 578px"
              className="object-contain object-bottom"
              priority
            />
          </div>

          {/* Floating Card 1: UI/UX Design */}
          <div
            className="floating-card hero-card-1"
            style={{
              position: "absolute",
              left: "clamp(40px, 12vw, calc(50% - 150px))",
              top: "clamp(60px, 10vw, 150px)",
              width: "clamp(150px, 18vw, 208px)",
              backgroundColor: "#FFFFFF",
              borderRadius: "14px",
              padding: "8px 12px",
              zIndex: 20,
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(12px, 1.3vw, 15px)",
                lineHeight: "120%",
                color: "#242528",
                margin: 0,
              }}
            >
              UI/UX Design
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "nowrap" }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(10px, 1vw, 11px)", color: "#82868E", whiteSpace: "nowrap" }}>200 Courses</span>
              <span style={{ color: "#82868E", fontSize: "9px" }}>•</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(10px, 1vw, 11px)", color: "#82868E", whiteSpace: "nowrap" }}>1000+ Students</span>
            </div>
          </div>

          {/* Floating Card 2: Learning Progress */}
          <div
            className="floating-card hero-card-2"
            style={{
              position: "absolute",
              right: "clamp(40px, 12vw, calc(50% - 140px))",
              top: "clamp(30px, 8vw, 130px)",
              width: "clamp(160px, 20vw, 232px)",
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "clamp(10px, 1.5vw, 16px)",
              zIndex: 20,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(11px, 1.2vw, 14px)",
                lineHeight: "120%",
                color: "#242528",
                margin: 0,
              }}
            >
              Learning Progress
            </p>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(24px, 4vw, 48px)",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
                color: "#242528",
                margin: 0,
              }}
            >
              55%
            </p>
            <div
              style={{
                width: "100%",
                height: "8px",
                backgroundColor: "#F6F6F6",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "55%",
                  height: "8px",
                  backgroundColor: "#D4FB20",
                  borderRadius: "24px",
                }}
              />
            </div>
          </div>

          {/* Floating Card 3: Happy Students */}
          <div
            className="floating-card hero-card-3"
            style={{
              position: "absolute",
              left: "clamp(20px, 10vw, calc(50% - 220px))",
              bottom: "clamp(10px, 4vw, 35px)",
              width: "clamp(190px, 22vw, 258px)",
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "clamp(10px, 1.5vw, 16px)",
              zIndex: 25,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "clamp(13px, 1.3vw, 16px)", lineHeight: "120%", color: "#242528", margin: 0 }}>
                Happy Students
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: "12px", color: "#242528" }}>4.5 (240)</span>
                <span style={{ color: "#CBFC01", fontSize: "14px", lineHeight: 1 }}>★</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {AVATAR_URLS.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "2px solid #FFFFFF",
                    marginLeft: i === 0 ? "0" : "-10px",
                    objectFit: "cover",
                    position: "relative",
                    zIndex: 10 - i,
                  }}
                />
              ))}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#D4FB20",
                  border: "2px solid #FFFFFF",
                  marginLeft: "-10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  color: "#242528",
                  flexShrink: 0,
                  zIndex: 3,
                  position: "relative",
                }}
              >
                2K+
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile-only card strip ── */}
        <div
          className="hero-cards-mobile"
          style={{
            display: "none", /* overridden to flex on mobile via CSS */
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            width: "100%",
            paddingTop: "12px",
            paddingBottom: "4px",
          }}
        >
          {/* Card A: UI/UX Design */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
              minWidth: "140px",
              flex: "1 1 140px",
              maxWidth: "180px",
            }}
          >
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "13px", color: "#242528", margin: 0 }}>
              UI/UX Design
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px", color: "#82868E" }}>200 Courses</span>
              <span style={{ color: "#82868E", fontSize: "8px" }}>•</span>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px", color: "#82868E" }}>1000+ Students</span>
            </div>
          </div>

          {/* Card B: Learning Progress */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
              minWidth: "130px",
              flex: "1 1 130px",
              maxWidth: "170px",
            }}
          >
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "11px", color: "#242528", margin: 0 }}>
              Learning Progress
            </p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "22px", lineHeight: 1, color: "#242528", margin: 0 }}>
              55%
            </p>
            <div style={{ width: "100%", height: "6px", backgroundColor: "#F0F0F0", borderRadius: "24px", overflow: "hidden" }}>
              <div style={{ width: "55%", height: "6px", backgroundColor: "#D4FB20", borderRadius: "24px" }} />
            </div>
          </div>

          {/* Card C: Happy Students */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
              minWidth: "130px",
              flex: "1 1 130px",
              maxWidth: "170px",
            }}
          >
            <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "12px", color: "#242528", margin: 0 }}>
              Happy Students
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", color: "#242528" }}>4.5 (240)</span>
              <span style={{ color: "#CBFC01", fontSize: "13px", lineHeight: 1 }}>★</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=28&h=28&fit=crop&crop=face&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=28&h=28&fit=crop&crop=face&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=28&h=28&fit=crop&crop=face&q=80",
              ].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #fff", marginLeft: i === 0 ? 0 : "-7px", objectFit: "cover", position: "relative", zIndex: 3 - i }}
                />
              ))}
              <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#D4FB20", border: "2px solid #fff", marginLeft: "-7px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "8px", color: "#242528", position: "relative", zIndex: 0 }}>
                2K+
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

