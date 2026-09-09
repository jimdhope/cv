"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  desc: string;
  tech: string;
  emoji: string;
  url: string;
  detail: string;
  mockup: string;
}

const mockupImages: Record<string, string> = {
  kpi: '/mockups/kpi.png',
  tools: '/mockups/tools.png',
  map: '/mockups/map.png',
  spotify: '/mockups/spotify.png',
  tv: '/mockups/tv.png',
};

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollPositionRef = useRef(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-scroll every 5 seconds, pause on hover
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  // Save/restore scroll position when dialog opens/closes
  useEffect(() => {
    if (openProject) {
      scrollPositionRef.current = window.scrollY;
    } else {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [openProject]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <div className="relative" role="region" aria-label="Project carousel">
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex">
            {projects.map((project) => {
              const mockupImage = mockupImages[project.mockup];
              return (
                <div key={project.name} className="flex-[0_0_100%] min-w-0 px-4 md:px-8">
                  <Card className="mx-auto max-w-3xl glass">
                    <CardContent className="pt-6">
                      <div className="mb-4 mockup-wrapper">
                        <div className="mockup-container">
                          {mockupImage && <img src={mockupImage} alt={project.name} className="w-full" />}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{project.name}</h3>
                          <p className="text-sm text-muted-foreground">{project.desc}</p>
                        </div>
                        <Badge variant="secondary">{project.tech}</Badge>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" onClick={() => setOpenProject(project)}>
                          Learn More
                        </Button>
                        <Button size="sm" variant="outline">
                          <a href={project.url} target="_blank" rel="noopener" className="flex items-center gap-1">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors z-10"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors z-10"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Project navigation">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === selectedIndex ? "bg-primary" : "bg-muted"}`}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <Dialog open={!!openProject} onOpenChange={() => setOpenProject(null)}>
        <DialogContent className="max-w-lg glass p-0 overflow-hidden">
          <div className="flex flex-col max-h-[85vh]">
            <div className="p-4 pb-0">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span className="text-2xl" aria-hidden="true">{openProject?.emoji}</span>
                  {openProject?.name}
                </DialogTitle>
              </DialogHeader>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <DialogDescription className="text-base text-foreground">
                {openProject?.detail}
              </DialogDescription>
              <div className="flex items-center justify-between pt-4">
                <Badge variant="secondary">{openProject?.tech}</Badge>
                <Button size="sm" variant="outline">
                  <a href={openProject?.url} target="_blank" rel="noopener" className="flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" aria-hidden="true" /> View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
