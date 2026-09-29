import Image from "next/image";

const LOGOS = [
  { id: 1, src: "/icons/vector 8.png", label: "Logoipsum 1" },
  { id: 2, src: "/icons/Vector (5).png", label: "Logoipsum 2" },
  { id: 3, src: "/icons/Vector (2).png", label: "Logoipsum 3" },
  { id: 4, src: "/icons/Vector (3).png", label: "Logoipsum 4" },
  { id: 5, src: "/icons/Vector (4).png", label: "Logoipsum 5" },
];

const DISPLAY_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function TrustedBrands() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{
        backgroundColor: "#F5F5F6",
        padding: "clamp(45px, 5.5vw, 64px) 0",
        minHeight: "140px",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
      id="trusted-brands"
    >
      <div className="w-full overflow-hidden">
        <div
          className="animate-marquee"
          style={{ gap: "clamp(40px, 6vw, 90px)", paddingLeft: "40px" }}
        >
          {DISPLAY_LOGOS.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                opacity: 0.65,
                cursor: "pointer",
                transition: "opacity 0.2s ease",
              }}
              className="hover:opacity-100"
            >
              <div
                className="relative grayscale"
                style={{ width: "32px", height: "32px", flexShrink: 0 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.label}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  color: "#82868E",
                  whiteSpace: "nowrap",
                }}
              >
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
