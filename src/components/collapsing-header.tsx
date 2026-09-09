'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function StickyHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 0.8);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateVisibility();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        pointerEvents: visible ? 'auto' : 'none',
        paddingTop: 'env(safe-area-inset-top, 0)',
      }}
      role="banner"
      aria-label="Site header"
    >
      <div className="glass-strong border-b border-white/10" style={{ borderRadius: 0 }}>
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 md:gap-4 h-14 md:h-16">
            {/* Avatar */}
            <Avatar className="border-2 border-primary/20 flex-shrink-0 w-9 h-9 md:w-10 md:h-10">
              <AvatarImage src="/avatar.png" alt="James Hope" />
              <AvatarFallback className="font-bold bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white flex items-center justify-center text-xs md:text-sm">
                JH
              </AvatarFallback>
            </Avatar>

            {/* Text content */}
            <div className="flex-1 min-w-0 flex flex-col justify-center overflow-hidden">
              <h1 className="font-bold leading-tight bg-gradient-to-r from-primary via-cyan-400 to-indigo-400 bg-clip-text text-transparent text-base md:text-lg whitespace-nowrap">
                James Hope
              </h1>
              <p className="text-muted-foreground text-xs md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                Customer Service Assistant · Creative Technologist
              </p>
            </div>

            {/* Download CV button */}
            <div className="flex-shrink-0">
              <Button
                onClick={() => window.open('/cv.pdf', '_blank')}
                size="sm"
                className="gap-1.5 md:gap-2 h-8 md:h-9"
              >
                <Download className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                <span className="hidden sm:inline text-xs md:text-sm">Download CV</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
