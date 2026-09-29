"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in as ${email || "designer@example.com"}`);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#003BE2] overflow-x-hidden flex flex-col items-center justify-center font-['Poppins',_sans-serif]">
      {/* Grid Background Overlay — Full Viewport */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.12,
        }}
      />

      {/* 1440x1024 Fixed Canvas Container */}
      <div className="relative w-[1440px] h-[1024px] overflow-hidden text-white z-10 shrink-0 scale-90 sm:scale-95 md:scale-100 origin-center transition-transform">

        {/* Top Logo */}
        <Link
          href="/"
          className="absolute left-[122px] top-[48px] z-50 flex items-center gap-2 group cursor-pointer"
        >
          <Image src="/assets/vector.svg" alt="ByteSpace Logo" width={29} height={32} />
        </Link>

        {/* Left Side Header Text */}
        <div className="absolute left-[122px] top-[120px] w-[475px] h-[98px] flex flex-col items-start gap-4 z-20">
          <h1 className="font-['Poppins',_sans-serif] text-[20px] font-semibold text-[#F5F5F6] leading-[24px]">
            Sign in with ease
          </h1>
          <p className="font-['Satoshi',_sans-serif] text-[18px] font-normal leading-[29px] text-[#F5F5F6]">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>
        </div>

        {/* 3D Decorative Torus Ring (Top-Left of Cards) */}
        <div className="absolute left-[119px] top-[310px] w-[146px] h-[146px] pointer-events-none z-30">
          <Image
            src="/assets/cone-01-2.png"
            alt="3D Ring Graphic"
            width={147}
            height={147}
            className="object-contain"
          />
        </div>

        {/* CARD 1 (Background Card - "Build Digital Asset") */}
        <div className="absolute left-[122px] top-[394px] w-[373px] h-[384px] rounded-[24px] overflow-hidden bg-white border border-[#CED0D3] shadow-lg z-10 text-[#242528]">
          {/* Card Thumbnail */}
          <div
            className="absolute left-4 top-4 w-[341px] h-[195px] rounded-[12px] overflow-hidden flex items-end p-3"
            style={{
              background: "url('/assets/frame.jpg') center / cover no-repeat, #443131",
            }}
          >
            <div className="flex items-center gap-2">
              {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((tag) => (
                <span
                  key={tag}
                  className="py-1 px-3 rounded-[24px] bg-[rgba(246,246,246,0.6)] backdrop-blur-[4px] text-[12px] font-medium text-[#4F4F4F]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card Meta */}
          <div className="absolute left-4 top-[232px] w-[237px] h-[136px] flex flex-col items-start justify-between">
            <div>
              <h3 className="font-['Poppins',_sans-serif] text-[20px] font-semibold text-black leading-[28px]">
                Build Digital Asset
              </h3>
              <p className="font-['Satoshi',_sans-serif] text-[12px] font-normal text-[#003BE2] leading-[20px]">
                <span className="text-[#4F4F4F]">by </span>purepearl studio
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 py-1.5 px-3 rounded-[24px] bg-[#F5F5F6]">
                <Image src="/assets/signal-cellular-alt.svg" alt="signal" width={20} height={20} />
                <span className="text-[12px] font-medium text-[#4B4C53]">Beginner</span>
              </div>
              <div className="flex items-center -space-x-2">
                {["ellipse.png", "ellipse-2.png", "ellipse-3.png", "ellipse-4.png"].map((img, i) => (
                  <Image
                    key={i}
                    src={`/assets/${img}`}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="rounded-full border border-white object-cover"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[12px] font-medium text-white border border-white">
                  26+
                </div>
              </div>
            </div>

            <div className="flex items-end">
              <span className="font-['Poppins',_sans-serif] text-[20px] font-semibold text-[#003BE2]">
                <span className="font-medium">$</span>25
              </span>
              <span className="font-['Satoshi',_sans-serif] text-[12px] text-[#4F4F4F] ml-1">/lifetime</span>
            </div>
          </div>

          {/* Rating */}
          <div className="absolute left-[306px] top-[232px] flex items-center gap-1">
            <span className="font-['Satoshi',_sans-serif] text-[18px] font-medium text-[#4F4F4F]">4.5</span>
            <Image src="/assets/style-outlined.svg" alt="star" width={24} height={24} />
          </div>
        </div>

        {/* CARD 2 (Foreground Card - "the Power of Big Data") */}
        <div className="absolute left-[233px] top-[305px] w-[373px] h-[384px] rounded-[24px] overflow-hidden bg-white border border-[#CED0D3] shadow-2xl z-20 text-[#242528]">
          {/* Card Thumbnail */}
          <div
            className="absolute left-4 top-4 w-[341px] h-[195px] rounded-[12px] overflow-hidden flex items-end p-3"
            style={{
              background: "url('/assets/frame-2.jpg') center / cover no-repeat, #443131",
            }}
          >
            <div className="flex items-center gap-2">
              {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((tag) => (
                <span
                  key={tag}
                  className="py-1 px-3 rounded-[24px] bg-[rgba(246,246,246,0.6)] backdrop-blur-[4px] text-[12px] font-medium text-[#4F4F4F]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card Meta */}
          <div className="absolute left-4 top-[232px] w-[275px] h-[136px] flex flex-col items-start justify-between">
            <div>
              <h3 className="font-['Poppins',_sans-serif] text-[20px] font-semibold text-black leading-[28px] truncate max-w-[275px]">
                the Power of Big Data
              </h3>
              <p className="font-['Satoshi',_sans-serif] text-[12px] font-normal text-[#003BE2] leading-[20px]">
                <span className="text-[#4F4F4F]">by </span>purepearl studio
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 py-1.5 px-3 rounded-[24px] bg-[#F5F5F6]">
                <Image src="/assets/signal-cellular-alt-2.svg" alt="signal" width={20} height={20} />
                <span className="text-[12px] font-medium text-[#4B4C53]">Beginner</span>
              </div>
              <div className="flex items-center -space-x-2">
                {["ellipse.png", "ellipse-2.png", "ellipse-3.png", "ellipse-4.png"].map((img, i) => (
                  <Image
                    key={i}
                    src={`/assets/${img}`}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="rounded-full border border-white object-cover"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[12px] font-medium text-white border border-white">
                  26+
                </div>
              </div>
            </div>

            <div className="flex items-end">
              <span className="font-['Poppins',_sans-serif] text-[20px] font-semibold text-[#003BE2]">
                <span className="font-medium">$</span>25
              </span>
              <span className="font-['Satoshi',_sans-serif] text-[12px] text-[#4F4F4F] ml-1">/lifetime</span>
            </div>
          </div>

          {/* Rating */}
          <div className="absolute left-[306px] top-[232px] flex items-center gap-1">
            <span className="font-['Satoshi',_sans-serif] text-[18px] font-medium text-[#4F4F4F]">4.5</span>
            <Image src="/assets/style-outlined-2.svg" alt="star" width={24} height={24} />
          </div>
        </div>

        {/* 3D Decorative Cone Pyramid (Bottom-Left) */}
        <div className="absolute left-[85px] top-[690px] w-[188px] h-[188px] pointer-events-none z-30">
          <Image
            src="/assets/cone-01-2-2.png"
            alt="3D Pyramid Graphic"
            width={189}
            height={189}
            className="object-contain"
          />
        </div>

        {/* Floating Badge ("Happy Students") */}
        <div className="absolute left-[348px] top-[740px] w-[258px] h-[123px] rounded-[16px] bg-[#D4FB20] backdrop-blur-[10px] p-4 flex flex-col justify-center items-start gap-2 z-40 text-[#242528] shadow-xl">
          <div>
            <p className="font-['Satoshi',_sans-serif] text-[16px] font-medium text-[#242528]">Happy Students</p>
            <div className="flex items-center gap-1">
              <span className="font-['Satoshi',_sans-serif] text-[10px] text-[#82868E]">
                <strong className="text-[#242528]">4.5</strong> (240)
              </span>
              <Image src="/assets/star.svg" alt="star" width={16} height={16} />
            </div>
          </div>
          <div className="flex items-center -space-x-3 overflow-hidden">
            {["ellipse-5.png", "ellipse.png", "ellipse-6.png", "ellipse-7.png", "ellipse-8.png", "ellipse-9.png", "ellipse-10.png"].map((img, i) => (
              <Image
                key={i}
                src={`/assets/${img}`}
                alt="student"
                width={43}
                height={43}
                className="rounded-full border-2 border-[#D4FB20] object-cover"
              />
            ))}
            <div className="w-[43px] h-[43px] rounded-full bg-[#242528] text-white flex items-center justify-center text-[12px] font-bold border-2 border-[#D4FB20]">
              2K+
            </div>
          </div>
        </div>

        {/* 3D Ribbon Wave (Right of Happy Students) */}
        <div className="absolute left-[340px] top-[635px] w-[175px] h-[175px] pointer-events-none z-30">
          <Image
            src="/assets/image.png"
            alt="3D Wave Graphic"
            width={175}
            height={175}
            className="object-contain"
          />
        </div>

        {/* RIGHT SIDE FORM CARD (Sign In Form) */}
        <div className="absolute left-[741px] top-[120px] w-[579px] h-[784px] rounded-[24px] bg-white text-[#242528] shadow-2xl p-[63px] flex flex-col justify-between z-40">
          <div>
            {/* Header */}
            <p className="font-['Satoshi',_sans-serif] text-[18px] font-normal text-[#003BE2] leading-[29px]">
              Sign In
            </p>
            <h2 className="font-['Poppins',_sans-serif] text-[44px] font-semibold text-[#242528] leading-[53px] mt-1 mb-10">
              Welcome Back
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex flex-col items-start gap-2">
                <label className="font-['Satoshi',_sans-serif] text-[14px] font-medium text-[#242528]">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[453px] h-[52px] py-3 px-6 rounded-[12px] bg-white border border-[#E5E6E8] text-[18px] text-[#242528] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] transition"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col items-start gap-2">
                <label className="font-['Satoshi',_sans-serif] text-[14px] font-medium text-[#242528]">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[453px] h-[52px] py-3 px-6 rounded-[12px] bg-white border border-[#E5E6E8] text-[18px] text-[#242528] placeholder:text-[#82868E] outline-none focus:border-[#003BE2] transition"
                />
              </div>

              {/* Sign In Button */}
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="py-3 px-8 rounded-[24px] bg-[#D4FB20] text-[#242528] font-['Satoshi',_sans-serif] text-[18px] font-medium leading-[22px] hover:brightness-105 transition cursor-pointer shadow-sm"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

          {/* Social Logins */}
          <div className="flex flex-col items-center gap-6 mt-6">
            <div className="w-[453px] flex items-center justify-center gap-3">
              <div className="flex-1 h-[1px] bg-[#E5E6E8]" />
              <span className="font-['Satoshi',_sans-serif] text-[18px] font-normal text-[#888888]">
                or
              </span>
              <div className="flex-1 h-[1px] bg-[#E5E6E8]" />
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="w-14 h-14 rounded-full border border-[#E5E6E8] flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
                aria-label="Facebook Sign In"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#040819">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C20.412 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button
                type="button"
                className="w-14 h-14 rounded-full border border-[#E5E6E8] flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
                aria-label="Google Sign In"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"/>
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
                  <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12.5s.7 2.8 1.9 5.2l3.7-2.9z"/>
                  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Link */}
          <div className="flex items-center justify-center gap-1">
            <span className="font-['Satoshi',_sans-serif] text-[16px] text-[#888888]">
              New user?
            </span>
            <Link
              href="/register"
              className="font-['Satoshi',_sans-serif] text-[16px] text-[#003BE2] hover:underline cursor-pointer"
            >
              Create an account
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
