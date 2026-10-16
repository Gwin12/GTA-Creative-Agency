"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS, Project } from "@/lib/projects";

interface ProjectShowcaseProps {
    onSelectProject: (project: Project) => void;
    onInquireStyle: (title: string) => void;
}

export default function ProjectShowcase({
    onSelectProject,
    onInquireStyle
}: ProjectShowcaseProps) {
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const categories = [
        { id: "all", label: "All Works" },
        { id: "commercial", label: "Commercial Films" },
        { id: "editorial", label: "Editorial Stills" },
        { id: "music", label: "Music & Motion" },
        { id: "documentary", label: "Documentary" }
    ];

    const filteredProjects =
        activeCategory === "all"
            ? PROJECTS
            : PROJECTS.filter(p => p.category === activeCategory);

    const featuredEditorial = PROJECTS.find(p => p.id === "reseda-monochrome");
    const featuredCommercial = PROJECTS.find(p => p.id === "kinetic-drift");

    return (
        <section
            id="work"
            className="relative py-24 sm:py-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
                <div>
                    <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-secondary uppercase mb-2 font-medium">
                        <span>Portfolio Dossier</span>
                        <span>•</span>
                        <span>2024 — 2026</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-normal tracking-tight text-white">
                        Selected Works &{" "}
                        <span className="font-serif italic text-neutral-300">
                            Campaigns
                        </span>
                    </h2>
                </div>

                {/* Category Filter Pills (Glassmorphic docked style) */}
                <div className="flex flex-wrap items-center gap-2 bg-[#141312]/80 border border-white/10 p-1.5 rounded-full backdrop-blur-xl">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`cursor-pointer px-4 py-2 rounded-full text-xs font-medium transition-all ${
                                activeCategory === cat.id
                                    ? "bg-primary text-primary-foreground shadow-md shadow-white/10"
                                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Side-by-Side Minimalist Pair (RESEDA & KINETIC) */}
            {activeCategory === "all" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Card A: RESEDA Editorial (Cleaned of text clutter, just heading, visuals & glass button) */}
                    {featuredEditorial && (
                        <div className="group relative bg-[#141312] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl">
                            <div>
                                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-wider mb-4">
                                    <span className="text-secondary font-medium">
                                        RESEDA PHOTOGRAPHY
                                    </span>
                                    <span>{featuredEditorial.client}</span>
                                </div>

                                {/* Bold Editorial Headline */}
                                <h3 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase leading-none mb-6">
                                    RESEDA
                                </h3>

                                <div
                                    onClick={() =>
                                        onSelectProject(featuredEditorial)
                                    }
                                    className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/50 cursor-pointer mb-6"
                                >
                                    <Image
                                        src={featuredEditorial.coverImage}
                                        alt={featuredEditorial.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 600px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                                </div>
                            </div>

                            {/* Minimal Bottom Bar: Just the heading status and glass-like Book Style CTA */}
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-xs font-mono text-neutral-400">
                                    {featuredEditorial.categoryLabel}
                                </span>

                                <button
                                    onClick={() =>
                                        onInquireStyle(featuredEditorial.title)
                                    }
                                    className="cursor-pointer px-5 py-2.5 rounded-full backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-xs font-medium tracking-wide transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
                                >
                                    <span>Book Style</span>
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Card B: KINETIC DRIFT Automotive Film */}
                    {featuredCommercial && (
                        <div className="group relative bg-[#141312] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl">
                            <div>
                                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono tracking-wider mb-4">
                                    <span className="text-secondary font-medium">
                                        COMMERCIAL MOTION
                                    </span>
                                    <span>{featuredCommercial.client}</span>
                                </div>

                                <h3 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase leading-none mb-6">
                                    KINETIC
                                </h3>

                                <div
                                    onClick={() =>
                                        onSelectProject(featuredCommercial)
                                    }
                                    className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 cursor-pointer mb-6"
                                >
                                    <Image
                                        src={featuredCommercial.coverImage}
                                        alt={featuredCommercial.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 600px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                                </div>
                            </div>

                            {/* Minimal Bottom Bar: Just category & glass-like Book Style CTA */}
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-xs font-mono text-neutral-400">
                                    {featuredCommercial.categoryLabel}
                                </span>

                                <button
                                    onClick={() =>
                                        onInquireStyle(featuredCommercial.title)
                                    }
                                    className="cursor-pointer px-5 py-2.5 rounded-full backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-xs font-medium tracking-wide transition-all duration-200 shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2"
                                >
                                    <span>Book Style</span>
                                    <span>→</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* 4) Minimal Works Cards Grid (Removed bottom text clutter, just heading & glass-like Book Style CTA) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div
                        key={project.id}
                        className="group relative bg-[#131211] rounded-3xl border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                    >
                        {/* Visual Media Container */}
                        <div
                            onClick={() => onSelectProject(project)}
                            className="relative aspect-[16/11] overflow-hidden bg-black/70 cursor-pointer"
                        >
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 400px"
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

                            {/* Minimal Category & Year Top Overlay */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white/90 border border-white/10 text-[11px]">
                                    {project.categoryLabel}
                                </span>
                                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-secondary border border-white/10 text-[11px] font-medium">
                                    {project.year}
                                </span>
                            </div>
                        </div>

                        {/* Clean Minimal Card Bottom: Just the top heading, client, and glass-like Book Style button */}
                        <div className="p-6 flex items-center justify-between gap-4">
                            <div>
                                <span className="text-[11px] uppercase tracking-wider text-secondary font-mono block">
                                    {project.client}
                                </span>
                                <h4
                                    onClick={() => onSelectProject(project)}
                                    className="text-lg sm:text-xl font-serif text-white hover:text-neutral-300 transition-colors cursor-pointer tracking-tight"
                                >
                                    {project.title}
                                </h4>
                            </div>

                            {/* Glass-like "Book Style" Button */}
                            <button
                                onClick={() => onInquireStyle(project.title)}
                                className="cursor-pointer flex-shrink-0 px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-xs font-medium tracking-wide transition-all duration-200 shadow-md hover:scale-105 active:scale-95 flex items-center gap-1.5"
                                title="Inquire about this style"
                            >
                                <span>Book Style</span>
                                <span>→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
