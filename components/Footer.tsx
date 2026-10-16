"use client";

import React from "react";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/projects";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="relative bg-[#080807] text-white border-t border-white/10 pt-14 pb-12 overflow-hidden">
      {/* Top Banner (Matches Squarespace "Start your free website trial today" CTA) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white">
            Let’s craft something <br />
            <span className="font-serif italic text-neutral-300">unforgettable together.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Available for commercial directing, international editorial assignments, and multi-cam productions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenContact}
              className="cursor-pointer px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-hover transition-all shadow-xl active:scale-95"
            >
              Email Production Desk →
            </button>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm transition-all"
            >
              Follow @gtacreative
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Multi-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Studio Monogram */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center relative">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="font-semibold tracking-wider text-base text-white">
                GTA <span className="text-neutral-400 font-light">CREATIVE AGENCY</span>
              </span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              High-end cinematography, fashion photography, and visual direction. Dedicated to tactile imagery, deliberate lighting, and timeless storytelling.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              {CONTACT_INFO.representation}
            </div>
          </div>

          {/* Col 2: Portfolio */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-300">
              Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li><a href="#work" className="hover:text-white transition-colors">Commercial Films</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Editorial Photography</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Music Videos</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Feature Documentaries</a></li>
              <li><a href="#showreel" className="hover:text-white transition-colors">2026 Showreel</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Booking */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-300">
              Direct Inquiries
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-mono">
              <li>
                <a href={`mailto:${CONTACT_INFO.primaryEmail}`} className="text-white hover:underline block break-all">
                  {CONTACT_INFO.primaryEmail}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.secondaryEmail}`} className="hover:text-white block break-all">
                  {CONTACT_INFO.secondaryEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white block">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="pt-2 text-[11px] text-neutral-500">
                Studio: 8:00 AM – 7:00 PM PST
              </li>
            </ul>
          </div>

          {/* Col 4: Follow / Social Handles (Direct request from user) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-300">
              Follow Us
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.platform}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>{item.platform}</span>
                    <span className="font-mono text-[10px] text-neutral-500">{item.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 GTA Creative Agency, LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Los Angeles</span>
            <span>•</span>
            <span>London</span>
            <span>•</span>
            <span>Paris</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
