"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 transition-all duration-300 pointer-events-none ${
        scrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand / Logo Pill */}
        <a
          href="#top"
          className="group flex items-center gap-3 bg-[#141312]/80 hover:bg-[#1c1a18] border border-white/10 hover:border-white/20 backdrop-blur-xl px-4 py-2.5 rounded-full transition-all duration-300 shadow-2xl shadow-black/40"
        >
          {/* Aperture / Lens Icon */}
          <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center relative overflow-hidden group-hover:border-white transition-colors">
            <div className="w-2 h-2 rounded-full bg-white group-hover:scale-125 transition-transform" />
            <div className="absolute inset-0 border-t border-r border-white/20 rotate-45" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold tracking-wider text-xs sm:text-sm text-white flex items-center gap-1.5">
              GTA <span className="text-neutral-400 font-light">CREATIVE</span>
            </span>
          </div>
        </a>

        {/* Center Floating Dock (Matches Squarespace Pill Design) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141312]/85 border border-white/10 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-2xl shadow-black/50">
          <a
            href="#work"
            className="text-xs lg:text-sm font-medium text-neutral-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Work
          </a>
          <a
            href="#showreel"
            className="text-xs lg:text-sm font-medium text-neutral-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Showreel
          </a>
          <a
            href="#capabilities"
            className="text-xs lg:text-sm font-medium text-neutral-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Capabilities
          </a>
          <a
            href="#socials"
            className="text-xs lg:text-sm font-medium text-neutral-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Socials
          </a>
          <a
            href="#contact"
            className="text-xs lg:text-sm font-medium text-neutral-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button (Matches Squarespace High-Contrast Pill) */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#141312]/80 border border-white/10 hover:border-white/30 text-neutral-300 hover:text-white backdrop-blur-xl transition-all"
            title="Instagram @gtacreative"
            aria-label="Instagram"
          >
            <svg
              className="w-4 h-4"
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
          </a>

          <button
            onClick={onOpenContact}
            className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary-hover text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-white/20 active:scale-95 flex items-center gap-1.5"
          >
            <span>Book Shoot / Email</span>
            <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#141312]/80 border border-white/10 text-white backdrop-blur-xl"
            aria-label="Toggle Navigation"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto bg-[#141312]/95 border border-white/15 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl pointer-events-auto flex flex-col gap-2">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Selected Works
          </a>
          <a
            href="#showreel"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Cinematography Reel
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Production & Gear
          </a>
          <a
            href="#socials"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Social Handles & Channels
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            Direct Contact & RFP
          </a>
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover font-medium text-xs text-center transition-colors"
            >
              Direct Email & Booking
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
