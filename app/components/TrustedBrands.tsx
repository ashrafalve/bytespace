import Image from "next/image";

const LOGOS = [
  { id: 1, src: "/icons/Vector (1).png", label: "Logoipsum 1" },
  { id: 2, src: "/icons/Vector (5).png", label: "Logoipsum 2" },
  { id: 3, src: "/icons/Vector (2).png", label: "Logoipsum 3" },
  { id: 4, src: "/icons/Vector (3).png", label: "Logoipsum 4" },
  { id: 5, src: "/icons/Vector (4).png", label: "Logoipsum 5" },
];

export default function TrustedBrands() {
  return (
    <section
      className="w-full relative"
      style={{ backgroundColor: "#F5F5F6", height: "202px" }}
      id="trusted-brands"
    >
      {/* Logo row â€” centered, vertically centered at top:80px */}
      <div
        className="absolute flex items-end"
        style={{
          gap: "72px",
          width: "1132px",
          left: "calc(50% - 566px)",
          top: "80px",
        }}
      >
        {LOGOS.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center"
            style={{ gap: "10px", opacity: 0.5, cursor: "pointer" }}
          >
            <div className="relative grayscale" style={{ width: "36px", height: "36px" }}>
              <Image
                src={logo.src}
                alt={logo.label}
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <span
              style={{
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                color: "#82868E",
              }}
            >
              Logoipsum
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

