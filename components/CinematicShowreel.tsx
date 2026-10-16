"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CinematicShowreelProps {
    onOpenContact: () => void;
}

export default function CinematicShowreel({
    onOpenContact
}: CinematicShowreelProps) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [activeFrame, setActiveFrame] = useState(0);

    const reelFrames = [
        {
            title: "Reseda Fashion Editorial (35mm)",
            client: "Vogue Paris",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1800&q=85",
            format: "Kodak 5219 / Cooke Anamorphic",
            fps: "24.00 FPS"
        },
        {
            title: "Kinetic Drift Automotive Film",
            client: "Porsche Motorsport",
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1800&q=85",
            format: "ARRI Alexa 35 / Hawk V-Lite",
            fps: "48.00 FPS HFR"
        },
        {
            title: "Soft Monoliths Sculptural Study",
            client: "Architectural Digest",
            image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1800&q=85",
            format: "Hasselblad H6D Medium Format",
            fps: "Stills 100MP"
        }
    ];

    return (
        <section
            id="showreel"
            className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-secondary/10 rounded-full blur-[160px] pointer-events-none" />

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-[11px] font-mono uppercase tracking-widest mb-3 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    <span>Interactive Master Cut</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-white mb-4">
                    Directorial{" "}
                    <span className="font-serif italic text-neutral-300">
                        Showreel 2026
                    </span>
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm font-light">
                    Switch between raw camera outputs, live lighting balances,
                    and anamorphic lens profiles.
                </p>
            </div>

            {/* Cinematic Reel Container */}
            <div className="relative max-w-6xl mx-auto w-full group">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#141312] shadow-2xl shadow-black/90 aspect-[16/9] sm:aspect-[21/9]">
                    {/* Cinema Frame Image */}
                    <Image
                        src={reelFrames[activeFrame].image}
                        alt={reelFrames[activeFrame].title}
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Film Grain & Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-black/40 pointer-events-none" />

                    {/* Top Cinema HUD Bar */}
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none text-xs font-mono tracking-widest text-white/70">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="font-semibold text-white">
                                REC • 4K ARRIRAW
                            </span>
                            <span className="hidden sm:inline text-white/40">
                                |
                            </span>
                            <span className="hidden sm:inline">
                                {reelFrames[activeFrame].fps}
                            </span>
                        </div>
                        <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px]">
                            {reelFrames[activeFrame].format}
                        </div>
                    </div>

                    {/* Center Play Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 hover:bg-primary text-white hover:text-primary-foreground border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                            aria-label={isPlaying ? "Pause Reel" : "Play Reel"}
                        >
                            {isPlaying ? (
                                <svg
                                    className="w-6 h-6 sm:w-7 sm:h-7"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6 sm:w-7 sm:h-7 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Bottom HUD & Frame Switchers */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <p className="text-[11px] uppercase tracking-widest text-secondary font-mono mb-1 font-medium">
                                {reelFrames[activeFrame].client}
                            </p>
                            <h3 className="text-base sm:text-xl font-serif text-white tracking-wide">
                                {reelFrames[activeFrame].title}
                            </h3>
                        </div>

                        {/* Quick Switcher Tabs */}
                        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/15">
                            {reelFrames.map((frame, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFrame(index)}
                                    className={`cursor-pointer px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                                        activeFrame === index
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-white/10"
                                            : "text-neutral-400 hover:text-white hover:bg-white/10"
                                    }`}
                                >
                                    Scene 0{index + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="cursor-pointer ml-1 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                title={isMuted ? "Unmute audio" : "Mute audio"}
                                aria-label="Toggle Sound"
                            >
                                {isMuted ? (
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Ambient reflection glow beneath player */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-secondary/15 blur-2xl pointer-events-none rounded-full" />
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={onOpenContact}
                    className="cursor-pointer text-xs font-mono text-neutral-400 hover:text-white transition-colors underline decoration-white/30 underline-offset-4"
                >
                    Request Full 4K Director Cut & Password Protected Reels →
                </button>
            </div>
        </section>
    );
}
