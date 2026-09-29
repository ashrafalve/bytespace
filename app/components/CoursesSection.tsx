"use client";
import { useState } from "react";
import Image from "next/image";

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&q=80",
    lessons: 17,
    hours: "2 hours 16 mins",
    comments: 59,
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&q=80",
    lessons: 17,
    hours: "2 hours 16 mins",
    comments: 59,
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&q=80",
    lessons: 17,
    hours: "2 hours 16 mins",
    comments: 59,
  },
  {
    id: 4,
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop&q=80",
    lessons: 17,
    hours: "2 hours 16 mins",
    comments: 59,
  },
  {
    id: 5,
    title: "Mastering Money Management",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=80",
    lessons: 17,
    hours: "2 hours 16 mins",
    comments: 59,
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
    lessons: 17,
    hours: "2 hours 16 mins",
    comments: 59,
  },
];

const LEARNING_PATHS = [
  { id: 1, label: "Design", iconSrc: "/icons/design.png" },
  { id: 2, label: "Development", iconSrc: "/icons/development.png" },
  { id: 3, label: "IT & Software", iconSrc: "/icons/itandsoftware.png" },
  { id: 4, label: "Business", iconSrc: "/icons/business.png" },
  { id: 5, label: "Marketing", iconSrc: "/icons/marketing.png" },
  { id: 6, label: "Photography", iconSrc: "/icons/photography.png" },
];

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face&q=80",
];

function CourseCard({ course }: { course: (typeof COURSES)[0] }) {
  return (
    <div
      id={`course-card-${course.id}`}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CED0D3",
        borderRadius: "24px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          width: "calc(100% - 32px)",
          paddingTop: "56.25%",
          margin: "16px 16px 0 16px",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#222",
          flexShrink: 0,
        }}
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 373px"
          className="object-cover"
        />
        {/* Frosted glass meta pills */}
        <div
          style={{
            position: "absolute",
            bottom: "13px",
            left: "13px",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {[`${course.lessons} Lessons`, course.hours, `${course.comments} Comments`].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 10px",
                  backgroundColor: "rgba(246,246,246,0.6)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "24px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: "11px",
                  lineHeight: "120%",
                  color: "#4F4F4F",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>

      {/* Card body */}
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        {/* Title + author */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "130%",
                letterSpacing: "-0.01em",
                color: "#000000",
                margin: 0,
                flex: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              title={course.title}
            >
              {course.title}
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
              {course.rating}
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
              lineHeight: "160%",
              color: "#4F4F4F",
              margin: "2px 0 0 0",
            }}
          >
            by {course.author}
          </p>
        </div>

        {/* Level + avatars */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "6px 12px",
              backgroundColor: "#F5F5F6",
              borderRadius: "24px",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
              <rect x="2" y="12" width="5" height="9" rx="1" fill="#4B4C53" />
              <rect x="9" y="7" width="5" height="14" rx="1" fill="#4B4C53" />
              <rect x="16" y="3" width="5" height="18" rx="1" fill="#4B4C53" />
            </svg>
            <span
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "120%",
                color: "#4B4C53",
              }}
            >
              {course.level}
            </span>
          </div>

          {/* Avatar stack */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {AVATAR_URLS.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  border: "2px solid #FFFFFF",
                  marginLeft: i === 0 ? "0" : "-8px",
                  objectFit: "cover",
                }}
              />
            ))}
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "#D4FB20",
                border: "2px solid #FFFFFF",
                marginLeft: "-8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "8px",
                color: "#242528",
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
              fontSize: "20px",
              color: "#003BE2",
            }}
          >
            ${course.price}
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
  );
}

export default function CoursesSection() {
  const [active, setActive] = useState("Featured");

  const visibleCategories = CATEGORIES.slice(0, 17);
  const hasMore = CATEGORIES.length > 17;

  return (
    <section className="w-full bg-white" style={{ padding: "clamp(40px, 8vw, 80px) 0" }} id="courses">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(16px, 5vw, 80px)",
        }}
      >
        {/* Heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              textAlign: "center",
              color: "#040819",
              margin: 0,
            }}
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 2vw, 18px)",
              lineHeight: "160%",
              textAlign: "center",
              color: "#82868E",
              margin: 0,
              maxWidth: "700px",
            }}
          >
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts, and make a difference in
            your career and life.
          </p>
        </div>

        {/* Category tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          {visibleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              id={`category-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              style={{
                padding: "6px 16px",
                borderRadius: "24px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: active === cat ? 500 : 400,
                fontSize: "clamp(12px, 1.5vw, 16px)",
                lineHeight: "160%",
                border: active === cat ? "none" : "1px solid #CED0D3",
                backgroundColor: active === cat ? "#D4FB20" : "#FFFFFF",
                color: active === cat ? "#040819" : "#4B4C53",
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
            </button>
          ))}
          {hasMore && (
            <button
              style={{
                padding: "6px 16px",
                borderRadius: "24px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(12px, 1.5vw, 16px)",
                color: "#003BE2",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              + More
            </button>
          )}
        </div>

        {/* Course grid — uniform responsive cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
            width: "100%",
          }}
        >
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Learning Paths */}
        <div
          style={{
            marginTop: "clamp(48px, 8vw, 80px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              lineHeight: "120%",
              letterSpacing: "-0.01em",
              textAlign: "center",
              color: "#040819",
              margin: 0,
            }}
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 2vw, 18px)",
              lineHeight: "160%",
              textAlign: "center",
              color: "#82868E",
              margin: 0,
              maxWidth: "700px",
            }}
          >
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
            courses spans various fields, ensuring there&apos;s something for everyone.
          </p>

          {/* Category icon cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "clamp(12px, 2vw, 24px)",
              marginTop: "32px",
              width: "100%",
            }}
          >
            {LEARNING_PATHS.map((path) => (
              <div
                key={path.id}
                id={`learning-path-${path.label.replace(/\s+/g, "-").toLowerCase()}`}
                style={{
                  aspectRatio: "1",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #EAECF0",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  boxShadow: "0px 2px 4px rgba(16, 24, 40, 0.03)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "#D4FB20";
                  e.currentTarget.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.borderColor = "#EAECF0";
                  e.currentTarget.style.boxShadow = "0px 2px 4px rgba(16, 24, 40, 0.03)";
                }}
              >
                {/* Lime circle badge */}
                <div
                  style={{
                    width: "clamp(44px, 6vw, 60px)",
                    height: "clamp(44px, 6vw, 60px)",
                    borderRadius: "50%",
                    backgroundColor: "#D4FB20",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    flexShrink: 0,
                  }}
                >
                  <div style={{ position: "relative", width: "28px", height: "28px" }}>
                    <Image
                      src={path.iconSrc}
                      alt={path.label}
                      fill
                      sizes="28px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Category label */}
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: "clamp(12px, 1.5vw, 16px)",
                    lineHeight: "22px",
                    color: "#101828",
                    textAlign: "center",
                  }}
                >
                  {path.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
