import Image from "next/image";

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=43&h=43&fit=crop&crop=face&q=80",
];

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          lineHeight: "120%",
          color: "#003BE2",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: "clamp(13px, 1.5vw, 16px)",
          color: "#82868E",
          marginTop: "4px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function GrowthSection() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        background: "#FAFAFA",
        padding: "clamp(48px, 8vw, 100px) 0",
      }}
      id="growth"
    >
      {/* Radial ambient glow circles per home/index.html */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Left Lime Radial Glow for Row 1 */}
        <div
          style={{
            position: "absolute",
            left: "-100px",
            top: "100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(203,252,1,0.35) 0%, rgba(203,252,1,0) 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Bottom-Left Lime Radial Glow for Creator Girl side (Row 2) */}
        <div
          style={{
            position: "absolute",
            left: "-120px",
            bottom: "100px",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(203,252,1,0.35) 0%, rgba(203,252,1,0) 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Bottom-Right Blue Radial Glow */}
        <div
          style={{
            position: "absolute",
            right: "-100px",
            bottom: "100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,59,226,0.18) 0%, rgba(0,59,226,0) 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1258px",
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 60px)",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* === ROW 1: Text Left, Visual Right ("Your Path to Professional Growth Starts Here!") === */}
        <div
          className="growth-row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "clamp(32px, 5vw, 63px)",
            flexWrap: "wrap",
          }}
        >
          {/* Left Text Column */}
          <div style={{ flex: "1 1 300px", minWidth: "260px" }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1.75rem, 3vw, 2.35rem)",
                lineHeight: "125%",
                letterSpacing: "-0.01em",
                color: "#242528",
                margin: 0,
                maxWidth: "100%",
              }}
            >
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.5vw, 18px)",
                lineHeight: "160%",
                color: "#4B4C53",
                marginTop: "24px",
                maxWidth: "477px",
              }}
            >
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "clamp(24px, 4vw, 56px)",
                marginTop: "36px",
                flexWrap: "wrap",
              }}
            >
              <StatItem value="12K" label="Students" />
              <StatItem value="70+" label="Courses" />
              <StatItem value="16" label="Creators" />
            </div>
          </div>

          {/* Right Visual Box */}
          <div
            style={{
              flex: "1 1 380px",
              position: "relative",
              minHeight: "clamp(280px, 45vw, 552px)",
              maxWidth: "621px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Top-Right Flipped 3D Shape Asset (positioned on top of Learning Progress card) */}
            <div
              style={{
                position: "absolute",
                top: "clamp(50px, 8vw, 85px)",
                right: "10px",
                width: "clamp(90px, 15vw, 175px)",
                height: "clamp(90px, 15vw, 175px)",
                zIndex: 35,
                pointerEvents: "none",
                transform: "scaleX(-1)",
              }}
            >
              <Image src="/assets/Frame.png" alt="" fill sizes="175px" className="object-contain" />
            </div>

            {/* Top-Left Course Card ("Learn Figma from Basic") — hidden on mobile */}
            <div
              className="floating-card growth-card"
              style={{
                position: "absolute",
                top: "-20px",
                left: "-25px",
                width: "clamp(250px, 28vw, 340px)",
                backgroundColor: "#FFFFFF",
                border: "1px solid #CED0D3",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                zIndex: 5,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Thumbnail Area with Inner Margin */}
              <div
                style={{
                  position: "relative",
                  width: "calc(100% - 24px)",
                  height: "clamp(100px, 12vw, 140px)",
                  margin: "12px 12px 0 12px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  backgroundColor: "#222",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80"
                  alt="Learn Figma from Basic"
                  fill
                  sizes="340px"
                  className="object-cover"
                />
                {/* Frosted Glass Meta Pills */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    left: "8px",
                    display: "flex",
                    gap: "4px",
                    flexWrap: "wrap",
                  }}
                >
                  {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((label) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "3px 8px",
                        backgroundColor: "rgba(246,246,246,0.7)",
                        backdropFilter: "blur(4px)",
                        borderRadius: "24px",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: "10px",
                        lineHeight: "120%",
                        color: "#4F4F4F",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "12px 14px 14px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Title + Rating */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <h3
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: "clamp(14px, 1.5vw, 16px)",
                        lineHeight: "130%",
                        letterSpacing: "-0.01em",
                        color: "#000000",
                        margin: 0,
                        flex: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      title="Learn Figma from Basic"
                    >
                      Learn Figma from Basic
                    </h3>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "12px",
                        color: "#82868E",
                        flexShrink: 0,
                        marginLeft: "8px",
                      }}
                    >
                      4.5
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#CED0D3" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 19.022l-7.417 4.501L6 15.27 0 9.423l8.332-1.268z" />
                      </svg>
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "140%",
                      color: "#4F4F4F",
                      margin: "2px 0 0 0",
                    }}
                  >
                    by purepearl studio
                  </p>
                </div>

                {/* Level Pill + Avatar Stack */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      padding: "4px 10px",
                      backgroundColor: "#F5F5F6",
                      borderRadius: "24px",
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <rect x="2" y="12" width="5" height="9" rx="1" fill="#4B4C53" />
                      <rect x="9" y="7" width="5" height="14" rx="1" fill="#4B4C53" />
                      <rect x="16" y="3" width="5" height="18" rx="1" fill="#4B4C53" />
                    </svg>
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        fontSize: "11px",
                        lineHeight: "120%",
                        color: "#4B4C53",
                      }}
                    >
                      Beginner
                    </span>
                  </div>

                  {/* Avatar Stack with 26+ Pill (Visible face avatars with proper zIndex) */}
                  <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                    {AVATAR_URLS.slice(0, 3).map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt="Student"
                        style={{
                          width: "26px",
                          height: "26px",
                          borderRadius: "50%",
                          border: "2px solid #FFFFFF",
                          marginLeft: i === 0 ? "0" : "-8px",
                          objectFit: "cover",
                          position: "relative",
                          zIndex: 10 - i,
                          display: "block",
                        }}
                      />
                    ))}
                    <div
                      style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        backgroundColor: "#D4FB20",
                        border: "2px solid #FFFFFF",
                        marginLeft: "-8px",
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

                {/* Price */}
                <p style={{ margin: 0 }}>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(16px, 1.8vw, 20px)",
                      color: "#003BE2",
                    }}
                  >
                    $25
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "12px",
                      color: "#82868E",
                    }}
                  >
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            {/* Center Student Image (Reference: assets/image.png — positioned ON TOP of course card) */}
            <div
              style={{
                position: "relative",
                width: "clamp(260px, 42vw, 577px)",
                height: "clamp(240px, 38vw, 540px)",
                zIndex: 15,
                filter: "drop-shadow(37px 53px 56px rgba(0,0,0,0.11))",
              }}
            >
              <Image
                src="/images/Image.png"
                alt="Student learning"
                fill
                sizes="(max-width: 768px) 60vw, 577px"
                className="object-contain"
              />
            </div>

            {/* Middle-Right Learning Progress Card — hidden on mobile */}
            <div
              className="floating-card growth-card"
              style={{
                position: "absolute",
                top: "clamp(160px, 20vw, 213px)",
                right: "0px",
                width: "clamp(160px, 20vw, 232px)",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                backdropFilter: "blur(10px)",
                zIndex: 25,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
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
                  fontSize: "clamp(32px, 4vw, 48px)",
                  lineHeight: "120%",
                  color: "#242528",
                  margin: 0,
                }}
              >
                55%
              </p>
              <div
                style={{
                  height: "8px",
                  width: "100%",
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
          </div>

          {/* ── Mobile-only: Learning Progress compact card (Row 1) ── */}
          <div
            className="growth-cards-mobile"
            style={{
              display: "none",
              gap: "10px",
              justifyContent: "center",
              width: "100%",
              flexWrap: "wrap",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "12px",
                padding: "12px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                flex: "1 1 140px",
                maxWidth: "200px",
              }}
            >
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "12px", color: "#242528", margin: 0 }}>Learning Progress</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: 1, color: "#242528", margin: 0 }}>55%</p>
              <div style={{ height: "6px", width: "100%", backgroundColor: "#F0F0F0", borderRadius: "24px", overflow: "hidden" }}>
                <div style={{ width: "55%", height: "6px", backgroundColor: "#D4FB20", borderRadius: "24px" }} />
              </div>
            </div>
          </div>
        </div>

        {/* === ROW 2: Visual Left, Text Right ("Create & Manage Courses Easily.") === */}
        <div
          className="growth-row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "clamp(32px, 6vw, 79px)",
            marginTop: "clamp(60px, 10vw, 120px)",
            flexWrap: "wrap",
          }}
        >
          {/* Left Visual Box — Row 2 */}
          <div
            style={{
              flex: "1 1 380px",
              position: "relative",
              minHeight: "clamp(280px, 45vw, 596px)",
              maxWidth: "541px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: 0,
            }}
          >
            {/* Top-Right Yellow Frame.png on Creator Girl side (shifted slightly right) */}
            <div
              style={{
                position: "absolute",
                top: "clamp(90px, 12vw, 150px)",
                right: "clamp(55px, 9vw, 110px)",
                width: "clamp(80px, 12vw, 140px)",
                height: "clamp(80px, 12vw, 140px)",
                zIndex: 25,
                pointerEvents: "none",
                transform: "none",
              }}
            >
              <Image src="/assets/Frame.png" alt="" fill sizes="140px" className="object-contain" />
            </div>

            {/* Creator Main Image — positioned ON TOP of Total Revenue & YTD cards */}
            <div
              style={{
                position: "relative",
                width: "clamp(260px, 35vw, 435px)",
                height: "clamp(320px, 45vw, 596px)",
                zIndex: 15,
                filter: "drop-shadow(37px 53px 56px rgba(0,0,0,0.11))",
              }}
            >
              <Image
                src="/images/Image (1).png"
                alt="Course creator"
                fill
                sizes="(max-width: 768px) 50vw, 435px"
                className="object-contain"
              />
            </div>

            {/* Total Revenue Card — hidden on mobile */}
            <div
              className="floating-card growth-card"
              style={{
                position: "absolute",
                top: "clamp(20px, 5vw, 44px)",
                left: "0px",
                width: "clamp(160px, 20vw, 232px)",
                backgroundColor: "#003BE2",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 12px 32px rgba(0,59,226,0.3)",
                zIndex: 5,
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "14px", color: "#F5F5F6", margin: 0 }}>
                    Total Revenue
                  </p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px", color: "rgba(245,245,246,0.7)", margin: "2px 0 0 0" }}>
                    July 1-28
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "clamp(18px, 2.5vw, 24px)", color: "#F5F5F6", margin: 0 }}>
                  $120.29
                </p>
                <span
                  style={{
                    backgroundColor: "#CBFC01",
                    borderRadius: "24px",
                    padding: "2px 8px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: "10px",
                    color: "#242528",
                  }}
                >
                  +12$
                </span>
              </div>
              <div style={{ height: "6px", width: "100%", backgroundColor: "#FFFFFF", borderRadius: "24px", overflow: "hidden", marginTop: "8px" }}>
                <div style={{ width: "60%", height: "6px", backgroundColor: "#D4FB20", borderRadius: "24px" }} />
              </div>
            </div>

            {/* Year to Date Card — hidden on mobile */}
            <div
              className="floating-card growth-card"
              style={{
                position: "absolute",
                top: "clamp(140px, 18vw, 194px)",
                left: "0px",
                width: "clamp(110px, 13vw, 145px)",
                backgroundColor: "#003BE2",
                borderRadius: "16px",
                padding: "14px",
                boxShadow: "0 12px 32px rgba(0,59,226,0.3)",
                zIndex: 5,
                backdropFilter: "blur(10px)",
              }}
            >
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "13px", color: "#F5F5F6", margin: 0 }}>
                Year to Date
              </p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px", color: "rgba(245,245,246,0.7)", margin: "2px 0 0 0" }}>
                2023
              </p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "clamp(16px, 2vw, 20px)", color: "#F5F5F6", margin: "6px 0 4px 0" }}>
                $1,200.38
              </p>
              <span
                style={{
                  backgroundColor: "#CBFC01",
                  borderRadius: "24px",
                  padding: "2px 8px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "10px",
                  color: "#242528",
                  display: "inline-block",
                }}
              >
                +12$
              </span>
            </div>

            {/* Happy Students Card — hidden on mobile */}
            <div
              className="floating-card growth-card"
              style={{
                position: "absolute",
                bottom: "clamp(80px, 13vw, 155px)",
                right: "0px",
                width: "clamp(190px, 24vw, 258px)",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "10px 14px",
                boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                zIndex: 25,
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "14px", color: "#242528", margin: 0 }}>
                  Happy Students
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "11px", color: "#242528" }}>4.5</span>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px", color: "#82868E" }}>(240)</span>
                  <span style={{ color: "#FFB800", fontSize: "12px" }}>★</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginTop: "6px" }}>
                {AVATAR_URLS.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt="Student"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: "2px solid #FFFFFF",
                      marginLeft: i === 0 ? "0" : "-10px",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10 - i,
                      display: "block",
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
                    position: "relative",
                    zIndex: 1,
                    flexShrink: 0,
                  }}
                >
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div style={{ flex: "1 1 300px", minWidth: "260px", order: 1 }}>
            <h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
                color: "#242528",
                margin: 0,
              }}
            >
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 1.5vw, 18px)",
                lineHeight: "160%",
                color: "#4B4C53",
                marginTop: "24px",
              }}
            >
              <strong style={{ color: "#242528", fontWeight: 700 }}>ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and administration of
              educational courses.
            </p>

            {/* Checkmark Feature list */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "28px 0 0 0",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.5vw, 17px)",
                    color: "#4B4C53",
                  }}
                >
                  <span
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "#003BE2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Mobile-only: Row 2 compact cards (Total Revenue, Year to Date, Happy Students) ── */}
          <div
            className="growth-cards-mobile"
            style={{
              display: "none",
              gap: "10px",
              justifyContent: "center",
              width: "100%",
              flexWrap: "wrap",
              marginTop: "16px",
              order: -1,
            }}
          >
            {/* Total Revenue */}
            <div style={{ backgroundColor: "#003BE2", borderRadius: "12px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "4px", boxShadow: "0 4px 16px rgba(0,59,226,0.25)", flex: "1 1 130px", maxWidth: "170px" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "11px", color: "#F5F5F6", margin: 0 }}>Total Revenue</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "18px", color: "#F5F5F6", margin: 0 }}>$120.29</p>
              <span style={{ backgroundColor: "#CBFC01", borderRadius: "24px", padding: "2px 8px", fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "10px", color: "#242528", display: "inline-block", alignSelf: "flex-start" }}>+12$</span>
              <div style={{ height: "5px", width: "100%", backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "24px", overflow: "hidden" }}>
                <div style={{ width: "60%", height: "5px", backgroundColor: "#D4FB20", borderRadius: "24px" }} />
              </div>
            </div>
            {/* Year to Date */}
            <div style={{ backgroundColor: "#003BE2", borderRadius: "12px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "4px", boxShadow: "0 4px 16px rgba(0,59,226,0.25)", flex: "1 1 110px", maxWidth: "150px" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "11px", color: "#F5F5F6", margin: 0 }}>Year to Date</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px", color: "rgba(245,245,246,0.7)", margin: 0 }}>2023</p>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "16px", color: "#F5F5F6", margin: 0 }}>$1,200.38</p>
              <span style={{ backgroundColor: "#CBFC01", borderRadius: "24px", padding: "2px 8px", fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "10px", color: "#242528", display: "inline-block", alignSelf: "flex-start" }}>+12$</span>
            </div>
            {/* Happy Students */}
            <div style={{ backgroundColor: "#FFFFFF", borderRadius: "12px", padding: "12px 14px", display: "flex", flexDirection: "column", gap: "6px", boxShadow: "0 4px 16px rgba(0,0,0,0.10)", flex: "1 1 140px", maxWidth: "180px" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "12px", color: "#242528", margin: 0 }}>Happy Students</p>
              <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "11px", color: "#242528" }}>4.5</span>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "10px", color: "#82868E" }}>(240)</span>
                <span style={{ color: "#FFB800", fontSize: "12px" }}>★</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=28&h=28&fit=crop&crop=face&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=28&h=28&fit=crop&crop=face&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=28&h=28&fit=crop&crop=face&q=80",
                ].map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt="" style={{ width: "24px", height: "24px", borderRadius: "50%", border: "2px solid #fff", marginLeft: i === 0 ? 0 : "-7px", objectFit: "cover", position: "relative", zIndex: 3 - i }} />
                ))}
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#D4FB20", border: "2px solid #fff", marginLeft: "-7px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "8px", color: "#242528", position: "relative", zIndex: 0 }}>2K+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

