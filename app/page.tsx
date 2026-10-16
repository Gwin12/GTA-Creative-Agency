"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Capabilities from "@/components/Capabilities";
import CinematicShowreel from "@/components/CinematicShowreel";
import SocialAndContact from "@/components/SocialAndContact";
import ProjectModal from "@/components/ProjectModal";
import ContactDrawer from "@/components/ContactDrawer";
import Footer from "@/components/Footer";
import ScrollThread from "@/components/ScrollThread";
import { Project } from "@/lib/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState("");

  const handleOpenContact = (topic = "") => {
    setInquiryTopic(topic);
    setDrawerOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInquireStyle = (projectTitle: string) => {
    handleOpenContact(`Inquiry regarding style / production of: ${projectTitle}`);
  };

  return (
    <div className="min-h-screen bg-[#0c0b0a] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white relative">
      {/* Floating Pill Navigation */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-1 flex flex-col relative">
        {/* Animated Shining Snake Scroll Thread weaving between sections */}
        <ScrollThread />

        {/* Cinematic Hero with Ambient Video Background Carousel */}
        <Hero
          onOpenContact={() => handleOpenContact()}
          onExploreWork={handleExploreWork}
        />

        {/* Selected Works Portfolio Grid with Minimalist Design */}
        <ProjectShowcase
          onSelectProject={(project) => setSelectedProject(project)}
          onInquireStyle={handleInquireStyle}
        />

        {/* Visual Studio Capabilities & Pop-up Dossiers */}
        <Capabilities onOpenContact={() => handleOpenContact("Full Production Capabilities RFP")} />

        {/* Directorial 4K ARRIRAW Showreel (Moved close to footer) */}
        <CinematicShowreel onOpenContact={() => handleOpenContact("Showreel Direct Cut Request")} />

        {/* Dedicated Social Media Hub with Floating Glowing Icons & Direct Booking Email */}
        <SocialAndContact prefilledProject={inquiryTopic} />
      </main>

      {/* Squarespace-style Editorial Multi-column Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Project Lookbook Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => {
          setSelectedProject(null);
          handleInquireStyle(title);
        }}
      />

      {/* Slide-out Contact & Social Media Drawer */}
      <ContactDrawer
        isOpen={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          setInquiryTopic("");
        }}
        initialTopic={inquiryTopic}
      />
    </div>
  );
}
