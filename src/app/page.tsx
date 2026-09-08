"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectCarousel } from "@/components/project-carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Download, BookOpen, Music, Container, Wrench } from "lucide-react";
import StickyHeader from "@/components/collapsing-header";

const projects = [
  {
    name: "KPI Dashboard",
    desc: "Gamify KPI Achievements",
    tech: "PL/pgSQL",
    emoji: "📊",
    url: "https://github.com/jimdhope/kpi-dashboard",
    detail: "This project started off as a spreadsheet on one computer that needed to be accessed whilst I was away. I run a competition each week at work to help encourage KPI success and boost engagement. Then I went on holiday for a week and realised I needed something a bit more substantial than a spreadsheet. The benefit is now that we don't just track each week's competition, we have a record of all achievements over time and we also track KPIs not part of the competition. I've included all of the Useful Tools from one of my other projects so everyone has access to everything they need in one place. Because I couldn't help myself I started adding automations over time, so now all I need to do is log a score and every 15 minutes an updated table is posted to MS Teams with the current scores. We recently added different competition types including a Beat Your Best (competing against yourself for the last 8 weeks) as well as a KPI league that all use the same data.",
    mockup: "kpi",
  },
  {
    name: "Useful Tools",
    desc: "Collection of utilities",
    tech: "TypeScript",
    emoji: "🛠️",
    url: "https://github.com/jimdhope/Useful-Tools",
    detail: "A growing collection of utilities I've built to solve everyday problems whilst taking calls. Started as multiple Excel calculations and evolved into a proper TypeScript app. Each tool is small, focused, and does one thing well. Currently we have calculators for instalment plans, energy usage, Burns tests, dual fueling, tariff comparisons and agreed reads, plus guides on how to read your energy meter, how to use various in-home displays, a power cut map, and even an interactive call flow guide that helps when you are on a call.",
    mockup: "tools",
  },
  {
    name: "DNO Map",
    desc: "UK power cut dashboard",
    tech: "Next.js · Leaflet",
    emoji: "⚡",
    url: "https://github.com/jimdhope/dno-map",
    detail: "In the UK we have multiple Electricity Distribution Network Operators that all have their own way of showing power outages in specific areas. Whilst we have services like Powercut105 that tell you the DNO for an area, there wasn't a live updating UK-wide power cut map. So using open data I created one.",
    mockup: "map",
  },
  {
    name: "WP Spotify Connect",
    desc: "WordPress → Spotify bridge for webOS",
    tech: "PHP",
    emoji: "🎵",
    url: "https://github.com/jimdhope/WP-Spotify-Connect",
    detail: "Built to make a WordPress site appear as a Spotify Connect device on webOS TVs. While building screensavers for LG WebOS using WordPress, I wanted background music playback — this plugin registers the WP site as a Spotify player endpoint, letting you stream audio to the TV while the screensaver runs.",
    mockup: "spotify",
  },
  {
    name: "LG WebOS Plugin",
    desc: "Control WP apps from TV remote",
    tech: "JavaScript",
    emoji: "📺",
    url: "https://github.com/jimdhope/Wordpress-LG-WebOS-Plugin",
    detail: "Built to navigate WordPress websites used as webOS apps with a standard TV remote. The plugin maps remote directional buttons and OK/Back keys and colour buttons to WordPress UI interactions — scrolling, selecting links, and navigating menus — making any WP site usable as a TV app without a mouse or keyboard.",
    mockup: "tv",
  },
];

