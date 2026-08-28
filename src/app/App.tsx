import { useState, useEffect } from "react";
import bpclLogo from "../imports/bpcl_logo.jpeg";
import pgpmciLogo from "../imports/PGPMCI_New_Logo2.png";
import pgpmciLogo1 from "../imports/PGPMCI_New_Logo1.png";
import iimvLogo from "../imports/image-1.png";
import iimvFooterLogo from "../imports/image-2.png";
import iimvNavLogo from "../imports/image-3.png";
import campusImg from "../imports/image.png";
import energyImg from "../imports/image-5.png";
import urjaImg from "../imports/final2_atmanirbhar.png";
import iimvNavbarLogo from "../imports/image-6.png";
import { ChevronDown, Award, Calendar, Users, Target, ArrowRight, CheckCircle, X, Menu, Flame, Battery, Gem, RotateCcw } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Organized By", href: "#organizers" },
  { label: "Themes", href: "#themes" },
  { label: "Structure", href: "#structure" },
  { label: "Timeline", href: "#timeline" },
  { label: "Team", href: "#team" },
];

const THEMES = [
  {
    id: 1,
    icon: Flame,
    title: "Hard-to-Abate Decarbonization",
    subtitle: "Solving India's Industrial Emissions",
    tagline: "Innovations to decarbonize steel, cement, fertilizers, and refining — India's industrial backbone",
    balance: "60% Technology / 40% Management",
    color: "from-orange-50 to-amber-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-600",
    problems: [
      "Techno-economic models for green hydrogen blending in steel & fertilizer production",
      "Carbon capture & utilization (CCU) — converting CO₂ into building materials or synthetic fuels",
      "Alternative low-carbon fuels for cement kilns (bio-CNG, green hydrogen, biomass)",
      "Waste heat recovery and circular energy systems for refineries",
      "Business models for commercially viable green steel, cement, and fertilizers",
    ],
  },
  {
    id: 2,
    icon: Battery,
    title: "Energy Storage & Grid Resilience",
    subtitle: "Powering India 24/7",
    tagline: "Scalable solutions for storage, grid stability, and round-the-clock renewable power",
    balance: "50% Technology / 50% Management",
    color: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    problems: [
      "Alternative battery chemistries for Indian conditions (sodium-ion, zinc-air, iron-flow)",
      "Business models for utility-scale battery storage — revenue stacking & arbitrage",
      "Vehicle-to-Grid (V2G) models enabling EV owners to sell power back to the grid",
      "AI/ML forecasting for renewable energy output and grid dispatch optimization",
      "Decentralized microgrids with storage for rural and off-grid communities",
    ],
  },
  {
    id: 3,
    icon: Gem,
    title: "Critical Minerals & Circular Economy",
    subtitle: "Securing India's Raw Material Future",
    tagline: "Innovations in sourcing, recycling, and supply chain resilience for energy transition materials",
    balance: "40% Technology / 60% Management",
    color: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    problems: [
      "Urban mining models — recovering lithium, cobalt, and rare earths from e-waste",
      "AI-driven supply chain risk dashboards for critical mineral availability",
      "Business models for battery recycling, refurbishment, and second-life applications",
      "Alternative materials — reducing cobalt dependency and rare earth use in motors",
      "Circular economy solutions for end-of-life solar panels and wind turbine blades",
    ],
  },
];

const PHASES = [
  {
    num: "01",
    title: "Registration",
    period: "September – October 2026",
    bullets: [
      "Target: 500+ teams (1,000+ students)",
      "One-slide idea submission",
      "Digital campaigns across 120+ CFTIs",
    ],
  },
  {
    num: "02",
    title: "Evaluation & Shortlisting",
    period: "November 2026",
    bullets: [
      "Top 90 teams shortlisted",
      "Detailed pitch deck (6 slide presentation on the below mentioned evaluation criterion) and video submission (5 minutes max.)",
      "Mentorship webinar with IIMV faculty & BPCL leaders",
    ],
  },
  {
    num: "03",
    title: "Grand Finale at IIMV",
    period: "23 January 2027",
    bullets: [
      "30 finalist teams (60 students)",
      "One-day event with keynote sessions & presentations",
      "Industry jury and BPCL leadership participation",
    ],
  },
];

const CRITERIA = [
  { label: "Innovation & Originality", weight: 30, desc: "Novelty of the idea — does it offer a fresh, non-obvious solution?" },
  { label: "Impact & Scalability", weight: 25, desc: "Environmental, economic, and strategic impact. Can it scale across India?" },
  { label: "Technical Feasibility", weight: 20, desc: "Is the solution technically sound and implementable with current technology?" },
  { label: "Business Viability", weight: 15, desc: "Clear, sustainable business model with a path to commercial adoption." },
  { label: "Presentation & Clarity", weight: 10, desc: "How clearly is the idea communicated? Is the pitch compelling?" },
];

const PRIZES = [
  { title: "Overall Grand Winner", amount: "₹75,000", highlight: true },
  { title: "Theme Winner × 3", amount: "₹25,000 each", highlight: false },
  { title: "Theme Runner-Up × 3", amount: "₹10,000 each", highlight: false },
];

const TIMELINE = [
  { milestone: "Announcement", date: "August 2026", done: true },
  { milestone: "Phase 1: Registration Opens", date: "September 2026", done: false },
  { milestone: "Phase 1: Registration Closes", date: "October 2026", done: false },
  { milestone: "Phase 2: Evaluation & Shortlisting", date: "November 2026", done: false },
  { milestone: "Grand Finale", date: "23 January 2027", done: false },
];

const ORGANIZERS = [
  { name: "Prof. M. Shameem Jawed", role: "PGPMCI Chair", initials: "SJ", linkedin: "https://www.linkedin.com/in/m-shameem-jawed-67495221/" },
  { name: "Asuthosh Brahma", role: "Administrative Officer", initials: "AB", linkedin: "https://www.linkedin.com/in/abrahma88/" },
];

