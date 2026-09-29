export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=80",
      quote:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
      id: 2,
      name: "James L.",
      role: "Lifelong Learner",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&q=80",
      quote:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
      id: 3,
      name: "Alex B.",
      role: "Inspired Creator",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=80",
      quote:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
  ];

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #dce8ff 0%, #e8f5e9 35%, #f5ffe0 65%, #e8f0ff 100%)",
        padding: "80px 0",
      }}
      id="testimonials"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 120px",
          boxSizing: "content-box",
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "96px",
            marginBottom: "56px",
            alignItems: "flex-start",
          }}
        >
          {/* Left: headline */}
          <div style={{ flex: "0 0 auto" }}>
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
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          {/* Right: description */}
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <p
              style={{
                fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "160%",
                color: "#82868E",
                margin: 0,
              }}
            >
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonial cards â€” 3-col grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
                padding: "28px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginBottom: "16px",
                  border: "2px solid #FFFFFF",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "120%",
                  color: "#040819",
                  margin: 0,
                }}
              >
                {t.name}
              </p>

              {/* Role */}
              <p
                style={{
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "120%",
                  color: "#003BE2",
                  margin: "4px 0 16px 0",
                }}
              >
                {t.role}
              </p>

              {/* Quote */}
              <p
                style={{
                  fontFamily: "'Poppins', var(--font-poppins), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "160%",
                  color: "#4B4C53",
                  margin: 0,
                }}
              >
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