const experience = [
  { 
    id: "sigma",
    role: "Customer Service Agent / Former Client Trainer", 
    company: "Sigma Connected", 
    dates: "2021 – Present", 
    location: "Remote", 
    description: "I currently support vulnerable customers with their energy accounts — updating personal information, setting up payment plans, and resolving enquiries and complaints. It requires patience and empathy, and I've been able to make a genuine difference for people during difficult periods. Before this, I worked as a Client Trainer within the same company, which was one of the most rewarding aspects of my time there. I onboarded new team members from day one, developed training materials, and delivered sessions that prepared them to take on the role confidently. Seeing someone I trained develop into the position and achieve their targets is something I'm proud of."
  },
  { 
    id: "sitel",
    role: "Customer Service Agent (Outbound)", 
    company: "Sitel", 
    dates: "2020 – 2021", 
    location: "Remote", 
    description: "In this outbound role I proactively contacted clients on behalf of the our client, gathered essential information, and provided guidance on next steps. The role required resilience and the ability to adapt my approach to different situations. I also took responsibility for supporting colleagues after challenging calls — a quick check-in or change of tone after a difficult conversation helped maintain team morale, and I became a point of contact for colleagues who needed to decompress."
  },
  { 
    id: "vodafone",
    role: "Assistant Store Manager", 
    company: "Vodafone", 
    dates: "2020", 
    location: "Bridlington", 
    description: "I supported the Store Manager with day-to-day operations, trained and managed team members, and ensured we met our targets while maintaining a high standard of customer service. I held key holder responsibilities — opening and closing the store, conducting security checks, and reporting faults — which gave me a strong sense of accountability. The environment was fast-paced, but I performed well under pressure and learned to prioritise effectively."
  },
  { 
    id: "starinn",
    role: "Hotel/Restaurant Manager", 
    company: "The Star Inn", 
    dates: "2019 – 2020", 
    location: "Bridlington", 
    description: "I managed the daily operations of this hotel and restaurant, leading and coordinating teams to deliver a high standard of service. From front-of-house management to kitchen operations during peak periods, I was hands-on across all areas. I implemented service standards that raised the quality of the guest experience, and I ensured effective communication between departments to maintain consistency. Maintaining quality control and reputation required discipline, but I'm proud of the standards we achieved."
  },
  { 
    id: "parkway",
    role: "Cinema Customer Assistant / Theatre Technician", 
    company: "Parkway Cinema", 
    dates: "2017 – 2018", 
    location: "Beverley", 
    description: "This role combined customer service with live event technical support. On the service side, I sold tickets, served refreshments, guided patrons, and maintained a clean environment. The technical aspect involved supporting clients with lighting, sound, and audiovisual equipment for screenings and events. I found satisfaction in ensuring events ran smoothly and the technical delivery met expectations."
  },
  { 
    id: "clarks",
    role: "Customer Assistant", 
    company: "Clarks", 
    dates: "2017", 
    location: "Beverley", 
    description: "Working in a busy high street store, I assisted customers in selecting appropriate footwear and accessories — a task that requires patience and product knowledge, particularly during busy periods. I expanded my understanding of product care techniques and maintained well-stocked, visually appealing displays. The role developed my ability to read customers quickly and match them with suitable products."
  },
  { 
    id: "1stlocate",
    role: "Front Line Agent", 
    company: "1st Locate", 
    dates: "2016 – 2017", 
    location: "Scarborough", 
    description: "This was a debt collection role that required professionalism and empathy in equal measure. I served a diverse range of clients, maintaining a respectful approach on every call. I addressed enquiries, resolved issues, and worked with individuals to establish realistic payment plans. The position reinforced the importance of handling sensitive conversations with care."
  },
  { 
    id: "tesco",
    role: "Customer Assistant", 
    company: "Tesco Superstore", 
    dates: "2011 – 2016", 
    location: "Bridlington", 
    description: "I spent five years at Tesco, which provided a strong foundation in customer service. I served customers in a fast-paced supermarket environment, handled stock rotation, supported the warehouse team with deliveries, and maintained clean, well-stocked aisles. I worked as part of a team to achieve sales targets and found the experience rewarding."
  },
  { 
    id: "thespa",
    role: "Venue Technician", 
    company: "The Spa", 
    dates: "2007 – 2010", 
    location: "Bridlington", 
    highlight: true,
    description: "This was my first technical role, and it established the foundation for my career in live events. I managed lighting, sound, and AV equipment for clients leasing the theatre, Royal Hall, and conference rooms. I oversaw events from conception to completion — designing lighting layouts, programming and operating equipment, managing rigging and de-rigging, and ensuring compliance with health and safety. The variety was considerable: one day setting up for a conference, the next running lighting for a live performance. It taught me to think on my feet, remain calm under pressure, and always have contingency plans."
  },
];

