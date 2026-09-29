import Image from "next/image";

const COL1 = ["Featured Courses", "Featured Categories", "Business", "IT", "Design"];
const COL2 = ["Development", "Marketing", "Photography", "Finance", "Sport"];
const COL3 = ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"];

export default function Footer() {
  return (
    <footer
      className="w-full bg-white"
      id="footer"
      style={{ borderTop: "1px solid #E8E8E8" }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(40px, 6vw, 64px) clamp(16px, 5vw, 80px)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "clamp(32px, 6vw, 80px)",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left: brand + newsletter */}
          <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <Image src="/logo.png" alt="ByteSpace Logo" width={29} height={32} />
              <span
                style={{
                  fontFamily: "'Clash Display', 'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "30px",
                  color: "#040819",
                }}
              >
                ByteSpace
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "160%",
                color: "#82868E",
                marginBottom: "24px",
                maxWidth: "320px",
              }}
            >
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Email input row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                id="newsletter-email"
                aria-label="Newsletter email"
                style={{
                  flex: "1 1 160px",
                  padding: "12px 24px",
                  borderRadius: "24px",
                  border: "1px solid #CED0D3",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  color: "#82868E",
                  outline: "none",
                  backgroundColor: "#FFFFFF",
                  minWidth: "160px",
                }}
              />
              <button
                id="newsletter-subscribe-btn"
                style={{
                  padding: "12px 24px",
                  borderRadius: "24px",
                  backgroundColor: "#D4FB20",
                  color: "#242528",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "120%",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Subscribe
              </button>
            </div>

            {/* Privacy note */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "160%",
                color: "#82868E",
                marginTop: "12px",
                maxWidth: "320px",
              }}
            >
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our
              company.
            </p>
          </div>

          {/* Right: link columns */}
          <div
            style={{
              flex: "1 1 260px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
              gap: "clamp(20px, 4vw, 40px)",
            }}
          >
            {/* Column 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {COL1.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    color: "#4B4C53",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {COL2.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    color: "#4B4C53",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Column 3 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {COL3.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "160%",
                    color: "#4B4C53",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #E8E8E8" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px clamp(16px, 5vw, 80px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              color: "#82868E",
              margin: 0,
            }}
          >
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "clamp(12px, 2.5vw, 24px)", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#82868E",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
