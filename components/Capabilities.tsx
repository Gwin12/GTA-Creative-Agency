"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CapabilitiesProps {
    onOpenContact: (topic?: string) => void;
}

interface CapabilityItem {
    id: string;
    num: string;
    title: string;
    tagline: string;
    image: string;
    videoPreview?: string;
    badge: string;
    specs: string[];
    deliverables: string[];
}

export default function Capabilities({ onOpenContact }: CapabilitiesProps) {
    const [selectedCapability, setSelectedCapability] =
        useState<CapabilityItem | null>(null);

    const capabilities: CapabilityItem[] = [
        {
            id: "commercial",
            num: "01",
            title: "Commercial Film & Direction",
            tagline:
                "High-octane automotive spots, brand anthems & broadcast commercials.",
            image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
            badge: "Cinema Direction",
            specs: [
                "ARRI Alexa 35",
                "Hawk V-Lite Anamorphic",
                "Motion Control Rigs",
                "Pursuit Vehicles"
            ],
            deliverables: [
                "60s / 30s / 15s Broadcast Cuts",
                "CinemaScope Master 4K",
                "Color Grade in HDR10"
            ]
        },
        {
            id: "editorial",
            num: "02",
            title: "Luxury Editorial Photography",
            tagline:
                "Haute couture campaigns, magazine covers & sculptural architecture stills.",
            image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
            badge: "Medium Format",
            specs: [
                "Hasselblad H6D-100c",
                "Broncolor Scoro & Para 222",
                "35mm & 120 Kodak Film",
                "Capture One Pro"
            ],
            deliverables: [
                "Full Resolution 100MP Retouching",
                "Print-Ready CMYK Plates",
                "Social Asset Suite"
            ]
        },
        {
            id: "music-video",
            num: "03",
            title: "Music Videos & Visualizers",
            tagline:
                "Narrative motion art, stylized lighting atmospheres & experimental visualizers.",
            image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85",
            badge: "Music & Motion",
            specs: [
                "RED V-Raptor 8K VV",
                "Atlas Orion Anamorphic",
                "Astera Pixel Tubes",
                "Organic 16mm Grain"
            ],
            deliverables: [
                "Official Music Video Master",
                "Spotify Canvas Loops",
                "Vertical 9:16 Shorts"
            ]
        },
        {
            id: "documentary",
            num: "04",
            title: "Aerial & Documentary Cinema",
            tagline:
                "Expedition stills and cinematic 8K aerials captured across 24+ countries.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
            badge: "Aerial & Wild",
            specs: [
                "DJI Inspire 3 (X9-8K)",
                "Sony FX9 Full Frame",
                "Angenieux Optimo Zooms",
                "Remote Field Kits"
            ],
            deliverables: [
                "8K CinemaDNG Raw Aerials",
                "Festival Screener Package",
                "Archival B-Roll Reel"
            ]
        }
    ];

    const clientLogos = [
        "VOGUE",
        "PORSCHE",
        "BALENCIAGA",
        "SONY MUSIC",
        "NIKE",
        "ARCHITECTURAL DIGEST",
        "GQ MAGAZINE",
        "NATIONAL GEOGRAPHIC"
    ];

    return (
        <section
            id="capabilities"
            className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-[#0a0a09] border-y border-white/10"
        >
            {/* Background ambient lighting */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Client Marquee */}
                <div className="mb-24">
                    <p className="text-center text-[11px] font-mono tracking-widest text-neutral-400 uppercase mb-8">
                        Trusted By Visionary Brands & Publications
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center opacity-60">
                        {clientLogos.map((client, i) => (
                            <span
                                key={i}
                                className="text-xs sm:text-sm font-semibold tracking-wider font-mono text-neutral-300 hover:text-white hover:opacity-100 transition-all cursor-default"
                            >
                                {client}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Section Minimal Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary font-medium mb-3">
                            <span>Visual Capabilities</span>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-white">
                            Directed for cinema, <br />
                            <span className="font-serif italic text-neutral-300">
                                composed for permanence.
                            </span>
                        </h2>
                    </div>
                    <p className="text-neutral-400 text-xs sm:text-sm font-mono max-w-sm">
                        Click any capability card to explore technical camera
                        packages, production deliverables, and gear dossiers.
                    </p>
                </div>

                {/* 5) Visual-First Capabilities Grid with Pop-up Animations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {capabilities.map(item => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedCapability(item)}
                            className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 cursor-pointer shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                        >
                            {/* High-Resolution Media Background */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 600px"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/* Cinematic Vignette Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30 group-hover:from-black/90 group-hover:via-black/20 transition-all duration-500" />

                            {/* Top Glass Badge */}
                            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                                <span className="px-3.5 py-1.5 rounded-full backdrop-blur-xl bg-black/50 border border-white/15 text-[11px] font-mono uppercase tracking-wider text-white">
                                    {item.badge}
                                </span>
                                <span className="text-xl font-mono text-white/60 group-hover:text-secondary transition-colors font-light">
                                    {item.num}
                                </span>
                            </div>

                            {/* Bottom Content with Pop-up Animation on Hover */}
                            <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3">
                                <h3 className="text-xl sm:text-2xl font-serif text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-1 opacity-90">
                                    {item.tagline}
                                </p>

                                {/* Pop-up Interactive Trigger Button */}
                                <div className="pt-2 flex items-center justify-between">
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 group-hover:bg-white text-white group-hover:text-black border border-white/20 text-xs font-medium transition-all duration-300 transform group-hover:translate-x-1 shadow-lg">
                                        <span>Inspect Capability</span>
                                        <span className="text-xs">↗</span>
                                    </span>

                                    <span className="text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                                        {item.specs[0]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Minimal Banner CTA */}
                <div className="relative rounded-3xl bg-gradient-to-r from-[#141312] via-[#1a1917] to-[#141312] border border-white/15 p-8 sm:p-10 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-secondary font-medium block mb-1">
                            Production Deck & Equipment Specs
                        </span>
                        <h4 className="text-2xl font-serif text-white">
                            Need full camera packages & crew availability?
                        </h4>
                    </div>

                    <button
                        onClick={() =>
                            onOpenContact(
                                "Custom Production Camera Package RFP"
                            )
                        }
                        className="cursor-pointer px-8 py-3.5 rounded-full backdrop-blur-xl bg-white/15 hover:bg-white/25 border border-white/25 hover:border-white/50 text-white font-medium text-sm transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex-shrink-0"
                    >
                        Request Production Deck →
                    </button>
                </div>
            </div>

            {/* Pop-up Modal for Capability Item */}
            {selectedCapability && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-200">
                    <div className="relative w-full max-w-2xl bg-[#141312] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white space-y-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-secondary" />
                                <span className="text-xs font-mono uppercase tracking-wider text-neutral-300">
                                    {selectedCapability.badge} Dossier
                                </span>
                            </div>
                            <button
                                onClick={() => setSelectedCapability(null)}
                                className="cursor-pointer w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src={selectedCapability.image}
                                alt={selectedCapability.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-2xl font-serif text-white">
                                    {selectedCapability.title}
                                </h3>
                                <p className="text-xs text-neutral-300 mt-1">
                                    {selectedCapability.tagline}
                                </p>
                            </div>
                        </div>

                        {/* Technical Specs & Deliverables */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                                <span className="font-mono text-secondary uppercase tracking-wider block font-medium">
                                    Camera & Lens Package
                                </span>
                                <ul className="space-y-1.5 text-neutral-300">
                                    {selectedCapability.specs.map((spec, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-white/40" />
                                            <span>{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-4 rounded-xl bg-black/50 border border-white/10 space-y-2">
                                <span className="font-mono text-secondary uppercase tracking-wider block font-medium">
                                    Master Deliverables
                                </span>
                                <ul className="space-y-1.5 text-neutral-300">
                                    {selectedCapability.deliverables.map(
                                        (deliv, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-white/40" />
                                                <span>{deliv}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button
                                onClick={() => {
                                    const title = selectedCapability.title;
                                    setSelectedCapability(null);
                                    onOpenContact(
                                        `Inquiry regarding: ${title}`
                                    );
                                }}
                                className="cursor-pointer flex-1 py-3 rounded-full bg-primary text-primary-foreground font-medium text-xs sm:text-sm hover:bg-primary-hover transition-colors text-center shadow-lg"
                            >
                                Book This Crew & Package →
                            </button>
                            <button
                                onClick={() => setSelectedCapability(null)}
                                className="cursor-pointer px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 text-xs font-medium transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
