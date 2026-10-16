"use client";

import React, { useState, useEffect } from "react";

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

// Static carousel video slides that calmly fade in the background
const VIDEO_SLIDES = [
  {
    src: "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-a-neon-illuminated-city-43187-large.mp4",
    poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1920&q=80",
    caption: "Fashion Editorial • 35mm Push Processed",
  },
  {
    src: "https://assets.mixkit.co/videos/preview/mixkit-cars-driving-on-a-highway-at-night-42474-large.mp4",
    poster: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1920&q=80",
    caption: "Automotive Precision • Hawk V-Lite Anamorphic",
  },
  {
    src: "https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-water-waves-in-the-sea-1200-large.mp4",
    poster: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1920&q=80",
    caption: "Tactile Light Studies • 8K ARRIRAW",
  },
];

// Typewriter animation words
const WORDS = ["visual storytelling", "photography", "videography"];

export default function Hero({ onOpenContact, onExploreWork }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [wordIdx, setWordIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % VIDEO_SLIDES.length);
    }, 7000); // Cross-fade every 7 seconds
    return () => clearInterval(timer);
  }, []);

  // Typewriter effect loop
  useEffect(() => {
    // Word fully typed, pause before deleting
    if (!isDeleting && subIdx === WORDS[wordIdx].length) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(pauseTimer);
    }

    // Word fully deleted, pause briefly before typing next word
    if (isDeleting && subIdx === 0) {
      const switchTimer = setTimeout(() => {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % WORDS.length);
      }, 350);
      return () => clearTimeout(switchTimer);
    }

    // Typing / backspacing speed
    const speed = isDeleting ? 45 : 85;
    const typingTimer = setTimeout(() => {
      setSubIdx((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(typingTimer);
  }, [subIdx, isDeleting, wordIdx]);

  return (
    <section id="top" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 1) Background Video Carousel (Calmly fading in the background with no controls) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0c0b0a]">
        {VIDEO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ transitionProperty: "opacity, transform", transitionDuration: "1400ms" }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={slide.poster}
              className="object-cover w-full h-full brightness-[0.45] contrast-[1.08] saturate-[0.9]"
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          </div>
        ))}

        {/* Ambient Dark Gradients & Cinematic Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-[#0c0b0a] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-black/20 to-[#0c0b0a]/70 pointer-events-none" />
      </div>

      {/* Slide Indicators on bottom left */}
      <div className="absolute bottom-10 left-6 sm:left-12 z-20 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          {VIDEO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                currentSlide === idx ? "w-8 bg-secondary" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <span className="text-[11px] font-mono text-white/50 tracking-wider hidden sm:inline">
          {VIDEO_SLIDES[currentSlide].caption}
        </span>
      </div>

      {/* 3) Hero Content: Clean, Reduced Text, Glassmorphic Floating Panel */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-44 sm:pt-48 md:pt-52 pb-24 sm:pb-32">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-2xl bg-white/[0.06] border border-white/20 text-neutral-200 text-[11px] sm:text-xs font-medium tracking-widest uppercase mb-8 shadow-2xl">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span>Cinematography & Visual Direction</span>
        </div>

        {/* Dynamic Display Title with Smooth Typewriter Effect */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.14] mb-8 drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          The leader in <br />
          <span className="font-serif italic font-light text-neutral-100 inline-block min-h-[1.25em]">
            <span>{WORDS[wordIdx].substring(0, subIdx)}</span>
            <span className="inline-block w-[3px] h-[0.8em] bg-secondary ml-1.5 align-middle animate-pulse" />
          </span>
        </h1>

        {/* 3) Glass-Like CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10">
          {/* Glass Primary CTA Button */}
          <button
            onClick={onOpenContact}
            className="cursor-pointer group relative px-8 sm:px-9 py-3.5 sm:py-4 rounded-full backdrop-blur-2xl bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/60 text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span>Book Shoot / Email Desk</span>
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>

          {/* Glass Social CTA Button (Instagram) */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-7 sm:px-8 py-4 rounded-full backdrop-blur-2xl bg-black/40 hover:bg-black/60 border border-white/20 hover:border-white/40 text-neutral-200 hover:text-white text-sm sm:text-base font-medium tracking-wide transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2.5"
          >
            <svg
              className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>Follow @gtacreative</span>
          </a>

          {/* Quick Scroll to Works */}
          <button
            onClick={onExploreWork}
            className="cursor-pointer px-6 py-4 rounded-full backdrop-blur-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore Works</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
