"use client";

import React, { useState, useEffect } from "react";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/lib/projects";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export default function ContactDrawer({ isOpen, onClose, initialTopic = "" }: ContactDrawerProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"email" | "socials">("email");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop overlay */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md h-full bg-[#121110] border-l border-white/15 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl text-white">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
                Studio Direct Connect
              </span>
            </div>
            <button
              onClick={onClose}
              className="cursor-pointer w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close drawer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Title */}
          <div className="my-6">
            <h3 className="text-2xl sm:text-3xl font-serif text-white">
              Connect with GTA Creative
            </h3>
            <p className="text-xs text-neutral-400 font-light mt-1">
              Direct access to our executive producers, director of photography, and active social channels.
            </p>
          </div>

          {/* Switcher Tabs */}
          <div className="flex p-1 bg-black/40 border border-white/10 rounded-full mb-6">
            <button
              onClick={() => setActiveTab("email")}
              className={`flex-1 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === "email" ? "bg-primary text-primary-foreground" : "text-neutral-400 hover:text-white"
              }`}
            >
              Direct Email & RFP
            </button>
            <button
              onClick={() => setActiveTab("socials")}
              className={`flex-1 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === "socials" ? "bg-primary text-primary-foreground" : "text-neutral-400 hover:text-white"
              }`}
            >
              Social Media Handles
            </button>
          </div>

          {/* Content Views */}
          {activeTab === "email" ? (
            <div className="space-y-4">
              {initialTopic && (
                <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-xs text-secondary font-medium">
                  <span className="font-semibold block font-mono">Inquiry Topic:</span>
                  {initialTopic}
                </div>
              )}

              <div className="p-4 rounded-2xl bg-[#181716] border border-white/10 space-y-2">
                <span className="text-[11px] font-mono uppercase text-neutral-400">Primary Desk</span>
                <div className="text-base font-mono text-white break-all">
                  {CONTACT_INFO.primaryEmail}
                </div>
                <div className="flex gap-2 pt-2">
                  <a
                    href={`mailto:${CONTACT_INFO.primaryEmail}?subject=${encodeURIComponent(
                      initialTopic ? `Inquiry regarding: ${initialTopic}` : "General Production Inquiry"
                    )}`}
                    className="flex-1 py-2 text-center rounded-xl bg-primary text-primary-foreground font-medium text-xs hover:bg-primary-hover transition-colors"
                  >
                    Open Mail App →
                  </a>
                  <button
                    onClick={() => handleCopy(CONTACT_INFO.primaryEmail)}
                    className="cursor-pointer px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#181716] border border-white/10 space-y-2">
                <span className="text-[11px] font-mono uppercase text-neutral-400">Direct Producer Phone</span>
                <div className="text-base font-mono text-white">
                  {CONTACT_INFO.phone}
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
                  className="block w-full py-2 text-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 font-medium text-xs transition-colors"
                >
                  Call Production Desk
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1 text-xs text-neutral-400">
                <div className="text-white font-medium font-mono text-[11px] uppercase">Studio Hours</div>
                <p>Monday — Friday: 8:00 AM – 7:00 PM PST</p>
                <p>Global production teams on call 24/7</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#181716] hover:bg-[#201e1c] border border-white/10 hover:border-white/25 flex items-center justify-between transition-all group"
                >
                  <div>
                    <span className="text-sm font-medium text-white block">{social.platform}</span>
                    <span className="text-xs font-mono text-neutral-400">{social.handle}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-neutral-400">{social.metrics}</span>
                    <span className="text-xs text-neutral-300 group-hover:translate-x-0.5 transition-transform">↗</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 text-center space-y-2">
          <p className="text-[11px] font-mono text-neutral-500">
            GTA Creative Agency • Los Angeles & London
          </p>
          <button
            onClick={onClose}
            className="cursor-pointer text-xs text-neutral-400 hover:text-white underline transition-colors"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
}
