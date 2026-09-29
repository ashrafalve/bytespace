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

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span
        style={{
          fontFamily: "'Poppins', var(--font-poppins), sans-serif",
          fontWeight: 600,
          fontSize: "32px",
          lineHeight: "120%",
          color: "#003BE2",
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: "'Poppins', var(--font-poppins), sans-serif",
          fontWeight: 400,
          fontSize: "16px",
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
        background:
          "linear-gradient(135deg, #e8ffa0 0%, #f0f8e8 25%, #e8f4ff 65%, #d8e8ff 100%)",
        padding: "80px 0",
      }}
      id="growth"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 120px",
          boxSizing: "content-box",
        }}
      >
        {/* === ROW 1: text left, visual right === */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {/* Left: text */}
          <div style={{ flex: 1, maxWidth: "480px" }}>
            <h2
              style={{
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 600,
                fontSize: "44px",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
                color: "#040819",
                margin: 0,
              }}
            >
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "160%",
                color: "#82868E",
                marginTop: "20px",
              }}
            >
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "32px",
              }}
            >
              <StatItem value="12K" label="Students" />
              <StatItem value="70+" label="Courses" />
              <StatItem value="16" label="Creators" />
            </div>
          </div>

          {/* Right: stacked visual */}
          <div
            style={{
              flex: 1,
              position: "relative",
              minHeight: "440px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Yellow squiggle decoration */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "20px",
                width: "60px",
                height: "80px",
                zIndex: 20,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/images/Frame.png"
                alt=""
                fill
                sizes="60px"
                className="object-contain"
              />
            </div>

            {/* Course thumbnail card â€” top-left */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "0",
                width: "220px",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "220px",
                  height: "112px",
                  backgroundColor: "#e8daf0",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=440&h=224&fit=crop&q=80"
                  alt="Course thumbnail"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    display: "flex",
                    gap: "8px",
                    padding: "6px 8px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  }}
                >
                  {["17 Lessons", "2 hours 16 min"].map((l) => (
                    <span
                      key={l}
                      style={{
                        backgroundColor: "rgba(246,246,246,0.6)",
                        backdropFilter: "blur(4px)",
                        borderRadius: "24px",
                        padding: "3px 8px",
                        fontSize: "9px",
                        color: "#4F4F4F",
                        fontWeight: 500,
                        fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                      }}
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ padding: "12px" }}>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "#000",
                    margin: 0,
                  }}
                >
                  Learn Figma from Basic
                </p>
                <p
                  style={{
                    fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                    fontSize: "10px",
                    color: "#4F4F4F",
                    margin: "2px 0 0 0",
                  }}
                >
                  by purepearl studio
                </p>
                <div style={{ marginTop: "6px" }}>
                  <span
                    style={{
                      backgroundColor: "#F5F5F6",
                      borderRadius: "24px",
                      padding: "3px 8px",
                      fontSize: "9px",
                      color: "#4B4C53",
                      fontWeight: 500,
                      fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                    }}
                  >
                    Beginner
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#003BE2",
                    margin: "6px 0 0 0",
                  }}
                >
                  $25
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 400,
                      color: "#82868E",
                      fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                    }}
                  >
                    /lifetime
                  </span>
                </p>
              </div>
            </div>

            {/* Student image */}
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "360px",
                zIndex: 10,
              }}
            >
              <Image
                src="/images/Image.png"
                alt="Student learning"
                fill
                sizes="280px"
                className="object-contain"
              />
            </div>

            {/* Learning Progress card â€” top-right */}
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                width: "180px",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                zIndex: 20,
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
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
                  fontSize: "40px",
                  lineHeight: "120%",
                  letterSpacing: "-0.01em",
                  color: "#242528",
                  margin: "4px 0",
                }}
              >
                55%
              </p>
              <div
                style={{
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
          </div>
        </div>

        {/* === ROW 2: visual left, text right === */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "80px",
            marginTop: "100px",
          }}
        >
          {/* Left: visual with creator + stat cards */}
          <div
            style={{
              flex: 1,
              position: "relative",
              minHeight: "440px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Yellow squiggle */}
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "30px",
                width: "60px",
                height: "80px",
                zIndex: 20,
                pointerEvents: "none",
                transform: "scaleX(-1)",
              }}
            >
              <Image
                src="/images/Frame.png"
                alt=""
                fill
                sizes="60px"
                className="object-contain"
              />
            </div>

            {/* Creator image */}
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "380px",
                zIndex: 10,
              }}
            >
              <Image
                src="/images/Image (1).png"
                alt="Course creator"
                fill
                sizes="280px"
                className="object-contain"
              />
            </div>

            {/* Total Revenue card */}
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "0",
                width: "170px",
                backgroundColor: "#003BE2",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 8px 32px rgba(0,59,226,0.25)",
                zIndex: 20,
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  margin: 0,
                }}
              >
                Total Revenue
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.5)",
                  margin: "2px 0 0 0",
                }}
              >
                July 1-28
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#FFFFFF",
                  margin: "4px 0",
                }}
              >
                $120.29
              </p>
              <div
                style={{
                  height: "8px",
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "65%",
                    height: "8px",
                    backgroundColor: "#D4FB20",
                    borderRadius: "24px",
                  }}
                />
              </div>
            </div>

            {/* Year to Date card */}
            <div
              style={{
                position: "absolute",
                top: "180px",
                left: "0",
                width: "170px",
                backgroundColor: "#003BE2",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 8px 32px rgba(0,59,226,0.25)",
                zIndex: 20,
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  margin: 0,
                }}
              >
                Year to Date
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.5)",
                  margin: "2px 0 0 0",
                }}
              >
                2023
              </p>
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#FFFFFF",
                  margin: "4px 0",
                }}
              >
                $1,200.38
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "2px 8px",
                  borderRadius: "24px",
                  backgroundColor: "#D4FB20",
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontWeight: 700,
                  fontSize: "11px",
                  color: "#242528",
                }}
              >
                +12$
              </div>
            </div>

            {/* Happy Students card */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "0",
                minWidth: "220px",
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                zIndex: 20,
              }}
            >
              <p
                style={{
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#242528",
                  margin: 0,
                }}
              >
                Happy Students
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "2px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                    fontSize: "12px",
                    color: "#242528",
                  }}
                >
                  4.5 (240)
                </span>
                <span
                  style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#D4FB20",
                    borderRadius: "2px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                  }}
                >
                  â˜…
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", marginTop: "8px" }}
              >
                {AVATAR_URLS.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={src}
                    alt=""
                    style={{
                      width: "43px",
                      height: "43px",
                      borderRadius: "50%",
                      border: "2px solid #FFFFFF",
                      marginLeft: i === 0 ? "0" : "-16px",
                      objectFit: "cover",
                    }}
                  />
                ))}
                <div
                  style={{
                    width: "43px",
                    height: "43px",
                    borderRadius: "50%",
                    backgroundColor: "#D4FB20",
                    border: "2px solid #FFFFFF",
                    marginLeft: "-16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    color: "#242528",
                  }}
                >
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div style={{ flex: 1, maxWidth: "480px" }}>
            <h2
              style={{
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 600,
                fontSize: "44px",
                lineHeight: "120%",
                letterSpacing: "-0.01em",
                color: "#040819",
                margin: 0,
              }}
            >
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>
            <p
              style={{
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "160%",
                color: "#82868E",
                marginTop: "20px",
              }}
            >
              <strong style={{ color: "#040819", fontWeight: 700 }}>
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Feature list */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "24px 0 0 0",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
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
                    gap: "12px",
                    fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#4B4C53",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
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
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth="3"
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