const LEADS = [
  { name: "Pavan S",       initials: "PS", linkedin: "https://www.linkedin.com/in/pavan-shanmuganathan/" },
  { name: "Nishtha Biswas", initials: "NB", linkedin: "https://www.linkedin.com/in/nishtha-biswas-4b4378176/" },
  { name: "Nikhil Jindal",  initials: "NJ", linkedin: "https://www.linkedin.com/in/nikhil-jindal-06521b26b/" },
];

const VOLUNTEERS: { name: string; initials: string; team: string; linkedin: string | null }[] = [
  { name: "Ananda Parida",           initials: "AP", team: "Creative & Design Team", linkedin: "https://www.linkedin.com/in/ananda-parida-924bb2176/" },
  { name: "Chittaranjan Dutta",      initials: "CD", team: "Operations Team",        linkedin: "https://www.linkedin.com/in/chittaranjan-dutta/" },
  { name: "Kambam Taibangnganba",    initials: "KT", team: "Operations Team",        linkedin: "https://www.linkedin.com/in/kambam-taibangnganba-484a521a8/" },
  { name: "Sachin Chauhan",          initials: "SC", team: "Operations Team",        linkedin: "https://www.linkedin.com/in/sachin-chauhan-212631297/" },
  { name: "Arush Raman",             initials: "AR", team: "Operations Team",        linkedin: "https://www.linkedin.com/in/arush-raman-6890a9432/" },
  { name: "Adrika Sahu",             initials: "AS", team: "Operations Team",        linkedin: "https://www.linkedin.com/in/adrikasahu/" },
  { name: "Sneha Kumar",             initials: "SK", team: "Creative & Design Team", linkedin: "https://www.linkedin.com/in/sneha-6336262b5/" },
  { name: "Stutika Shourya",         initials: "SS", team: "Operations Team",        linkedin: "https://www.linkedin.com/in/stutikashourya/" },
  { name: "Aaron Gari",              initials: "AG", team: "Creative & Design Team", linkedin: "https://www.linkedin.com/in/aaron-gari-522289281/" },
  { name: "Sagnik Dutta Gupta",      initials: "SD", team: "Outreach Team",          linkedin: "https://www.linkedin.com/in/sagnik-dutta-gupta-6a2755181/" },
  { name: "Pankaj Bhagat",           initials: "PK", team: "Outreach Team",          linkedin: "https://www.linkedin.com/in/pankaj25882/" },
  { name: "Parupalli Shivani Naidu", initials: "PS", team: "Operations Team",        linkedin: "https://www.linkedin.com/in/parupalli-shivani-naidu-7a23b7358/" },
  { name: "Amoolya Kondru",          initials: "AK", team: "Creative & Design Team", linkedin: "https://www.linkedin.com/in/amoolya-kondru-1b2157184/" },
  { name: "Abhishek Narayan Verma",  initials: "AN", team: "Outreach Team",          linkedin: "https://www.linkedin.com/in/abhishek-narayan-verma-00b0573b6/" },
  { name: "V Vanya Reddy",           initials: "VV", team: "Creative & Design Team", linkedin: "https://www.linkedin.com/in/vajjhala-vanya-reddy-005814254/" },
  { name: "Nishant Giri",            initials: "NG", team: "Outreach Team",          linkedin: "https://www.linkedin.com/in/nishant-giri-8b441121b/" },
];

const MEMBER_PHOTOS: Record<string, string> = {
  "Nishtha Biswas":          "https://i.postimg.cc/pyF3Cy07/20260820-121056-3-Nishtha-Bisw-as.jpg",
  "Pavan S":                 "https://i.postimg.cc/RqM1gZLS/pavan-new.jpg",
  "Nikhil Jindal":           "https://i.postimg.cc/PPb9G9nT/Nikhil-Jindal-Nikhil-Jindal.jpg",
  "Adrika Sahu":             "https://i.postimg.cc/jC7BcC8M/1718775311365-Adrika-sahu.jpg",
  "Aaron Gari":              "https://i.postimg.cc/gLkvjg25/Aaron-Gari-new.jpg",
  "Abhishek Narayan Verma":  "https://i.postimg.cc/V5C2g57R/A-N-VERMA-ABHISHEK-NARAYAN-VERMA.jpg",
  "Ananda Parida":           "https://i.postimg.cc/c6nPh6DD/Ananda-Ananda-parida.jpg",
  "Arush Raman":             "https://i.postimg.cc/ppM46x4t/Arush-Raman-Photo-(2)-Arush-Raman.png",
  "Chittaranjan Dutta":      "https://i.postimg.cc/JGCv2mvC/Chat-GPT-Image-Aug-27-2026-06-32-03-PM-Chittaranjan-Dutta.png",
  "Amoolya Kondru":          "https://i.postimg.cc/MvJNFxN2/e0ef9374-f2a6-4422-a7e8-f9a7c65badde-KONDRU-AMOOLYA.jpg",
  "Stutika Shourya":         "https://i.postimg.cc/1f12jP24/IMG-20260827-WA0132-Stutika-Shourya.jpg",
  "Sneha Kumar":             "https://i.postimg.cc/CzpXQYXx/IMG-4544-Sneha-Kumar.png",
  "V Vanya Reddy":           "https://i.postimg.cc/LnFwbRwm/IMG-6389-V-Vanya-Reddy.jpg",
  "Kambam Taibangnganba":    "https://i.postimg.cc/8jg90D9j/KT-PP-Kambam-Taibangnganba.png",
  "Pankaj Bhagat":           "https://i.postimg.cc/svPqFqC2/pic1-Pankaj-Bhagat.png",
  "Sagnik Dutta Gupta":      "https://i.postimg.cc/RN1yryxM/Sagnik-Photo-SAGNIK-DUTTA-GUPTA.jpg",
  "Parupalli Shivani Naidu": "https://i.postimg.cc/gnyQ9QbX/Whats-App-Image-2026-08-27-at-19-33-13-shivaninaidu-parupalli.jpg",
  "Sachin Chauhan":          "https://i.postimg.cc/HV1RhHRY/IMG-20260627-014301-CS.png",
  "Nishant Giri":            "https://i.postimg.cc/BXfkVskb/IMG-20260827-WA0117-Fiziks-Rock.jpg",
  "Prof. M. Shameem Jawed":  "https://i.postimg.cc/xNQrM2SX/shameem-sir-jpg.jpg",
  "Asuthosh Brahma":         "https://i.postimg.cc/q6xPG5kk/a-brahma-jpg.jpg",
};

