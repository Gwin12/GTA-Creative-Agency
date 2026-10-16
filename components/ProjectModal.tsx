"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export default function ProjectModal({ project, onClose, onInquire }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#141312] border border-white/15 rounded-3xl shadow-2xl text-white flex flex-col">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#141312]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-neutral-300 font-mono">
              {project.categoryLabel}
            </span>
            <span className="text-sm text-neutral-400 font-mono">{project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onInquire(project.title)}
              className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary-hover text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all flex items-center gap-1.5"
            >
              <span>Inquire on this Production</span>
              <span className="text-xs">→</span>
            </button>

            <button
              onClick={onClose}
              className="cursor-pointer w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Hero Gallery Preview */}
          <div className="space-y-4">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10">
              <Image
                src={project.galleryImages[activeImageIndex] || project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-white/80">
                Frame {activeImageIndex + 1} of {project.galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {project.galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx ? "border-white scale-105" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx}`} fill sizes="96px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Specs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-white/10">
            {/* Story / Description */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary font-mono mb-1 font-medium">
                  Client: {project.client}
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="text-neutral-400 text-sm mt-1">{project.subtitle}</p>
              </div>

              <p className="text-neutral-300 text-base leading-relaxed">
                {project.description}
              </p>

              {project.awards && (
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary text-sm flex items-center gap-3">
                  <span className="text-xl">🏆</span>
                  <div>
                    <span className="font-semibold block text-white text-xs uppercase tracking-wider font-mono">Recognition</span>
                    {project.awards}
                  </div>
                </div>
              )}
            </div>

            {/* Production Specifications */}
            <div className="bg-[#1b1917] p-6 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 border-b border-white/10 pb-2">
                Production Dossier
              </h4>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-neutral-400 text-xs block font-mono">Director</span>
                  <span className="text-white font-medium">{project.director}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-xs block font-mono">Director of Photography</span>
                  <span className="text-white font-medium">{project.dop}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-xs block font-mono">Camera & Optical Glass</span>
                  <span className="text-neutral-200 text-xs font-mono">{project.gearUsed}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-xs block font-mono">Native Ratio</span>
                  <span className="text-white font-medium">{project.aspectRatio} Cinema</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={() => onInquire(project.title)}
                  className="w-full cursor-pointer py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-hover transition-colors text-center"
                >
                  Direct Booking / Contact
                </button>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Share on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
