"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, ChevronDown } from "lucide-react";

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
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-scroll every 5 seconds, pause on hover or expand
  useEffect(() => {
    if (!emblaApi || isPaused || expandedCard) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused, expandedCard]);

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
              const isExpanded = expandedCard === project.name;
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

                      {/* Expandable detail section */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                        <p className="text-sm text-muted-foreground leading-relaxed overflow-y-auto max-h-80 pr-2">
                          {project.detail}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <button
                          onClick={() => setExpandedCard(isExpanded ? null : project.name)}
                          className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? 'Show less' : 'Learn More'}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        <Button size="sm" variant="outline">
                          <a href={project.url} target="_blank" rel="noopener" className="flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" aria-hidden="true" /> GitHub
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
    </>
  );
}