const TEAM_META: Record<string, { ring: string; text: string; badge: string }> = {
  "Creative & Design Team": { ring: "ring-amber-400/30",   text: "text-amber-400",   badge: "border-amber-400/25 bg-amber-400/10 text-amber-400" },
  "Operations Team":        { ring: "ring-sky-400/30",     text: "text-sky-400",     badge: "border-sky-400/25 bg-sky-400/10 text-sky-400" },
  "Outreach Team":          { ring: "ring-emerald-400/30", text: "text-emerald-400", badge: "border-emerald-400/25 bg-emerald-400/10 text-emerald-400" },
};

const LI_SVG = <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0);
  const [prizeExpanded, setPrizeExpanded] = useState(false);
  const [audienceFlipped, setAudienceFlipped] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-[Inter,sans-serif] text-foreground">
      {/* ── NAV ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="w-full px-6 md:px-10 xl:px-16 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src={iimvNavbarLogo}
              alt="IIM Visakhapatnam"
              className="h-10 w-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-4 h-full">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="relative h-16 px-4 text-[#0F1E3C]/70 hover:text-[#0F1E3C] text-base font-medium transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0F1E3C] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("#apply")}
            className="hidden md:block bg-[#C4912A] hover:bg-[#A87820] text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
          >
            Register Now
          </button>

          <button
            className="md:hidden text-[#0F1E3C] p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#0F1E3C]/10 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[#0F1E3C]/70 hover:text-[#0F1E3C] text-sm font-medium text-left transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#apply")}
              className="bg-[#C4912A] text-white text-sm font-semibold px-5 py-2 rounded text-left"
            >
              Register Now
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-12"
      >
        {/* Campus background image at 75% opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${campusImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 1,
          }}
        />
        {/* Deep navy overlay to keep foreground text legible */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(8,14,32,0.88) 0%, rgba(10,22,48,0.82) 40%, rgba(15,30,60,0.78) 70%, rgba(20,40,72,0.80) 100%)",
          }}
        />
        {/* subtle gold grid texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(196,145,42,0.4) 60px, rgba(196,145,42,0.4) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(196,145,42,0.4) 60px, rgba(196,145,42,0.4) 61px)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* logos row */}
          <div className="flex items-center justify-center gap-6 mb-5">
            <div className="flex flex-col items-center gap-1">
              <div className="rounded-xl flex items-center justify-center" style={{ width: 120, height: 76, background: "radial-gradient(ellipse at center, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0.22) 55%, transparent 85%)" }}>
                <img
                  src={pgpmciLogo}
                  alt="PGPMCI – IIM Visakhapatnam"
                  className="w-full h-full object-fill drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                />
              </div>
              <div className="text-white/50 text-xs tracking-wider">Organized by</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col items-center gap-1">
              <div className="rounded-xl flex items-center justify-center" style={{ width: 120, height: 76, background: "radial-gradient(ellipse at center, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0.22) 55%, transparent 85%)" }}>
                <img
                  src={bpclLogo}
                  alt="Bharat Petroleum (BPCL)"
                  className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                />
              </div>
              <div className="text-white/50 text-xs tracking-wider">Supported by</div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white text-xs font-semibold tracking-widest uppercase">
              Registrations Open · September 2026
            </span>
          </div>

          <h1
            className="text-white mb-4 leading-tight"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 700,
            }}
          >
            <span className="text-[#C4912A]">Atmanirbhar Urja: Forging
            <br />
            India's Sovereign Energy
            <br />
            Future</span>
          </h1>

          <p
            className="text-white/80 mb-2 text-xl font-bold italic tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.01em" }}
          >
            National Techno-Managerial Ideathon & Leadership Conference 2026–27
          </p>

          <p className="text-base mb-10 tracking-wide font-semibold" style={{ color: "#E8A830" }}>
            Organized by PGPMCI Batch 2026–28 · IIM Visakhapatnam
          </p>

          {/* stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { val: "₹1.8L", label: "Prize Pool" },
              { val: "500+", label: "Teams Expected" },
              { val: "120+", label: "Institutions (CFTIs - INIs)" },
              { val: "23 Jan", label: "Grand Finale" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-white/10 rounded-lg py-4 px-3 bg-white/5 backdrop-blur-sm"
              >
                <div
                  className="text-[#C4912A] font-bold text-2xl"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  {s.val}
                </div>
                <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("#apply")}
              className="bg-[#C4912A] hover:bg-[#A87820] text-white font-semibold px-8 py-3.5 rounded flex items-center gap-2 transition-colors text-base"
            >
              Register Now <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo("#about")}
              className="border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded transition-colors text-base"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Left — text content */}
            <div className="flex flex-col">
              <span className="text-[#C4912A] text-xs font-semibold tracking-widest uppercase">About the Event</span>
              <h2
                className="mt-3 mb-6 text-foreground leading-tight"
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}
              >
                A National Platform for
                <br />Energy Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The BPCL–IIM Visakhapatnam National Techno-Managerial Ideathon is a flagship competition that
                brings together the brightest engineering minds from IITs, NITs, IIITs, and premier institutions
                across India to solve India's most pressing energy challenges.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Co-organized by the PGPMCI batch of IIM Visakhapatnam and supported by Bharat Petroleum
                Corporation Limited, this event bridges academia and industry to forge
                India's sovereign energy future.
              </p>
              <div className="space-y-3">
                {[
                  "Identify future techno-managerial leaders for India's energy sector",
                  "Build a high-quality talent pipeline for BPCL and the industry",
                  "Engage 1,000+ students from 120+ premier engineering institutions",
                  "Strengthen BPCL's positioning in energy transition and innovation",
                ].map((obj) => (
                  <div key={obj} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C4912A] mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — cards + image */}
            <div className="self-stretch flex flex-col">
              <div className="flex-1" />
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Target Audience", value: "IITs, NITs, IIITs & (CFTIs - INIs)" },
                  { icon: Award, label: "Total Prize Pool", value: "₹1,80,000" },
                  { icon: Calendar, label: "Grand Finale", value: "23 January 2027" },
                  { icon: Target, label: "Teams Targeted", value: "500+ teams" },
                ].map((card) => {
                  const isPrize = card.label === "Total Prize Pool";
                  if (isPrize) {
                    return (
                      <div key={card.label} style={{ perspective: "900px" }}>
                        <div
                          className="relative"
                          style={{
                            transformStyle: "preserve-3d",
                            transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: prizeExpanded ? "rotateY(180deg)" : "rotateY(0deg)",
                          }}
                        >
                          {/* ── FRONT ── */}
                          <div
                            className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between hover:shadow-md cursor-pointer"
                            style={{ backfaceVisibility: "hidden" }}
                            onClick={() => setPrizeExpanded(true)}
                          >
                            <div className="flex items-start justify-between">
                              <card.icon size={26} className="text-[#C4912A]" />
                              <RotateCcw size={12} className="text-muted-foreground mt-1 opacity-60" />
                            </div>
                            <div className="mt-auto pt-5">
                              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{card.label}</div>
                              <div className="text-foreground font-semibold text-sm">{card.value}</div>
                            </div>
                          </div>
                          {/* ── BACK ── */}
                          <div
                            className="absolute inset-0 bg-card border border-[#C4912A]/30 rounded-xl p-5 flex flex-col cursor-pointer"
                            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                            onClick={() => setPrizeExpanded(false)}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <p className="text-[10px] text-[#C4912A] uppercase tracking-widest font-semibold">Prize Distribution</p>
                              <RotateCcw size={12} className="text-muted-foreground opacity-60 scale-x-[-1]" />
                            </div>
                            <div className="border-t border-border mb-3" />
                            <table className="w-full text-xs mt-auto">
                              <tbody>
                                {[
                                  { cat: "Overall Grand Winner",   amt: "₹75,000" },
                                  { cat: "Three Theme Winners",    amt: "₹75,000" },
                                  { cat: "Three Theme Runners-Up", amt: "₹30,000" },
                                ].map((row) => (
                                  <tr key={row.cat}>
                                    <td className="text-muted-foreground py-0.5 pr-2 text-left leading-snug">{row.cat}</td>
                                    <td className="text-foreground font-semibold py-0.5 text-right tabular-nums whitespace-nowrap">{row.amt}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  if (card.label === "Target Audience") {
                    return (
                      <div key={card.label} style={{ perspective: "900px" }}>
                        <div
                          className="relative"
                          style={{
                            transformStyle: "preserve-3d",
                            transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                            transform: audienceFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                          }}
                        >
                          {/* ── FRONT ── */}
                          <div
                            className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between hover:shadow-md cursor-pointer"
                            style={{ backfaceVisibility: "hidden" }}
                            onClick={() => setAudienceFlipped(true)}
                          >
                            <div className="flex items-start justify-between">
                              <card.icon size={26} className="text-[#C4912A]" />
                              <RotateCcw size={12} className="text-muted-foreground mt-1 opacity-60" />
                            </div>
                            <div className="mt-auto pt-5">
                              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{card.label}</div>
                              <div className="text-foreground font-semibold text-sm">{card.value}</div>
                            </div>
                          </div>
                          {/* ── BACK ── */}
                          <div
                            className="absolute inset-0 bg-card border border-[#C4912A]/30 rounded-xl p-5 flex flex-col cursor-pointer"
                            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                            onClick={() => setAudienceFlipped(false)}
                          >
                            <div className="flex items-start justify-between mb-3">
                              <p className="text-[10px] text-[#C4912A] uppercase tracking-widest font-semibold">Eligible Programmes</p>
                              <RotateCcw size={12} className="text-muted-foreground opacity-60 scale-x-[-1]" />
                            </div>
                            <div className="border-t border-border mb-4" />
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-auto">
                              {["B.Tech", "M.Tech", "B.Arch", "M.Arch"].map((prog) => (
                                <div key={prog} className="text-foreground font-semibold text-sm text-center">
                                  {prog}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={card.label}
                      className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <card.icon size={26} className="text-[#C4912A]" />
                      <div className="mt-auto pt-5">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{card.label}</div>
                        <div className="text-foreground font-semibold text-sm">{card.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 w-full overflow-hidden rounded-[14px] border border-[#C4912A]/30 bg-[#C4912A]/40 flex items-center justify-center">
                <img
                  src={urjaImg}
                  alt="Atmanirbhar Urja"
                  className="h-[120px] w-auto object-contain object-center rounded-[13px] transition-colors duration-300 [mix-blend-mode:multiply]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORGANIZED BY ── */}
      <section id="organizers" className="py-24 px-6 bg-[#080F1E] relative overflow-hidden">
        {/* decorative radial glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #C4912A 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #C4912A 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#C4912A] text-xs font-semibold tracking-widest uppercase">The Alliance Behind the Vision</span>
            <h2
              className="mt-3 text-white"
              style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}
            >
              Organized By
            </h2>
            <p className="text-white/40 mt-3 text-sm max-w-xl mx-auto">
              A collaboration between India's premier management institution and its largest public-sector energy corporation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* IIMV / PGPMCI card */}
            <div className="group relative flex flex-col items-center text-center border border-white/10 rounded-2xl px-8 py-10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 hover:border-[#C4912A]/30">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 60px rgba(196,145,42,0.06)" }} />
              <div className="mb-8 w-56 h-32 flex items-center justify-center">
                <img
                  src={pgpmciLogo1}
                  alt="PGPMCI – IIM Visakhapatnam"
                  className="w-full h-full object-contain object-center rounded-xl bg-white p-2 drop-shadow-[0_0_24px_rgba(196,145,42,0.25)] group-hover:drop-shadow-[0_0_36px_rgba(196,145,42,0.40)] transition-all duration-500"
                />
              </div>
              <div className="w-12 h-px bg-[#C4912A]/40 mb-6" />
              <h3
                className="text-white text-xl font-bold mb-1"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                IIM Visakhapatnam
              </h3>
              <p className="text-[#C4912A] text-xs font-semibold tracking-wider uppercase mb-4">PGPMCI Batch 2026–28</p>
              <p className="text-white/35 text-xs leading-relaxed max-w-xs">
                PGPMCI at IIM Visakhapatnam is an innovative management programme designed for engineering and technology students and recent graduates, equipping participants to complement their technical expertise with leadership, entrepreneurship, and business decision-making through flexible, modular learning, active industry engagement, and immersive campus experiences.
              </p>
            </div>

            {/* BPCL card */}
            <div className="group relative flex flex-col items-center text-center border border-white/10 rounded-2xl px-8 py-10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 hover:border-[#C4912A]/30">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 60px rgba(196,145,42,0.06)" }} />
              <div className="mb-8 w-56 h-32 flex items-center justify-center">
                <img
                  src={bpclLogo}
                  alt="Bharat Petroleum Corporation Limited"
                  className="w-full h-full object-contain rounded-xl bg-white p-1 drop-shadow-[0_0_24px_rgba(196,145,42,0.25)] group-hover:drop-shadow-[0_0_36px_rgba(196,145,42,0.40)] transition-all duration-500"
                />
              </div>
              <div className="w-12 h-px bg-[#C4912A]/40 mb-6" />
              <h3
                className="text-white text-xl font-bold mb-1"
                style={{ fontFamily: "'EB Garamond', serif" }}
              >
                Bharat Petroleum
              </h3>
              <p className="text-[#C4912A] text-xs font-semibold tracking-wider uppercase mb-4">Supported By</p>
              <p className="text-white/35 text-xs leading-relaxed max-w-xs">
                Bharat Petroleum Corporation Limited is one of India's largest public-sector energy majors, spanning refining, distribution, and renewables. Through its CSR initiatives, BPCL actively invests in nurturing innovation and talent to accelerate India's transition to a clean, sovereign energy future.
              </p>
            </div>
          </div>

          {/* joint tagline bar */}
          <div className="mt-10 border border-[#C4912A]/20 rounded-xl px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 bg-[#C4912A]/5">
            <span className="w-2 h-2 rounded-full bg-[#C4912A] shrink-0 animate-pulse" />
            <p
              className="text-[#C4912A]/80 text-sm text-center italic"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              "Bridging the worlds of management excellence and energy innovation — together, forging Atmanirbhar Urja."
            </p>
          </div>
        </div>
      </section>

      {/* ── THEMES ── */}
      <section id="themes" className="py-24 px-6 bg-[#0F1E3C]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#C4912A] text-sm font-semibold tracking-widest uppercase">Competition Themes</span>
            <h2
              className="mt-3 text-white"
              style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}
            >
              Three Tracks. One Mission.
            </h2>
            <p className="text-white/50 mt-3 max-w-2xl mx-auto text-sm">
              Choose your theme and propose breakthrough solutions to India's most critical energy challenges.
            </p>
          </div>

          {/* theme tabs */}
          <div className="flex flex-col sm:flex-row gap-2 mb-8 justify-center -mt-5">
            {THEMES.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTheme(i)}
                className={`px-4 py-2.5 rounded text-sm font-medium transition-all text-left sm:text-center ${
                  activeTheme === i
                    ? "bg-[#C4912A] text-white"
                    : "border border-white/20 text-white/60 hover:text-white hover:border-white/40"
                }`}
              >
                <span className="block text-xs opacity-70 mb-0.5">Theme {t.id}</span>
                <span className="block leading-tight">{t.subtitle}</span>
              </button>
            ))}
          </div>

          {THEMES.map((theme, i) =>
            activeTheme === i ? (
              <div key={theme.id} className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#C4912A]/20 flex items-center justify-center">
                        <theme.icon size={20} className="text-[#C4912A]" />
                      </div>
                      <span className="text-[#C4912A] text-sm font-mono tracking-wider">THEME {theme.id}</span>
                    </div>
                    <h3
                      className="text-white text-2xl font-bold mb-2"
                      style={{ fontFamily: "'EB Garamond', serif" }}
                    >
                      {theme.title}
                    </h3>
                    <p className="text-white/50 italic text-sm mb-6">{theme.tagline}</p>
                    <div className="inline-flex items-center gap-2 bg-[#C4912A]/15 border border-[#C4912A]/30 rounded-full px-4 py-1.5">
                      <span className="text-[#C4912A] text-xs font-semibold">Balance: {theme.balance}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/70 text-xs uppercase tracking-wider font-semibold mb-4">
                      Example Problem Areas
                    </h4>
                    <ul className="space-y-3">
                      {theme.problems.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C4912A] mt-2 shrink-0" />
                          <span className="text-white/70 text-sm leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      {/* ── COMPETITION STRUCTURE ── */}
      <section id="structure" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#C4912A] text-xs font-semibold tracking-widest uppercase">Competition Structure</span>
            <h2
              className="mt-3 text-foreground"
              style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}
            >
              Three Phases to the Finale
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-[#C4912A]/30" />
            {PHASES.map((phase, i) => (
              <div key={phase.num} className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div
                  className="text-6xl font-black text-[#C4912A]/25 absolute top-4 right-6"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  {phase.num}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0F1E3C] flex items-center justify-center mb-4">
                  <span className="text-[#C4912A] text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-1">{phase.title}</h3>
                <p className="text-sm font-mono font-semibold mb-5" style={{ color: "#8B6010" }}>{phase.period}</p>
                <ul className="space-y-2">
                  {phase.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C4912A] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Evaluation Criteria */}
          <div className="mt-11">
            <h3
              className="text-foreground font-bold text-xl mb-8 text-center"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Evaluation Criteria
            </h3>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Desktop table header */}
              <div className="hidden md:grid grid-cols-12 bg-[#0F1E3C] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3">
                <div className="col-span-4">Criteria</div>
                <div className="col-span-2 text-center">Weight</div>
                <div className="col-span-6">Description</div>
              </div>
              {CRITERIA.map((c, i) => (
                <div
                  key={c.label}
                  className={`${i !== CRITERIA.length - 1 ? "border-b border-border" : ""}`}
                >
                  {/* Desktop row */}
                  <div className="hidden md:grid grid-cols-12 px-6 py-4 items-center gap-2">
                    <div className="col-span-4 text-foreground font-medium text-sm">{c.label}</div>
                    <div className="col-span-2 text-center">
                      <span className="inline-block bg-[#C4912A]/15 text-[#C4912A] font-bold text-sm px-3 py-1 rounded-full">
                        {c.weight}%
                      </span>
                    </div>
                    <div className="col-span-6 text-muted-foreground text-sm">{c.desc}</div>
                  </div>
                  {/* Mobile card */}
                  <div className="md:hidden px-5 py-4 flex items-start gap-4">
                    <span className="shrink-0 mt-0.5 bg-[#C4912A]/15 text-[#C4912A] font-bold text-sm px-2.5 py-1 rounded-full">
                      {c.weight}%
                    </span>
                    <div>
                      <div className="text-foreground font-semibold text-sm mb-1">{c.label}</div>
                      <div className="text-muted-foreground text-xs leading-relaxed">{c.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIZES ── */}

      {/* ── TIMELINE ── */}
      <section id="timeline" className="py-14 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[#C4912A] text-xs font-semibold tracking-widest uppercase">Road Map</span>
            <h2
              className="mt-3 text-foreground"
              style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}
            >
              Key Milestones
            </h2>
          </div>

          {(() => {
            const now = new Date();
            // Threshold dates — the milestone becomes "active" once we reach this date
            const thresholds = [
              new Date("2026-08-01"), // Announcement
              new Date("2026-09-01"), // Phase 1 Opens
              new Date("2026-10-01"), // Phase 1 Closes
              new Date("2026-11-01"), // Phase 2 Evaluation & Shortlisting
              new Date("2027-01-23"), // Grand Finale
            ];
            // activeIndex = first milestone whose threshold hasn't passed yet (currently in progress)
            // all indices before it are "done", activeIndex is "current", rest are "upcoming"
            const activeIndex = thresholds.findIndex(d => d > now);
            // If all dates are past, every milestone is done
            const currentIndex = activeIndex === -1 ? thresholds.length - 1 : activeIndex;

            return (
              <div className="relative">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />
                <div className="space-y-5">
                  {TIMELINE.map((item, i) => {
                    // A milestone is "current" if today is between its start and the next milestone's start
                    // It is "done" only once the NEXT milestone's threshold has passed
                    const now2 = new Date();
                    const milestoneStarts = [
                      new Date("2026-08-01"),
                      new Date("2026-09-01"),
                      new Date("2026-10-01"),
                      new Date("2026-11-01"),
                      new Date("2027-01-23"),
                    ];
                    const next = milestoneStarts[i + 1];
                    const isDone = next ? now2 >= next : false;
                    const isCurrent = now2 >= milestoneStarts[i] && (!next || now2 < next);
                    return (
                      <div
                        key={item.milestone}
                        className={`relative flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                      >
                        {/* Dot */}
                        <div
                          className={`absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center rounded-full border-2 transition-all ${
                            isDone
                              ? "w-3 h-3 border-[#C4912A] bg-[#C4912A]"
                              : isCurrent
                              ? "w-4 h-4 border-[#C4912A] bg-background ring-4 ring-[#C4912A]/20"
                              : "w-3 h-3 border-white/30 bg-background"
                          }`}
                        >
                          {isCurrent && (
                            <span className="w-2 h-2 rounded-full bg-[#C4912A] animate-pulse" />
                          )}
                        </div>

                        {/* Card */}
                        <div
                          className={`ml-14 md:ml-0 md:w-5/12 rounded-lg px-5 py-3 border transition-all ${
                            i % 2 === 0 ? "md:mr-auto md:ml-0" : "md:ml-auto md:mr-0"
                          } ${
                            isDone
                              ? "bg-card border-border opacity-60"
                              : isCurrent
                              ? "bg-card border-[#C4912A] shadow-md shadow-[#C4912A]/10"
                              : "bg-card border-border"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-0.5">
                            <div className="text-[#C4912A] text-xs font-mono">{item.date}</div>
                            {isCurrent && (
                              <span className="text-[10px] font-semibold bg-[#C4912A] text-white px-1.5 py-0.5 rounded-full leading-none">
                                NOW
                              </span>
                            )}
                            {isDone && (
                              <span className="text-[10px] font-semibold text-[#C4912A]/70 leading-none">✓ Done</span>
                            )}
                          </div>
                          <div className={`font-semibold text-sm ${isCurrent ? "text-foreground" : isDone ? "text-muted-foreground" : "text-foreground"}`}>
                            {item.milestone}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Travel Assistance callout */}
        <div className="max-w-2xl mx-auto mt-14 rounded-xl border border-[#C4912A]/25 bg-[#C4912A]/8 px-7 py-5 flex gap-4 items-start">
          <div className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-[#C4912A]/15 flex items-center justify-center">
            <ArrowRight size={14} className="text-[#C4912A]" />
          </div>
          <div>
            <p className="text-[#C4912A] text-xs font-bold tracking-widest uppercase mb-1">Travel Assistance for Finalists</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Each team member of the <span className="text-foreground font-medium">30 finalist teams</span> will receive{" "}
              <span className="text-foreground font-medium">₹1,000</span> towards travel expenses to attend the Grand Finale at IIM Visakhapatnam.
            </p>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-24 px-6 bg-[#080F1E] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none opacity-[0.035]" style={{ background: "radial-gradient(ellipse at center, #C4912A 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">

          <div className="text-center mb-16">
            <span className="text-[#C4912A] text-xs font-semibold tracking-widest uppercase">PGPMCI Batch 2026–28 · IIM Visakhapatnam</span>
            <h2 className="mt-3 text-white" style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700 }}>
              Meet the Team
            </h2>
            <p className="text-white/40 mt-3 text-sm max-w-lg mx-auto">
              The passionate students and faculty from IIM Visakhapatnam bringing this vision to life.
            </p>
          </div>

          {/* Organizers */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[#C4912A] text-[10px] font-bold tracking-[0.2em] uppercase px-1">Organizers</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="flex flex-wrap justify-evenly gap-y-10">
              {ORGANIZERS.map((p) => (
                <div key={p.name} className="flex flex-col items-center text-center w-64">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full ring-2 ring-[#C4912A]/50 bg-[#C4912A]/10 flex items-center justify-center overflow-hidden" style={{ boxShadow: "0 0 32px rgba(196,145,42,0.18)" }}>
                      {MEMBER_PHOTOS[p.name]
                        ? <img src={MEMBER_PHOTOS[p.name]} alt={p.name} className="w-full h-full object-cover" />
                        : <span className="text-[#C4912A] text-2xl font-bold" style={{ fontFamily: "'EB Garamond', serif" }}>{p.initials}</span>
                      }
                    </div>
                    <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#0077B5] hover:bg-[#005f91] rounded-full flex items-center justify-center shadow-lg transition-colors" aria-label="LinkedIn">
                      {LI_SVG}
                    </a>
                  </div>
                  <p className="text-white font-semibold text-sm leading-snug">{p.name}</p>
                  <p className="text-[#C4912A] text-xs mt-1">{p.role}</p>
                  <p className="text-white/30 text-[10px] mt-2">IIM Visakhapatnam</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Leads */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[#C4912A] text-[10px] font-bold tracking-[0.2em] uppercase px-1">Team Leads</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="flex flex-wrap justify-evenly gap-y-10">
              {LEADS.map((p) => (
                <div key={p.name} className="flex flex-col items-center text-center w-48">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full ring-2 ring-white/20 bg-white/5 flex items-center justify-center overflow-hidden">
                      {MEMBER_PHOTOS[p.name]
                        ? <img src={MEMBER_PHOTOS[p.name]} alt={p.name} className="w-full h-full object-cover" />
                        : <span className="text-white text-xl font-bold" style={{ fontFamily: "'EB Garamond', serif" }}>{p.initials}</span>
                      }
                    </div>
                    <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0077B5] hover:bg-[#005f91] rounded-full flex items-center justify-center shadow transition-colors" aria-label="LinkedIn">
                      {LI_SVG}
                    </a>
                  </div>
                  <p className="text-white font-semibold text-sm leading-snug">{p.name}</p>
                  <p className="text-[#C4912A] text-xs mt-1">Team Lead</p>
                  <p className="text-white/35 text-[10px] mt-2">PGPMCI Batch 2026–28</p>
                  <p className="text-white/25 text-[10px]">IIM Visakhapatnam</p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteers */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[#C4912A] text-[10px] font-bold tracking-[0.2em] uppercase px-1">Volunteers</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="space-y-14">
              {(["Creative & Design Team", "Operations Team", "Outreach Team"] as const).map((teamName) => {
                const members = VOLUNTEERS.filter((v) => v.team === teamName);
                const meta = TEAM_META[teamName];
                return (
                  <div key={teamName}>
                    <div className="flex justify-center mb-8">
                      <span className={`text-[10px] font-bold tracking-widest uppercase border rounded-full px-4 py-1.5 ${meta.badge}`}>
                        {teamName}
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-evenly gap-y-8">
                      {members.map((v) => (
                        <div key={v.name} className="flex flex-col items-center text-center w-36">
                          <div className="relative mb-3">
                            <div className={`w-16 h-16 rounded-full ring-1 ${meta.ring} bg-white/5 flex items-center justify-center overflow-hidden`}>
                              {MEMBER_PHOTOS[v.name]
                                ? <img src={MEMBER_PHOTOS[v.name]} alt={v.name} className="w-full h-full object-cover" />
                                : <span className={`text-base font-bold ${meta.text}`} style={{ fontFamily: "'EB Garamond', serif" }}>{v.initials}</span>
                              }
                            </div>
                            {v.linkedin && (
                              <a href={v.linkedin} target="_blank" rel="noopener noreferrer" className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0077B5] hover:bg-[#005f91] rounded-full flex items-center justify-center shadow transition-colors" aria-label="LinkedIn">
                                {LI_SVG}
                              </a>
                            )}
                          </div>
                          <p className="text-white/80 font-medium text-xs leading-snug">{v.name}</p>
                          <p className="text-white/30 text-[9px] mt-1.5">PGPMCI Batch 2026–28</p>
                          <p className="text-white/20 text-[9px]">IIM Visakhapatnam</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── CAMPUS AMBASSADOR ── */}
      <section id="apply" className="py-24 px-6 bg-[#0F1E3C]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-0 relative">

            {/* Vertical divider */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#C4912A]/25 to-transparent" />

            {/* ── LEFT: Campus Ambassador ── */}
            <div className="text-center md:pr-12 flex flex-col">
              <div className="flex-1">
                <span className="text-[#C4912A] text-xs font-semibold tracking-widest uppercase">Outreach Programme</span>
                <h2
                  className="mt-3 text-white whitespace-nowrap"
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.7rem)", fontWeight: 700 }}
                >
                  Campus Ambassador Registration
                </h2>
                <p className="text-white/50 mt-3 text-sm max-w-sm mx-auto leading-relaxed">
                  Be the face of The BPCL–IIM Visakhapatnam National Techno-Managerial Ideathon &amp; Leadership Conference 2026–27 at your institution. Ambassadors drive outreach, mobilise teams, and represent the spirit of Atmanirbhar Urja.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C4912A]/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4912A]/60" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C4912A]/40" />
              </div>

              <div className="mt-8 inline-block">
                <div className="relative rounded-2xl border border-[#C4912A]/30 bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(196,145,42,0.08)]">
                  <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C4912A]/60 rounded-tl-sm" />
                  <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C4912A]/60 rounded-tr-sm" />
                  <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C4912A]/60 rounded-bl-sm" />
                  <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C4912A]/60 rounded-br-sm" />
                  <div className="w-48 h-48 bg-white rounded-xl mx-auto overflow-hidden">
                    <img
                      src="https://i.postimg.cc/7h0ZGP3L/Screenshot-2026-08-28-005120.png"
                      alt="Campus Ambassador Registration QR"
                      className="w-full h-full object-cover"
                      style={{ transform: "scale(1.12)", transformOrigin: "center" }}
                    />
                  </div>
                  <p className="mt-5 text-[#C4912A] text-[11px] font-semibold tracking-widest uppercase">Scan to Register</p>
                </div>
              </div>

              <p className="mt-7 text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
                All registered Campus Ambassadors will receive an official <span className="text-white/90 font-medium">Participation Certificate</span> issued by IIM Visakhapatnam, acknowledging their contribution to the national outreach of The BPCL–IIM Visakhapatnam National Techno-Managerial Ideathon &amp; Leadership Conference 2026–27.
              </p>

            </div>

            {/* ── RIGHT: Team Registration (Unstop) ── */}
            <div className="text-center md:pl-12 flex flex-col">
              <div className="flex-1">
                <span className="text-[#C4912A] text-xs font-semibold tracking-widest uppercase">Ideathon · Unstop</span>
                <h2
                  className="mt-3 text-white"
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.1rem, 1.8vw, 1.7rem)", fontWeight: 700 }}
                >
                  Team Registration
                </h2>
                <p className="text-white/50 mt-3 text-sm max-w-sm mx-auto leading-relaxed">
                  Assemble a team of two, choose your energy theme, and step onto a national stage. Compete against 500+ teams from India's premier institutions and forge solutions that power Atmanirbhar Urja.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 justify-center">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C4912A]/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4912A]/60" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C4912A]/40" />
              </div>

              <div className="mt-8 inline-block">
                <div className="relative rounded-2xl border border-[#C4912A]/30 bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(196,145,42,0.08)]">
                  <span className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C4912A]/60 rounded-tl-sm" />
                  <span className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#C4912A]/60 rounded-tr-sm" />
                  <span className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#C4912A]/60 rounded-bl-sm" />
                  <span className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C4912A]/60 rounded-br-sm" />
                  {/* QR placeholder for Unstop link */}
                  <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center mx-auto overflow-hidden">
                    <img
                      src="https://i.postimg.cc/W1ccD08L/unstop-registration.jpg"
                      alt="Team Registration QR"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="mt-5 text-[#C4912A] text-[11px] font-semibold tracking-widest uppercase">Scan to Register on Unstop</p>
                </div>
              </div>

              <p className="mt-7 text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
                Every participating team earns an official <span className="text-white/90 font-medium">Certificate of Participation</span> from IIM Visakhapatnam — a mark of distinction for those who chose to champion India's energy future at The BPCL–IIM Visakhapatnam National Techno-Managerial Ideathon &amp; Leadership Conference 2026–27.
              </p>

            </div>

          </div>

          {/* Centered footer query line */}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#080F1E] py-12 px-6 md:px-10 xl:px-16">
        <div>
          <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
            {/* Column 1 — Address & Contact */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1.5">Permanent Campus</p>
                <p className="text-white/85 text-sm font-semibold leading-snug mb-2">
                  Indian Institute of Management Visakhapatnam
                </p>
                <p className="text-white/40 text-xs leading-relaxed">
                  Gambheeram Village,<br />
                  Anandapuram Mandal,<br />
                  Visakhapatnam – 531 163
                </p>
              </div>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">For any queries, contact</p>
                <p className="text-white/65 text-xs font-semibold mb-2">Program Office</p>
                <p className="text-white/40 text-xs mb-1">
                  <span className="text-white/55">Mobile:</span> +91 92811 18390
                </p>
                <p className="text-white/40 text-xs">
                  <span className="text-white/55">Email:</span>{" "}
                  <a href="mailto:NTMIL_PGPMCI@iimv.ac.in" className="text-[#C4912A] hover:text-[#E8A830] transition-colors">
                    NTMIL_PGPMCI@iimv.ac.in
                  </a>
                </p>
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-4">Quick Links</p>
              <div className="flex flex-col gap-2.5">
                {NAV_LINKS.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => scrollTo(l.href)}
                    className="text-left text-white/45 hover:text-[#C4912A] text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3 — Organized by / Sponsor / Social */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Organized by</p>
                <p className="text-white/65 text-sm font-semibold">PGPMCI Batch 2026–28</p>
                <p className="text-white/40 text-xs mt-0.5">IIM Visakhapatnam</p>
              </div>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Supported By</p>
                <p className="text-white/65 text-sm font-semibold">BPCL</p>
                <p className="text-white/30 text-xs mt-0.5">Bharat Petroleum Corporation Limited</p>
              </div>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/iimv_pgpmci/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-[#C4912A] hover:bg-[#C4912A]/10 flex items-center justify-center transition-colors group"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/40 group-hover:fill-[#C4912A] transition-colors">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/iimv-pgpmci/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-[#C4912A] hover:bg-[#C4912A]/10 flex items-center justify-center transition-colors group"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/40 group-hover:fill-[#C4912A] transition-colors">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              © 2026 IIM Visakhapatnam. All rights reserved.
            </p>
            <p className="text-white/20 text-xs">
              "Atmanirbhar Urja: Forging India's Sovereign Energy Future"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
