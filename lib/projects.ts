export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: "commercial" | "editorial" | "music" | "documentary";
  categoryLabel: string;
  year: string;
  aspectRatio: string;
  coverImage: string;
  galleryImages: string[];
  director: string;
  dop: string;
  gearUsed: string;
  description: string;
  awards?: string;
  videoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "reseda-monochrome",
    title: "RESEDA NOIR",
    subtitle: "High Fashion Stills & 35mm Motion",
    client: "Maison Margiela x Vogue",
    category: "editorial",
    categoryLabel: "Editorial Photography",
    year: "2026",
    aspectRatio: "16/9",
    coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
    ],
    director: "Sofia Parazi",
    dop: "Godwin A.",
    gearUsed: "Hasselblad H6D-100c & Cooke Panchro 50mm",
    description:
      "A raw, sculptural editorial campaign shot in downtown Los Angeles capturing brutalist architecture juxtaposed against avant-garde silhouettes. Shot across daylight shadows and 35mm monochrome push-processed film.",
    awards: "Featured on Vogue Editorial Selection 2026",
  },
  {
    id: "kinetic-drift",
    title: "KINETIC DRIFT",
    subtitle: "Automotive Precision & High Speed Cinematography",
    client: "Porsche Motorsport",
    category: "commercial",
    categoryLabel: "Commercial Film",
    year: "2026",
    aspectRatio: "21/9",
    coverImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85",
    ],
    director: "Marcus Vance",
    dop: "Godwin A.",
    gearUsed: "ARRI Alexa 35, Flight Head VII & Hawk V-Lite Anamorphic",
    description:
      "Captured on the winding coastal cliffs of Big Sur at dusk. Utilizing pursuit vehicles and custom gyro-stabilized rigs to render the tactile adrenaline of motorsport engineering.",
    awards: "Berlin Commercial Awards - Best Cinematography Nominee",
  },
  {
    id: "soft-monoliths",
    title: "SOFT MONOLITHS",
    subtitle: "Ceramic Sculpture & Tactile Light Studies",
    client: "Atelier Vayu & Architectural Digest",
    category: "editorial",
    categoryLabel: "Art & Architecture Stills",
    year: "2026",
    aspectRatio: "4/3",
    coverImage: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    ],
    director: "Godwin A.",
    dop: "Godwin A.",
    gearUsed: "Fujifilm GFX 100 II & Broncolor Para 222",
    description:
      "A quiet study of earthbound vessels, darkened stoneware, and ambient raking sunlight. Inspired by wabi-sabi minimalism and organic geometries, bringing stillness to physical materials.",
    awards: "Winner - Design Anthology Awards 2026",
  },
  {
    id: "velvet-frequencies",
    title: "VELVET FREQUENCIES",
    subtitle: "Music Visualizer & Narrative Short",
    client: "Sony Music Entertainment",
    category: "music",
    categoryLabel: "Music & Motion",
    year: "2025",
    aspectRatio: "16/9",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=85",
    ],
    director: "Elena Ramos",
    dop: "Godwin A.",
    gearUsed: "RED V-Raptor 8K VV & Atlas Orion Anamorphic Glass",
    description:
      "An ethereal journey through midnight neon, smoke haze, and live orchestral improvisations. Graded with deep blues, warm tungsten flaring, and organic 16mm grain texture.",
  },
  {
    id: "solitude-sahara",
    title: "ECHOES OF SAHARA",
    subtitle: "Feature Documentary & Landscape Study",
    client: "National Geographic Explorers",
    category: "documentary",
    categoryLabel: "Documentary Film",
    year: "2025",
    aspectRatio: "21/9",
    coverImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
    ],
    director: "Godwin A. & Tariq Al-Mansoor",
    dop: "Godwin A.",
    gearUsed: "Sony FX9, Angenieux Optimo Zoom & DJI Inspire 3 (X9-8K)",
    description:
      "Documenting nomad communities across southern Morocco. Harsh midday glare transformed into cinematic amber dusk using custom optical polarizers and intimate focal lengths.",
    awards: "Official Selection - Tribeca Film Festival 2025",
  },
  {
    id: "chroma-couture",
    title: "CHROMA COUTURE",
    subtitle: "Global Runway & Campaign Direction",
    client: "Balenciaga Paris",
    category: "commercial",
    categoryLabel: "Commercial & Fashion Film",
    year: "2026",
    aspectRatio: "16/9",
    coverImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=1200&q=85",
    ],
    director: "Julien Mercer",
    dop: "Godwin A.",
    gearUsed: "ARRI Mini LF & Master Primes",
    description:
      "Fast-paced visual velocity capturing winter fashion week in Paris. Saturated silhouettes, strobe reflections, and handheld hyper-kinetic camera operating.",
  },
];

export const SOCIAL_LINKS = [
  {
    platform: "Instagram",
    handle: "@gtacreative",
    url: "https://instagram.com",
    metrics: "128K Followers",
    highlight: "Daily photography selects & behind-the-scenes",
    color: "#E1306C",
  },
  {
    platform: "YouTube",
    handle: "GTA Cinema Studio",
    url: "https://youtube.com",
    metrics: "45K Subscribers",
    highlight: "4K Showreels, Director breakdown cuts & LUT tutorials",
    color: "#FF0000",
  },
  {
    platform: "Vimeo",
    handle: "vimeo.com/gtacreative",
    url: "https://vimeo.com",
    metrics: "Staff Pick Winner",
    highlight: "Uncompressed master cinematography & festival shorts",
    color: "#1AB7EA",
  },
  {
    platform: "TikTok",
    handle: "@gtastudios",
    url: "https://tiktok.com",
    metrics: "2.4M Likes",
    highlight: "Lighting setups, camera rigging & speed edits",
    color: "#00F2FE",
  },
  {
    platform: "X / Twitter",
    handle: "@gtacreative",
    url: "https://x.com",
    metrics: "18.2K Follows",
    highlight: "Industry musings, festival announcements & production drops",
    color: "#ffffff",
  },
  {
    platform: "LinkedIn",
    handle: "GTA Creative Agency",
    url: "https://linkedin.com",
    metrics: "Production Network",
    highlight: "Commercial contracts, agency partnerships & RFP bidding",
    color: "#0A66C2",
  },
];

export const CONTACT_INFO = {
  primaryEmail: "contact@gtacreative.agency",
  secondaryEmail: "bookings@gtacreative.agency",
  phone: "+1 (310) 844-9210",
  locations: ["Los Angeles, California", "London, UK", "Paris, France"],
  representation: "Represented globally by Creative Artists Agency (CAA)",
};
