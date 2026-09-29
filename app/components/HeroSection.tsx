import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#003BE2", height: "1024px" }}
    >
      {/* Grid overlay â€” 120px spacing, 12% opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.12,
        }}
      />

      {/* Large lime ring ellipse â€” Figma: border: 320px solid #CBFC01, 1149x1149px centered at bottom */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "1149px",
          height: "1149px",
          left: "calc(50% - 574.5px)",
          top: "582px",
          borderRadius: "50%",
          border: "320px solid #CBFC01",
        }}
      />

      {/* Decorative 3D shapes */}

      {/* Yellow squiggle â€” top-left */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "calc(50% - 645px)", top: "174px", width: "385px", height: "270px" }}
      >
        <Image
          src="/images/Frame.png"
          alt=""
          fill
          sizes="385px"
          className="object-contain"
        />
      </div>

      {/* White squiggle mirrored â€” left center */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "calc(50% - 449px)", top: "375px", width: "175px", height: "175px", transform: "scaleX(-1)" }}
      >
        <Image
          src="/images/Frame (1).png"
          alt=""
          fill
          sizes="175px"
          className="object-contain"
        />
      </div>

      {/* White ring/torus â€” bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "calc(50% - 531px)", top: "536px", width: "342px", height: "342px" }}
      >
        <Image
          src="/images/Cone (2).png"
          alt=""
          fill
          sizes="342px"
          className="object-contain"
        />
      </div>

      {/* Green cone â€” top-right */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "calc(50% + 511px)", top: "174px", width: "370px", height: "310px" }}
      >
        <Image
          src="/images/Cone (1).png"
          alt=""
          fill
          sizes="370px"
          className="object-contain"
        />
      </div>

      {/* White squiggle â€” right center */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "calc(50% + 365px)", top: "365px", width: "188px", height: "188px" }}
      >
        <Image
          src="/images/Mask Group.png"
          alt=""
          fill
          sizes="188px"
          className="object-contain"
        />
      </div>

      {/* White triangle â€” bottom-right */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "calc(50% + 411px)", top: "535px", width: "330px", height: "330px" }}
      >
        <Image
          src="/images/Cone.png"
          alt=""
          fill
          sizes="330px"
          className="object-contain"
        />
      </div>

      {/* Hero content â€” centered, top: 169px */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          width: "1200px",
          left: "calc(50% - 600px)",
          top: "169px",
          gap: "60px",
        }}
      >
        {/* Text block */}
        <div
          className="flex flex-col items-center"
          style={{ gap: "32px", width: "935px" }}
        >
          <h1
            style={{
              fontFamily: "'Poppins', var(--font-poppins), sans-serif",
              fontWeight: 600,
              fontSize: "72px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              textAlign: "center",
              color: "#FFFFFF",
              margin: 0,
              width: "935px",
            }}
          >
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p
            style={{
              fontFamily: "'Poppins', var(--font-poppins), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "160%",
              textAlign: "center",
              color: "#E5E6E8",
              margin: 0,
              width: "819px",
            }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        {/* Search bar */}
        <div
          className="flex items-center"
          style={{ gap: "16px", width: "581px", height: "52px" }}
        >
          {/* Input container */}
          <div
            className="flex items-center"
            style={{
              flex: 1,
              height: "52px",
              backgroundColor: "#FFFFFF",
              borderRadius: "24px",
              padding: "12px 24px",
              gap: "8px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "160%",
                color: "#82868E",
              }}
            />
          </div>

          {/* Search button */}
          <button
            id="hero-search-btn"
            style={{
              width: "104px",
              height: "46px",
              backgroundColor: "#D4FB20",
              borderRadius: "24px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Poppins', var(--font-poppins), sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "120%",
              color: "#242528",
              flexShrink: 0,
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Hero image â€” centered, top: 512px */}
      <div
        className="absolute"
        style={{
          width: "578px",
          height: "541px",
          left: "calc(50% - 289px)",
          top: "512px",
          zIndex: 10,
          filter:
            "drop-shadow(51px 73px 72px rgba(0,0,0,0.13)) drop-shadow(25px 37px 36px rgba(0,0,0,0.1))",
        }}
      >
        <Image
          src="/images/Image.png"
          alt="Student with laptop"
          fill
          sizes="578px"
          className="object-contain object-bottom"
          priority
        />
      </div>

      {/* Floating card â€” Learning Progress â€” right of center */}
      <div
        className="absolute"
        style={{
          width: "232px",
          left: "calc(50% + 289px + 10px)",
          top: "651px",
          backgroundColor: "#FFFFFF",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "16px",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <p
          style={{
            fontFamily: "'Poppins', var(--font-poppins), sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "120%",
            color: "#242528",
            margin: 0,
          }}
        >
          Learning Progress
        </p>
        <div className="flex flex-col" style={{ gap: "8px" }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              color: "#242528",
              margin: 0,
            }}
          >
            55%
          </p>
        </div>
        {/* Progress bar */}
        <div
          style={{
            width: "200px",
            height: "8px",
            backgroundColor: "#F6F6F6",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "112px",
              height: "8px",
              backgroundColor: "#D4FB20",
              borderRadius: "24px",
            }}
          />
        </div>
      </div>

      {/* Floating card â€” UI/UX Design â€” left of center */}
      <div
        className="absolute"
        style={{
          width: "208px",
          left: "calc(50% - 289px - 218px)",
          top: "639px",
          backgroundColor: "#FFFFFF",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "16px",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <p
          style={{
            fontFamily: "'Poppins', var(--font-poppins), sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "120%",
            color: "#242528",
            margin: 0,
          }}
        >
          UI/UX Design
        </p>
        <div className="flex items-center" style={{ gap: "8px" }}>
          <span
            style={{
              fontFamily: "'Poppins', var(--font-poppins), sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "160%",
              color: "#82868E",
            }}
          >
            200 Courses
          </span>
          <span style={{ color: "#82868E", fontSize: "10px" }}>â€¢</span>
          <span
            style={{
              fontFamily: "'Poppins', var(--font-poppins), sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "160%",
              color: "#82868E",
            }}
          >
            1000+ Students
          </span>
        </div>
      </div>

      {/* Floating card â€” Happy Students â€” bottom left */}
      <div
        className="absolute"
        style={{
          width: "258px",
          left: "calc(50% - 289px - 258px + 70px)",
          top: "837px",
          backgroundColor: "#FFFFFF",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "16px",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div className="flex flex-col" style={{ gap: "0px" }}>
          <p
            style={{
              fontFamily: "'Poppins', var(--font-poppins), sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "120%",
              color: "#242528",
              margin: 0,
            }}
          >
            Happy Students
          </p>
          <div className="flex items-center" style={{ gap: "4px" }}>
            <span
              style={{
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 400,
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
                borderRadius: "0.5px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
              }}
            >
              â˜…
            </span>
          </div>
        </div>

        {/* Avatar stack */}
        <div className="flex items-center" style={{ gap: "0px" }}>
          {[
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=43&h=43&fit=crop&crop=face&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=43&h=43&fit=crop&crop=face&q=80",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=43&h=43&fit=crop&crop=face&q=80",
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=43&h=43&fit=crop&crop=face&q=80",
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=43&h=43&fit=crop&crop=face&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=43&h=43&fit=crop&crop=face&q=80",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=43&h=43&fit=crop&crop=face&q=80",
          ].map((src, i) => (
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
                position: "relative",
                zIndex: 10 - i,
              }}
            />
          ))}
          <div
            style={{
              width: "43px",
              height: "43px",
              borderRadius: "50%",
              backgroundColor: "#D4FB20",
              marginLeft: "-16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Poppins', var(--font-poppins), sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              lineHeight: "150%",
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
    </section>
  );
}

