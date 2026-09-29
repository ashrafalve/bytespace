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
          padding: "64px 120px 40px 120px",
          boxSizing: "content-box",
        }}
      >
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>
          {/* Left: brand + newsletter */}
          <div style={{ flex: "0 0 370px", maxWidth: "370px" }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <Image
                src="/logo.png"
                alt="ByteSpace Logo"
                width={29}
                height={32}
              />
              <span
                style={{
                  fontFamily: "'Clash Display', 'Poppins', var(--font-poppins), sans-serif",
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
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "160%",
                color: "#82868E",
                marginBottom: "24px",
                maxWidth: "320px",
              }}
            >
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Email input row */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                id="newsletter-email"
                aria-label="Newsletter email"
                style={{
                  flex: 1,
                  padding: "12px 24px",
                  borderRadius: "24px",
                  border: "1px solid #CED0D3",
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontSize: "14px",
                  color: "#82868E",
                  outline: "none",
                  backgroundColor: "#FFFFFF",
                }}
              />
              <button
                id="newsletter-subscribe-btn"
                style={{
                  padding: "12px 24px",
                  borderRadius: "24px",
                  backgroundColor: "#D4FB20",
                  color: "#242528",
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "120%",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Search
              </button>
            </div>

            {/* Privacy note */}
            <p
              style={{
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "160%",
                color: "#82868E",
                marginTop: "12px",
                maxWidth: "320px",
              }}
            >
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right: link columns */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
            }}
          >
            {/* Column 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {COL1.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: "'Poppins', var(--font-poppins), sans-serif",
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
                    fontFamily: "'Poppins', var(--font-poppins), sans-serif",
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
                    fontFamily: "'Poppins', var(--font-poppins), sans-serif",
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
            padding: "20px 120px",
            boxSizing: "content-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "'Poppins', var(--font-poppins), sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              color: "#82868E",
              margin: 0,
            }}
          >
            Â© 2023 ByteSpace. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "#82868E",
                    textDecoration: "none",
                  }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

