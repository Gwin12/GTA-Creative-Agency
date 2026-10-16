"use client";

import React, { useState } from "react";
import { CONTACT_INFO } from "@/lib/projects";

interface SocialAndContactProps {
    prefilledProject?: string;
}

export default function SocialAndContact({
    prefilledProject = ""
}: SocialAndContactProps) {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [activeHoverSocial, setActiveHoverSocial] = useState<string | null>(
        null
    );

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Commercial Film",
        budget: "$30,000 - $75,000",
        timeline: "Next 1-3 Months",
        brief: prefilledProject
            ? `Interested in booking a production similar to: ${prefilledProject}`
            : ""
    });

    const handleCopyEmail = (email: string) => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const mailtoLink = `mailto:${CONTACT_INFO.primaryEmail}?subject=${encodeURIComponent(
        `Production Inquiry: ${formData.service} - ${formData.name || "New Client"}`
    )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Brief:\n${formData.brief}`
    )}`;

    const floatingSocials = [
        {
            id: "instagram",
            name: "Instagram",
            handle: "@gtacreative",
            url: "https://instagram.com",
            stats: "128K Followers",
            tag: "Daily Stills & Editorial",
            glowColor: "rgba(225, 48, 108, 0.35)",
            borderColor: "hover:border-pink-500/50",
            accentBg: "from-pink-500/20 via-purple-500/20 to-amber-500/20",
            floatDelay: "0s",
            icon: (
                <svg
                    className="w-8 h-8 text-pink-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            )
        },
        {
            id: "youtube",
            name: "YouTube",
            handle: "GTA Cinema Studio",
            url: "https://youtube.com",
            stats: "45K Subscribers",
            tag: "4K Directorial Cuts",
            glowColor: "rgba(255, 0, 0, 0.35)",
            borderColor: "hover:border-red-500/50",
            accentBg: "from-red-600/20 to-orange-600/10",
            floatDelay: "1s",
            icon: (
                <svg
                    className="w-8 h-8 text-red-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            )
        },
        {
            id: "vimeo",
            name: "Vimeo",
            handle: "vimeo.com/gtacreative",
            url: "https://vimeo.com",
            stats: "Staff Pick Winner",
            tag: "Master Cinematography",
            glowColor: "rgba(26, 183, 234, 0.35)",
            borderColor: "hover:border-cyan-400/50",
            accentBg: "from-cyan-500/20 to-blue-600/10",
            floatDelay: "2s",
            icon: (
                <svg
                    className="w-8 h-8 text-sky-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128 1.574-1.408 2.761-2.162 3.56-2.259 1.889-.179 3.054 1.107 3.493 3.86.536 3.284.902 5.328 1.108 6.14.619 3.195 1.303 4.793 2.053 4.793.582 0 1.294-.925 2.14-2.775.845-1.851 1.303-3.268 1.374-4.247.14-1.574-.42-2.361-1.68-2.361-.606 0-1.226.136-1.859.412 1.258-4.12 3.659-6.113 7.202-5.979 2.628.094 3.877 1.586 3.829 4.823z" />
                </svg>
            )
        },
        {
            id: "tiktok",
            name: "TikTok",
            handle: "@gtastudios",
            url: "https://tiktok.com",
            stats: "2.4M Likes",
            tag: "Lighting Logs & BTS",
            glowColor: "rgba(0, 242, 254, 0.35)",
            borderColor: "hover:border-teal-400/50",
            accentBg: "from-cyan-400/20 via-pink-500/20 to-black/40",
            floatDelay: "0.5s",
            icon: (
                <svg
                    className="w-8 h-8 text-cyan-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.55c.01 2.07-.67 4.18-2.05 5.76-1.54 1.78-3.9 2.67-6.26 2.45-2.52-.22-4.8-1.74-5.99-3.98-1.2-2.23-1.09-5.06.3-7.18 1.39-2.12 3.84-3.32 6.37-3.11v4.11c-1.16-.1-2.35.29-3.16 1.11-.8.81-1.11 2.05-.79 3.16.32 1.11 1.3 1.94 2.46 2.08 1.17.14 2.37-.41 2.99-1.41.34-.56.51-1.22.51-1.88V.02z" />
                </svg>
            )
        },
        {
            id: "x",
            name: "X (Twitter)",
            handle: "@gtacreative",
            url: "https://x.com",
            stats: "18.2K Follows",
            tag: "Production Updates",
            glowColor: "rgba(255, 255, 255, 0.25)",
            borderColor: "hover:border-white/50",
            accentBg: "from-white/10 to-neutral-800/40",
            floatDelay: "1.5s",
            icon: (
                <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        {
            id: "linkedin",
            name: "LinkedIn",
            handle: "GTA Creative Agency",
            url: "https://linkedin.com",
            stats: "Production Network",
            tag: "Commercial Partnerships",
            glowColor: "rgba(10, 102, 194, 0.35)",
            borderColor: "hover:border-blue-400/50",
            accentBg: "from-blue-600/20 to-sky-600/10",
            floatDelay: "2.5s",
            icon: (
                <svg
                    className="w-8 h-8 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            )
        }
    ];

    return (
        <section
            id="contact"
            className="relative pt-10 sm:pt-14 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            {/* Background Ambience */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-neutral-900/40 rounded-full blur-[160px] pointer-events-none" />

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono uppercase tracking-widest mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span>Inquiries & Global Channels</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-4">
                    Start your next <br />
                    <span className="font-serif italic text-neutral-300">
                        visual production
                    </span>
                </h2>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                    Connect directly through our production desk or explore our
                    live feeds for daily studio stills, cinematography breakdown
                    cuts, and lighting logs.
                </p>
            </div>

            {/* 7) Sick Floating Social Icons System (User requested floating icons that look sick instead of plain text) */}
            <div id="socials" className="mb-32 sm:mb-40">
                <div className="text-center mb-12">
                    <span className="text-xs font-mono tracking-widest uppercase text-secondary font-medium">
                        Studio Social Orbit
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-white mt-1">
                        Tap into our live channels
                    </h3>
                </div>

                {/* Floating Icons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {floatingSocials.map(social => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setActiveHoverSocial(social.id)}
                            onMouseLeave={() => setActiveHoverSocial(null)}
                            className={`group relative p-6 rounded-3xl backdrop-blur-2xl bg-gradient-to-b ${social.accentBg} border border-white/10 ${social.borderColor} flex flex-col items-center justify-between text-center transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer`}
                            style={{
                                boxShadow:
                                    activeHoverSocial === social.id
                                        ? `0 20px 40px -10px ${social.glowColor}`
                                        : "0 10px 25px -5px rgba(0,0,0,0.5)"
                            }}
                        >
                            {/* Floating Top Halo Indicator */}
                            <div className="w-2 h-2 rounded-full bg-white/40 group-hover:scale-150 transition-transform mb-2" />

                            {/* Sick Icon Container with Floating Glow */}
                            <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/15 flex items-center justify-center my-3 group-hover:border-white/40 transition-colors shadow-inner">
                                <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                    {social.icon}
                                </div>
                            </div>

                            {/* Title & Floating Metric Chip */}
                            <div className="space-y-1.5 mt-2">
                                <h4 className="text-sm font-semibold text-white tracking-wide">
                                    {social.name}
                                </h4>
                                <p className="text-[11px] font-mono text-neutral-400 truncate max-w-[120px]">
                                    {social.handle}
                                </p>

                                <div className="pt-2">
                                    <span className="inline-block text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-neutral-200 group-hover:bg-white group-hover:text-black transition-colors">
                                        {social.stats}
                                    </span>
                                </div>
                            </div>

                            {/* Subtle Arrow Indicator */}
                            <div className="mt-3 text-[11px] font-mono text-neutral-400 group-hover:text-white flex items-center gap-1">
                                <span>Open</span>
                                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                    ↗
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Direct Email & RFP Booking System */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Direct Emails & Studio Info */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Email Spotlight Card */}
                    <div className="bg-[#141312] border border-white/15 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-medium block mb-2">
                                Direct Contact Mailbox
                            </span>
                            <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight">
                                Production & Booking Desk
                            </h3>
                        </div>

                        {/* Primary Email Box */}
                        <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                            <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                                General & Treatments
                            </span>
                            <div className="flex items-center justify-between gap-2">
                                <a
                                    href={`mailto:${CONTACT_INFO.primaryEmail}`}
                                    className="text-base sm:text-lg font-mono text-white hover:text-secondary transition-colors font-medium break-all"
                                >
                                    {CONTACT_INFO.primaryEmail}
                                </a>
                                <button
                                    onClick={() =>
                                        handleCopyEmail(
                                            CONTACT_INFO.primaryEmail
                                        )
                                    }
                                    className="cursor-pointer flex-shrink-0 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white text-xs font-mono transition-all"
                                    title="Copy email to clipboard"
                                >
                                    {copiedEmail ? "Copied!" : "Copy"}
                                </button>
                            </div>
                        </div>

                        {/* Secondary Email Box */}
                        <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                            <span className="text-[11px] font-mono uppercase text-neutral-400 block">
                                Commercial Booking Desk
                            </span>
                            <div className="flex items-center justify-between gap-2">
                                <a
                                    href={`mailto:${CONTACT_INFO.secondaryEmail}`}
                                    className="text-base sm:text-lg font-mono text-white hover:text-secondary transition-colors font-medium break-all"
                                >
                                    {CONTACT_INFO.secondaryEmail}
                                </a>
                                <button
                                    onClick={() =>
                                        handleCopyEmail(
                                            CONTACT_INFO.secondaryEmail
                                        )
                                    }
                                    className="cursor-pointer flex-shrink-0 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white text-xs font-mono transition-all"
                                    title="Copy email to clipboard"
                                >
                                    Copy
                                </button>
                            </div>
                        </div>

                        {/* Studio Quick Info */}
                        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-400">
                            <div className="flex items-center gap-2">
                                <span>Tel:</span>
                                <a
                                    href="tel:+13108449210"
                                    className="text-white hover:underline"
                                >
                                    {CONTACT_INFO.phone}
                                </a>
                            </div>
                            <span>LA • London • Paris</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Interactive Booking Form */}
                <div className="lg:col-span-7">
                    <div className="bg-[#141312] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
                        <div className="mb-6">
                            <span className="text-xs font-mono uppercase tracking-widest text-secondary font-medium block mb-1">
                                Direct RFP Form
                            </span>
                            <h3 className="text-xl sm:text-2xl font-serif text-white">
                                Direct Project Inquiry
                            </h3>
                        </div>

                        {submitted ? (
                            <div className="py-12 text-center space-y-6">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 mx-auto flex items-center justify-center text-2xl">
                                    ✓
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl sm:text-2xl font-serif text-white">
                                        Inquiry Ready to Dispatch
                                    </h4>
                                    <p className="text-neutral-400 text-sm max-w-md mx-auto">
                                        Your details have been compiled into
                                        your direct inquiry draft for{" "}
                                        <span className="text-white font-mono">
                                            {CONTACT_INFO.primaryEmail}
                                        </span>
                                        .
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                                    <a
                                        href={mailtoLink}
                                        className="px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-hover transition-colors shadow-xl"
                                    >
                                        Open in Your Email Client →
                                    </a>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="cursor-pointer px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors"
                                    >
                                        Edit Information
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Service Selection */}
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                                        Production Category
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                        {[
                                            "Commercial Film",
                                            "Editorial Stills",
                                            "Music Video",
                                            "Documentary"
                                        ].map(svc => (
                                            <button
                                                type="button"
                                                key={svc}
                                                onClick={() =>
                                                    setFormData({
                                                        ...formData,
                                                        service: svc
                                                    })
                                                }
                                                className={`cursor-pointer px-3 py-2 rounded-xl text-xs font-medium border text-center transition-all ${
                                                    formData.service === svc
                                                        ? "bg-primary text-primary-foreground border-white"
                                                        : "bg-black/40 text-neutral-400 border-white/10 hover:border-white/25 hover:text-white"
                                                }`}
                                            >
                                                {svc}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                                            Your Name / Company *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Virgil / Vogue Paris"
                                            value={formData.name}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value
                                                })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-white text-white placeholder-neutral-600 text-sm outline-none transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                                            Your Direct Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="e.g. producer@agency.com"
                                            value={formData.email}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value
                                                })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-white text-white placeholder-neutral-600 text-sm outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Budget & Timeline Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                                            Estimated Production Budget
                                        </label>
                                        <select
                                            value={formData.budget}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    budget: e.target.value
                                                })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-white text-white text-sm outline-none transition-colors"
                                        >
                                            <option value="$15,000 - $30,000">
                                                $15,000 - $30,000
                                            </option>
                                            <option value="$30,000 - $75,000">
                                                $30,000 - $75,000
                                            </option>
                                            <option value="$75,000 - $150,000">
                                                $75,000 - $150,000
                                            </option>
                                            <option value="$150,000+">
                                                $150,000+ (Full Campaign)
                                            </option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                                            Target Production Window
                                        </label>
                                        <select
                                            value={formData.timeline}
                                            onChange={e =>
                                                setFormData({
                                                    ...formData,
                                                    timeline: e.target.value
                                                })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-white text-white text-sm outline-none transition-colors"
                                        >
                                            <option value="Immediate (Next 2-3 Weeks)">
                                                Immediate (Next 2-3 Weeks)
                                            </option>
                                            <option value="Next 1-3 Months">
                                                Next 1-3 Months
                                            </option>
                                            <option value="Q3 / Q4 2026">
                                                Q3 / Q4 2026
                                            </option>
                                            <option value="Flexible / Spec Project">
                                                Flexible / Spec Project
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                {/* Brief & Notes */}
                                <div className="space-y-2">
                                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                                        Project Brief
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Project brief, deliverables, and vision..."
                                        value={formData.brief}
                                        onChange={e =>
                                            setFormData({
                                                ...formData,
                                                brief: e.target.value
                                            })
                                        }
                                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-white text-white placeholder-neutral-600 text-sm outline-none transition-colors resize-none"
                                    />
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                        <span>24hr response</span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="cursor-pointer w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-xs sm:text-sm hover:bg-primary-hover transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        <span>Submit & Generate Email</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