const education = [
  { 
    school: "East Riding College, Beverley", 
    dates: "2016 – 2019", 
    title: "BA in Contemporary Media, Design & Production", 
    grade: "2:1", 
    note: "", 
    modules: {
      "Year one": ["Digital technologies", "Decoding the digital society", "Animation techniques and principles", "Digital video production", "Digital image production"],
      "Year two": ["Professional development", "Work based practice", "Audience", "Audio for contemporary media", "3D motion graphics"],
      "Year three": ["Independent study", "Professional production", "Live conference and exhibition", "Web based portfolio"]
    }
  },
  { 
    school: "Reid Kerr College, Paisley", 
    dates: "2005 – 2006", 
    title: "HNC in Production & Technical Theatre", 
    grade: "Merit", 
    note: "", 
    modules: {
      "Course Modules": ["Preparation & Performance of sound Effects for Theatre - Pass", "Providing Stage Props for Production - Pass", "Set Construction, Painting and Finishing - Pass", "Stage Lighting: Lighting Control/ Operation - Merit", "Stage Lighting: Rigging - Merit", "Stage Management Skills - Pass", "Design for the stage - Pass"]
    }
  },
  { 
    school: "Ayr College, Ayr", 
    dates: "2004 – 2005", 
    title: "NQ2 Performing Arts", 
    grade: "Pass", 
    note: "", 
    modules: {
      "Course Modules": ["Acting Skills - Pass", "Acting: Text Based Production - Pass", "Communications (NC) - Pass", "Creative Project and Presentation - Pass", "Dance: Choreography - Pass", "Drama Theory and Practice - Pass", "Group Dance Performance - Pass", "Movement for Theatre Performers - Pass", "Theatre Production Team - Pass", "Voice - Pass", "Appreciation of Dance - Pass", "Video Skills: Presentation and Production - Pass"]
    }
  },
  { 
    school: "Mainholm Academy, Ayr", 
    dates: "2002 – 2004", 
    title: "Standard Grades", 
    grade: "", 
    note: "Music – 1, Physics – 3, Maths – 3, English – 4", 
    modules: {} 
  },
];

