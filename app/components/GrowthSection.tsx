import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=43&h=43&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=43&h=43&fit=crop&crop=face&q=80",
];

const FONT = "'Poppins', sans-serif";

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontFamily: FONT,
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
          fontFamily: FONT,
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
      <ScrollReveal selector="[data-reveal]" />
      {/* Radial ambient glow circles per home/index.html */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
        {/* === ROW 1: Text Left, Visual Right === */}
        <div
          className="growth-row"
          data-reveal
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
                fontFamily: FONT,
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
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: "clamp(14px, 1.5vw, 18px)",
                lineHeight: "160%",
                color: "#4B4C53",
                marginTop: "clamp(16px, 2.2vw, 24px)",
                maxWidth: "477px",
              }}
            >
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            <div
              style={{
                display: "flex",
                gap: "clamp(24px, 4vw, 56px)",
                marginTop: "clamp(24px, 3.2vw, 36px)",
                flexWrap: "wrap",
              }}
            >
              <StatItem value="12K" label="Students" />
              <StatItem value="70+" label="Courses" />
              <StatItem value="16" label="Creators" />
            </div>
          </div>

          {/* Right Visual Box — all children scale via clamp() */}
          <div
            style={{
              flex: "1 1 380px",
              position: "relative",
              minHeight: "clamp(330px, 45vw, 552px)",
              maxWidth: "621px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Flipped 3D Shape Asset */}
            <div
              className="growth-deco"
              style={{
                position: "absolute",
                top: "clamp(50px, 8vw, 85px)",
                right: "clamp(4px, 1vw, 10px)",
                width: "clamp(64px, 15vw, 175px)",
                height: "clamp(64px, 15vw, 175px)",
                zIndex: 35,
                pointerEvents: "none",
                transform: "scaleX(-1)",
              }}
            >
              <Image src="/assets/Frame.png" alt="" fill sizes="175px" className="object-contain" />
            </div>

            {/* Course Card ("Learn Figma from Basic") */}
            <div
              className="floating-card growth-card growth-card-1"
              style={{
                position: "absolute",
                top: "clamp(-16px, -1.2vw, -4px)",
                left: "clamp(-16px, -1.4vw, -4px)",
                width: "clamp(196px, 28vw, 340px)",
                backgroundColor: "#FFFFFF",
                border: "1px solid #CED0D3",
                borderRadius: "clamp(12px, 2vw, 24px)",
                overflow: "hidden",
                boxShadow: "0 clamp(6px, 1vw, 12px) clamp(16px, 2.6vw, 32px) rgba(0,0,0,0.08)",
                zIndex: 5,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: "relative",
                  width: "calc(100% - clamp(16px, 2vw, 24px))",
                  height: "clamp(84px, 12vw, 140px)",
                  margin: "clamp(8px, 1vw, 12px) clamp(8px, 1vw, 12px) 0",
                  borderRadius: "clamp(8px, 1vw, 12px)",
                  overflow: "hidden",
                  backgroundColor: "#222",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80"
                  alt="Learn Figma from Basic"
                  fill
                  sizes="(max-width: 641px) 196px, 340px"
                  className="object-cover"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "clamp(5px, 0.7vw, 8px)",
                    left: "clamp(5px, 0.7vw, 8px)",
                    display: "flex",
                    gap: "clamp(3px, 0.4vw, 4px)",
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
                        padding: "clamp(2px, 0.3vw, 3px) clamp(5px, 0.8vw, 8px)",
                        backgroundColor: "rgba(246,246,246,0.7)",
                        backdropFilter: "blur(4px)",
                        borderRadius: "24px",
                        fontFamily: FONT,
                        fontWeight: 500,
                        fontSize: "clamp(8px, 0.9vw, 10px)",
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
                  padding: "clamp(8px, 0.9vw, 12px) clamp(10px, 1.2vw, 14px) clamp(10px, 1.2vw, 14px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(6px, 0.7vw, 8px)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <h3
                      style={{
                        fontFamily: FONT,
                        fontWeight: 600,
                        fontSize: "clamp(13px, 1.5vw, 16px)",
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
                        fontFamily: FONT,
                        fontSize: "clamp(10px, 0.95vw, 12px)",
                        color: "#82868E",
                        flexShrink: 0,
                        marginLeft: "8px",
                      }}
                    >
                      4.5
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#CED0D3"
                        style={{ width: "clamp(10px, 0.95vw, 12px)", height: "clamp(10px, 0.95vw, 12px)" }}
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 19.022l-7.417 4.501L6 15.27 0 9.423l8.332-1.268z" />
                      </svg>
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: "clamp(10px, 0.95vw, 12px)",
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
                      padding: "clamp(3px, 0.35vw, 4px) clamp(6px, 0.85vw, 10px)",
                      backgroundColor: "#F5F5F6",
                      borderRadius: "24px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ width: "clamp(12px, 1.15vw, 16px)", height: "clamp(12px, 1.15vw, 16px)", flexShrink: 0 }}
                    >
                      <rect x="2" y="12" width="5" height="9" rx="1" fill="#4B4C53" />
                      <rect x="9" y="7" width="5" height="14" rx="1" fill="#4B4C53" />
                      <rect x="16" y="3" width="5" height="18" rx="1" fill="#4B4C53" />
                    </svg>
                    <span
                      style={{
                        fontFamily: FONT,
                        fontWeight: 500,
                        fontSize: "clamp(9px, 0.85vw, 11px)",
                        lineHeight: "120%",
                        color: "#4B4C53",
                      }}
                    >
                      Beginner
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                    {AVATAR_URLS.slice(0, 3).map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        src={src}
                        alt="Student"
                        style={{
                          width: "clamp(20px, 2.2vw, 26px)",
                          height: "clamp(20px, 2.2vw, 26px)",
                          borderRadius: "50%",
                          border: "clamp(1.5px, 0.18vw, 2px) solid #FFFFFF",
                          marginLeft: i === 0 ? "0" : "clamp(-6px, -0.65vw, -8px)",
                          objectFit: "cover",
                          position: "relative",
                          zIndex: 10 - i,
                          display: "block",
                        }}
                      />
                    ))}
                    <div
                      style={{
                        width: "clamp(20px, 2.2vw, 26px)",
                        height: "clamp(20px, 2.2vw, 26px)",
                        borderRadius: "50%",
                        backgroundColor: "#D4FB20",
                        border: "clamp(1.5px, 0.18vw, 2px) solid #FFFFFF",
                        marginLeft: "clamp(-6px, -0.65vw, -8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: FONT,
                        fontWeight: 700,
                        fontSize: "clamp(7px, 0.75vw, 9px)",
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
                      fontFamily: FONT,
                      fontWeight: 600,
                      fontSize: "clamp(14px, 1.8vw, 20px)",
                      color: "#003BE2",
                    }}
                  >
                    $25
                  </span>
                  <span
                    style={{
                      fontFamily: FONT,
                      fontWeight: 400,
                      fontSize: "clamp(10px, 0.95vw, 12px)",
                      color: "#82868E",
                    }}
                  >
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            {/* Center Student Image */}
            <div
              className="growth-image"
              style={{
                position: "relative",
                width: "clamp(230px, 42vw, 577px)",
                height: "clamp(215px, 38vw, 540px)",
                zIndex: 15,
                filter: "drop-shadow(clamp(12px, 3vw, 37px) clamp(18px, 4.2vw, 53px) clamp(18px, 4.4vw, 56px) rgba(0,0,0,0.11))",
              }}
            >
              <Image
                src="/images/Image.png"
                alt="Student learning"
                fill
                sizes="(max-width: 641px) 230px, 42vw"
                className="object-contain"
              />
            </div>

            {/* Learning Progress Card */}
            <div
              className="floating-card growth-card growth-card-2"
              style={{
                position: "absolute",
                top: "clamp(150px, 20vw, 213px)",
                right: "0px",
                width: "clamp(150px, 20vw, 232px)",
                backgroundColor: "#FFFFFF",
                borderRadius: "clamp(10px, 1.3vw, 16px)",
                padding: "clamp(10px, 1.3vw, 16px)",
                boxShadow: "0 clamp(6px, 1vw, 12px) clamp(16px, 2.6vw, 32px) rgba(0,0,0,0.12)",
                backdropFilter: "blur(10px)",
                zIndex: 25,
                display: "flex",
                flexDirection: "column",
                gap: "clamp(4px, 0.5vw, 6px)",
              }}
            >
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 500,
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                  color: "#242528",
                  margin: 0,
                }}
              >
                Learning Progress
              </p>
              <p
                style={{
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: "clamp(24px, 4vw, 48px)",
                  lineHeight: "120%",
                  color: "#242528",
                  margin: 0,
                }}
              >
                55%
              </p>
              <div
                style={{
                  height: "clamp(5px, 0.55vw, 8px)",
                  width: "100%",
                  backgroundColor: "#F6F6F6",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "55%",
                    height: "100%",
                    backgroundColor: "#D4FB20",
                    borderRadius: "24px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* === ROW 2: Visual Left, Text Right === */}
        <div
          className="growth-row"
          data-reveal
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "clamp(32px, 6vw, 79px)",
            marginTop: "clamp(60px, 10vw, 120px)",
            flexWrap: "wrap",
          }}
        >
          {/* Left Visual Box — all children scale via clamp() */}
          <div
            style={{
              flex: "1 1 380px",
              position: "relative",
              minHeight: "clamp(340px, 45vw, 596px)",
              maxWidth: "541px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: 0,
            }}
          >
            {/* Yellow Frame.png */}
            <div
              className="growth-deco"
              style={{
                position: "absolute",
                top: "clamp(60px, 12vw, 150px)",
                right: "clamp(30px, 9vw, 110px)",
                width: "clamp(56px, 12vw, 140px)",
                height: "clamp(56px, 12vw, 140px)",
                zIndex: 25,
                pointerEvents: "none",
              }}
            >
              <Image src="/assets/Frame.png" alt="" fill sizes="140px" className="object-contain" />
            </div>

            {/* Creator Main Image */}
            <div
              className="growth-image"
              style={{
                position: "relative",
                width: "clamp(210px, 35vw, 435px)",
                height: "clamp(288px, 45vw, 596px)",
                zIndex: 15,
                filter: "drop-shadow(clamp(12px, 3vw, 37px) clamp(18px, 4.2vw, 53px) clamp(18px, 4.4vw, 56px) rgba(0,0,0,0.11))",
              }}
            >
              <Image
                src="/images/Image (1).png"
                alt="Course creator"
                fill
                sizes="(max-width: 641px) 210px, 35vw"
                className="object-contain"
              />
            </div>

            {/* Total Revenue Card */}
            <div
              className="floating-card growth-card growth-card-3"
              style={{
                position: "absolute",
                top: "clamp(10px, 5vw, 44px)",
                left: "clamp(-8px, -0.5vw, 0px)",
                width: "clamp(140px, 20vw, 232px)",
                backgroundColor: "#003BE2",
                borderRadius: "clamp(10px, 1.3vw, 16px)",
                padding: "clamp(10px, 1.3vw, 16px)",
                boxShadow: "0 clamp(6px, 1vw, 12px) clamp(16px, 2.6vw, 32px) rgba(0,59,226,0.3)",
                zIndex: 5,
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontFamily: FONT, fontWeight: 500, fontSize: "clamp(11px, 1.1vw, 14px)", color: "#F5F5F6", margin: 0 }}>
                    Total Revenue
                  </p>
                  <p style={{ fontFamily: FONT, fontSize: "clamp(9px, 0.85vw, 10px)", color: "rgba(245,245,246,0.7)", margin: "2px 0 0 0" }}>
                    July 1-28
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "clamp(6px, 0.7vw, 8px)" }}>
                <p style={{ fontFamily: FONT, fontWeight: 600, fontSize: "clamp(16px, 2.5vw, 24px)", color: "#F5F5F6", margin: 0 }}>
                  $120.29
                </p>
                <span
                  style={{
                    backgroundColor: "#CBFC01",
                    borderRadius: "24px",
                    padding: "clamp(2px, 0.25vw, 3px) clamp(6px, 0.8vw, 8px)",
                    fontFamily: FONT,
                    fontWeight: 500,
                    fontSize: "clamp(9px, 0.85vw, 10px)",
                    color: "#242528",
                  }}
                >
                  +12$
                </span>
              </div>
              <div
                style={{
                  height: "clamp(4px, 0.45vw, 6px)",
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "24px",
                  overflow: "hidden",
                  marginTop: "clamp(6px, 0.7vw, 8px)",
                }}
              >
                <div style={{ width: "60%", height: "100%", backgroundColor: "#D4FB20", borderRadius: "24px" }} />
              </div>
            </div>

            {/* Year to Date Card */}
            <div
              className="floating-card growth-card growth-card-4"
              style={{
                position: "absolute",
                top: "clamp(128px, 18vw, 194px)",
                left: "clamp(-8px, -0.5vw, 0px)",
                width: "clamp(110px, 13vw, 145px)",
                backgroundColor: "#003BE2",
                borderRadius: "clamp(10px, 1.3vw, 16px)",
                padding: "clamp(10px, 1.2vw, 14px)",
                boxShadow: "0 clamp(6px, 1vw, 12px) clamp(16px, 2.6vw, 32px) rgba(0,59,226,0.3)",
                zIndex: 5,
                backdropFilter: "blur(10px)",
              }}
            >
              <p style={{ fontFamily: FONT, fontWeight: 500, fontSize: "clamp(11px, 1.1vw, 13px)", color: "#F5F5F6", margin: 0 }}>
                Year to Date
              </p>
              <p style={{ fontFamily: FONT, fontSize: "clamp(9px, 0.85vw, 10px)", color: "rgba(245,245,246,0.7)", margin: "2px 0 0 0" }}>
                2023
              </p>
              <p style={{ fontFamily: FONT, fontWeight: 600, fontSize: "clamp(14px, 2vw, 20px)", color: "#F5F5F6", margin: "clamp(5px, 0.5vw, 6px) 0 clamp(3px, 0.35vw, 4px)" }}>
                $1,200.38
              </p>
              <span
                style={{
                  backgroundColor: "#CBFC01",
                  borderRadius: "24px",
                  padding: "clamp(2px, 0.25vw, 3px) clamp(6px, 0.8vw, 8px)",
                  fontFamily: FONT,
                  fontWeight: 500,
                  fontSize: "clamp(9px, 0.85vw, 10px)",
                  color: "#242528",
                  display: "inline-block",
                }}
              >
                +12$
              </span>
            </div>

            {/* Happy Students Card */}
            <div
              className="floating-card growth-card growth-card-5"
              style={{
                position: "absolute",
                bottom: "clamp(70px, 13vw, 155px)",
                right: "0px",
                width: "clamp(160px, 24vw, 258px)",
                backgroundColor: "#FFFFFF",
                borderRadius: "clamp(10px, 1.3vw, 16px)",
                padding: "clamp(8px, 0.9vw, 10px) clamp(10px, 1.2vw, 14px)",
                boxShadow: "0 clamp(6px, 1vw, 12px) clamp(16px, 2.6vw, 32px) rgba(0,0,0,0.12)",
                zIndex: 25,
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ fontFamily: FONT, fontWeight: 500, fontSize: "clamp(11px, 1.1vw, 14px)", color: "#242528", margin: 0 }}>
                  Happy Students
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(10px, 0.95vw, 11px)", color: "#242528" }}>4.5</span>
                  <span style={{ fontFamily: FONT, fontSize: "clamp(9px, 0.85vw, 10px)", color: "#82868E" }}>(240)</span>
                  <span style={{ color: "#FFB800", fontSize: "clamp(10px, 0.95vw, 12px)" }}>★</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginTop: "clamp(5px, 0.6vw, 6px)" }}>
                {AVATAR_URLS.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt="Student"
                    style={{
                      width: "clamp(22px, 2.4vw, 32px)",
                      height: "clamp(22px, 2.4vw, 32px)",
                      borderRadius: "50%",
                      border: "clamp(1.5px, 0.2vw, 2px) solid #FFFFFF",
                      marginLeft: i === 0 ? "0" : "clamp(-8px, -0.85vw, -10px)",
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 10 - i,
                      display: "block",
                    }}
                  />
                ))}
                <div
                  style={{
                    width: "clamp(22px, 2.4vw, 32px)",
                    height: "clamp(22px, 2.4vw, 32px)",
                    borderRadius: "50%",
                    backgroundColor: "#D4FB20",
                    border: "clamp(1.5px, 0.2vw, 2px) solid #FFFFFF",
                    marginLeft: "clamp(-8px, -0.85vw, -10px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: "clamp(8px, 0.9vw, 10px)",
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
                fontFamily: FONT,
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
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: "clamp(14px, 1.5vw, 18px)",
                lineHeight: "160%",
                color: "#4B4C53",
                marginTop: "clamp(16px, 2.2vw, 24px)",
              }}
            >
              <strong style={{ color: "#242528", fontWeight: 700 }}>ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and administration of
              educational courses.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "clamp(20px, 2.5vw, 28px) 0 0 0",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(10px, 1.2vw, 14px)",
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
                    gap: "clamp(10px, 1.2vw, 14px)",
                    fontFamily: FONT,
                    fontWeight: 400,
                    fontSize: "clamp(14px, 1.5vw, 17px)",
                    color: "#4B4C53",
                  }}
                >
                  <span
                    style={{
                      width: "clamp(20px, 1.8vw, 22px)",
                      height: "clamp(20px, 1.8vw, 22px)",
                      borderRadius: "50%",
                      backgroundColor: "#003BE2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      style={{ width: "clamp(11px, 1vw, 12px)", height: "clamp(11px, 1vw, 12px)" }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