const allSkills = ["Customer Service", "Employee Training", "Live Events", "Event Production", "Lighting Design", "Stage Lighting", "Video Production", "Live Video Streaming", "Video Editing", "Professional Audio", "Live Sound", "Photography", "Image Editing", "Stage Management", "Performing Arts", "Music Production", "Piano", "Microsoft Office", "CRM", "Communication", "Teamwork", "Attention to Detail", "Linux", "Adobe Photoshop", "CAD", "Typing", "Data Entry", "Computer Hardware"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Sticky Header */}
      <StickyHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col" aria-label="Hero">
        <div className="flex-1 flex items-center">
          <div className="max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-24">
            {/* Left Column */}
            <div className="flex flex-col justify-between text-right min-h-full">
              <div>
                <Avatar className="border-2 border-primary/20 w-32 h-32 md:w-40 md:h-40 ml-auto mr-0 mb-6">
                  <AvatarImage src="/avatar.png" alt="James Hope" />
                  <AvatarFallback className="font-bold bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white flex items-center justify-center text-4xl">
                    JH
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
                  James Hope
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Customer Service Assistant<br />Creative Technologist
                </p>
                <Button
                  onClick={() => window.open('/cv.pdf', '_blank')}
                  size="sm"
                  className="gap-2 mt-4"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download CV
                </Button>
              </div>
              {/* Hero Links - Right aligned */}
              <div className="flex flex-wrap items-center justify-end gap-4 md:gap-6 mt-8">
                <a href="https://www.amazon.co.uk/stores/Jim-Hope/author/B0FHWXDZBR/allbooks" target="_blank" rel="noopener" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <BookOpen className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="group-hover:text-primary transition-colors">3 Book Series on Amazon</span>
                </a>
                <a href="https://open.spotify.com/artist/0qzcMDOcviJ0GqtWiqWckS" target="_blank" rel="noopener" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <Music className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="group-hover:text-primary transition-colors">Music on Spotify</span>
                </a>
                <a href="https://hub.docker.com/u/jimdhope" target="_blank" rel="noopener" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <Container className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="group-hover:text-primary transition-colors">9 Docker Repos</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Wrench className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span>Self-Hosted Everything</span>
                </div>
              </div>
            </div>

            {/* Right Column - About Me */}
            <div className="space-y-4 text-muted-foreground leading-relaxed rounded-xl bg-white/[0.03] p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground">About Me</h2>
              <p>
                Experienced product trainer with a strong background in customer service. Adept at designing and delivering engaging training programmes, fostering knowledge retention, and enhancing team performance.
              </p>
              <p>
                Highly organised and effective in dynamic, fast-paced environments; skilled at prioritising tasks and achieving objectives with creativity, enthusiasm, and a collaborative approach.
              </p>
              <p>
                Earlier in my career I worked as a <strong className="text-foreground">Venue &amp; Event Technician</strong>, designing and operating lighting, sound, and AV for theatres, conference rooms, and live events.
              </p>
              <p>
                Outside of work I use <strong className="text-foreground">AI to bring ideas to life</strong> — dashboards, data pipelines, and self-hosted services. I write fantasy novels, release music on Spotify, and run a blog where I write about whatever crosses my mind — technology, smart home, live production, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SVG Filter for glassmorphism distortion */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="glass-distortion">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <main id="main-content" className="relative z-10 max-w-5xl mx-auto px-6 py-12 space-y-16" role="main">
        {/* Projects Showcase */}
        <section aria-labelledby="projects-heading">
          <div className="flex items-center gap-3 mb-6">
            <h2 id="projects-heading" className="text-3xl font-bold">Projects</h2>
          </div>
          <ProjectCarousel projects={projects} />
        </section>

        {/* Beyond Work */}
        <section aria-labelledby="beyond-heading">
          <div className="flex items-center gap-3 mb-6">
            <h2 id="beyond-heading" className="text-3xl font-bold">Beyond Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <a href="https://www.amazon.co.uk/stores/Jim-Hope/author/B0FHWXDZBR/allbooks" target="_blank" rel="noopener" className="group h-full">
              <Card className="h-full hover:border-primary/50 transition-all overflow-hidden flex flex-col glass" style={{ paddingTop: 0 }}>
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img src="/chapter-2.png" alt="The Case Files of the DMC: Chapter 2 illustration — vintage tea service drawing" className="w-full h-full object-cover scale-105" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mb-2">Author</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    Writing and publishing fantasy novels across three series — Magitech Mysteries, Casefiles of the DMC, and Bartholomew Quill. Each series explores different worlds and characters, from magical detective work to supernatural investigations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">Fantasy</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">3 Series</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">Amazon</span>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a href="https://open.spotify.com/artist/0qzcMDOcviJ0GqtWiqWckS" target="_blank" rel="noopener" className="group h-full">
              <Card className="h-full hover:border-primary/50 transition-all overflow-hidden flex flex-col glass" style={{ paddingTop: 0 }}>
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img src="/singularity-suite.png" alt="Singularity Suite album art — sci-fi biomechanical structure" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mb-2">Music</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    Releasing music on Spotify under my own name. From electronic explorations to collaborative projects, my releases include Singularity Suite, Some Kind of Intelligence, and Songs for Scarlett.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">Electronic</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">Spotify</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">3 Albums</span>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a href="https://jim.jabi.uk" target="_blank" rel="noopener" className="group h-full">
              <Card className="h-full hover:border-primary/50 transition-all overflow-hidden flex flex-col glass" style={{ paddingTop: 0 }}>
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img src="/blog-header.png" alt="Carnaby Media Hub — modern curved building with glass facade" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mb-2">Blog</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    Writing at jim.jabi.uk about whatever crosses my mind — technology, AI, smart home, live production, and everything in between. A casual space for thoughts, tutorials, and discoveries.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">Tech</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">AI</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">Smart Home</span>
                  </div>
                </CardContent>
              </Card>
            </a>
            <a href="https://github.com/jimdhope" target="_blank" rel="noopener" className="group h-full">
              <Card className="h-full hover:border-primary/50 transition-all overflow-hidden flex flex-col glass" style={{ paddingTop: 0 }}>
                <div className="h-48 overflow-hidden flex-shrink-0">
                  <img src="/kpi-landing.png" alt="KPI Dashboard landing page — dark themed SaaS interface" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors mb-2">Creative Tech</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    Using AI to bring ideas to life — building dashboards, data pipelines, and self-hosted services. From KPI tracking systems to webOS apps, I create tools that solve real problems and deploy them on my own infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">Next.js</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">Docker</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 text-[10px] font-medium">Self-Hosted</span>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </section>

        {/* Experience */}
        <section aria-labelledby="experience-heading">
          <div className="flex items-center gap-3 mb-6">
            <h2 id="experience-heading" className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-4">
            {experience.map((exp) => (
              <Card key={exp.id} className={exp.highlight ? "border-primary/30 glass" : "glass"}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                    <h3 className="font-semibold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground font-mono">{exp.dates}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-primary">{exp.company}</span>
                    <Badge variant="outline" className="text-xs">{exp.location}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section aria-labelledby="education-heading">
          <div className="flex items-center gap-3 mb-6">
            <h2 id="education-heading" className="text-3xl font-bold">Education</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {education.map((edu) => (
              <Card key={edu.school} className="glass">
                <CardContent className="pt-6">
                  <div className="text-xs text-primary font-mono mb-1">{edu.dates}</div>
                  <h3 className="font-semibold">{edu.title}{edu.grade && <> — <span className="text-green-500">{edu.grade}</span></>}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">{edu.school}</p>
                  {edu.note && <p className="text-sm text-muted-foreground mt-2 mb-3">{edu.note}</p>}
                  {edu.modules && (
                    <div className="mt-3 space-y-2">
                      {Object.entries(edu.modules).map(([year, mods]) => (
                        <div key={year}>
                          <h4 className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-0.5">{year}</h4>
                          <p className="text-xs text-muted-foreground/70">
                            {(mods as string[]).join(', ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Qualifications */}
        <section aria-labelledby="qualifications-heading">
          <div className="flex items-center gap-3 mb-6">
            <h2 id="qualifications-heading" className="text-3xl font-bold">Other Qualifications</h2>
          </div>
          <Card className="glass">
            <CardContent className="pt-6">
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Apple Teacher (2017)</li>
                <li>Introduction to the Facilities Industry (NCFE Level 1)</li>
                <li>Employability Skills (NCFE Level 1)</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills-heading">
          <div className="flex items-center gap-3 mb-6">
            <h2 id="skills-heading" className="text-3xl font-bold">Skills</h2>
          </div>
          <Card className="glass">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2" role="list" aria-label="Skills list">
                {allSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" role="listitem">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-12" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-2xl font-bold mb-3">Get in Touch</h2>
          <p className="text-muted-foreground mb-6">Interested in working together? Feel free to reach out.</p>
          <nav className="flex flex-wrap items-center justify-center gap-3" aria-label="Contact links">
            <Button onClick={() => window.open('/cv.pdf', '_blank')} variant="outline" className="gap-2 glass">
              <Download className="w-4 h-4" aria-hidden="true" /> Download CV
            </Button>
            <Button variant="outline" className="gap-2 glass">
              <a href="mailto:jim@jabi.uk" className="flex items-center gap-2"><Mail className="w-4 h-4" aria-hidden="true" /> jim@jabi.uk</a>
            </Button>
            <Button variant="outline" className="gap-2 glass">
              <a href="https://www.linkedin.com/in/jimdhope/" target="_blank" rel="noopener" className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="gap-2 glass">
              <a href="https://github.com/jimdhope" target="_blank" rel="noopener" className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                GitHub
              </a>
            </Button>
          </nav>
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 glass-strong" role="contentinfo">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} James Hope</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/jimdhope" target="_blank" rel="noopener" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jimdhope/" target="_blank" rel="noopener" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      
      {/* Spacer to prevent content from being hidden behind sticky footer */}
      <div className="h-16" />
    </div>
  );
}
