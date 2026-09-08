# Plan: CV Print Styles + Smooth Header Scroll Animation

## Goal
Fix print CSS so downloaded CV has black text on white background and fits 2 A4 pages, and make the collapsing header scroll animation butter-smooth (60fps) instead of jerky.

## Current Context / Assumptions
- Next.js 16 App Router, TypeScript, Tailwind CSS
- Header component: `src/components/collapsing-header.tsx`
- Main page: `src/app/page.tsx`
- Uses `requestAnimationFrame` for scroll handling
- `@tailwindcss/typography` likely available (for print styles)
- Three.js animated background present in layout

## Architecture / Proposed Approach
Two independent fixes:
1. **Print styles**: Add a dedicated `@media print` CSS block that overrides all glassmorphism, gradients, and dark mode — forcing white background, black text, removing backgrounds/images, and constraining layout to 2 A4 pages.
2. **Scroll smoothness**: Replace `requestAnimationFrame` + `transform` animations with CSS native `position: sticky` + `transform3d()` hardware acceleration on the header's child elements. Use `will-change` for the avatar, name, and button to trigger GPU compositing.

## Step-by-Step Tasks

### Task 1: Add print CSS stylesheet
**File**: `src/styles/print.css` (create new)

Add a dedicated print stylesheet that:
- Sets white background on ALL elements
- Sets black text on ALL elements
- Removes all backgrounds, gradients, shadows
- Hides non-essential elements (footer links icons, decorative divs)
- Ensures images have white backgrounds if needed
- Uses A4 `@page` rules

```css
@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
  }
  
  body, html {
    background: white !important;
    color: black !important;
    font-size: 12pt;
    line-height: 1.3;
  }
  
  @page {
    size: A4;
    margin: 1.5cm;
    max-height: 27.7cm; /* 2 A4 pages */
  }
  
  .glass,
  .glass-strong,
  .glass-border {
    background: transparent !important;
    border: none !important;
    backdrop-filter: none !important;
  }
  
  .bg-gradient-to-r,
  .bg-clip-text,
  .text-transparent {
    background: none !important;
    -webkit-background-clip: initial !important;
    color: black !important;
  }
  
  .text-muted-foreground {
    color: #333333 !important;
  }
  
  .shadow-lg,
  .shadow-xl,
  .shadow-2xl {
    shadow: none !important;
    box-shadow: none !important;
  }
  
  .border {
    border: none !important;
  }
}
```

**Verification**: `npm run build` passes

### Task 2: Import print CSS in layout
**File**: `src/app/layout.tsx`

Add import at the top:
```typescript
import '@/styles/print.css';
```

**Verification**: `npm run build` passes

### Task 3: Fix header animation for 60fps
**File**: `src/components/collapsing-header.tsx`

Replace the current implementation with a version using:
- `transform3d` for all animated properties (translate, scale)
- `will-change` on animated elements
- CSS transitions instead of JS-driven transforms

```typescript
'use client';

import { useState, useEffect, useMemo } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function CollapsingHeader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const scroll = Math.min(window.scrollY / 250, 1);
      setProgress(scroll);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerPadding = useMemo(() => `${64 - (64 - 24) * progress}px`, [progress]);
  const avatarSize = useMemo(() => `${128 - (128 - 48) * progress}px`, [progress]);
  const fontSize = useMemo(() => `${3.75 - (3.75 - 1.25) * progress}rem`, [progress]);
  const subtitleFontSize = useMemo(() => `${1 - 0.3 * progress}rem`, [progress]);

  return (
    <header
      className="sticky top-0 z-50 will-change-transform"
      role="banner"
      aria-label="Site header"
    >
      <div
        className="glass-strong border-b border-white/10"
        style={{ 
          paddingTop: headerPadding,
          paddingBottom: headerPadding,
          transition: 'padding 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4">
            {/* Avatar with hardware-accelerated transform */}
            <Avatar
              className="border-2 border-primary/20 flex-shrink-0 will-change-transform"
              style={{ 
                width: avatarSize,
                height: avatarSize,
                transform: `scale3d(${1 - 0.3 * progress}, ${1 - 0.3 * progress}, 1)`,
                transition: 'width 0.15s cubic-bezier(0.4, 0, 0.2, 1), height 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <AvatarImage src="/avatar.png" alt="James Hope" />
              <AvatarFallback
                className="font-bold bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white flex items-center justify-center"
                style={{ fontSize: `${parseFloat(avatarSize) * 0.32}px` }}
              >
                JH
              </AvatarFallback>
            </Avatar>

            {/* Text content */}
            <div className="flex-1 min-w-0 flex flex-col justify-center will-change-transform">
              <h1
                className="font-bold leading-tight bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-0"
                style={{ 
                  fontSize: fontSize,
                  transition: 'font-size 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'translateZ(0)', // Force hardware acceleration
                }}
              >
                James Hope
              </h1>
              <p
                className="text-muted-foreground mt-0.5 mb-0"
                style={{
                  fontSize: subtitleFontSize,
                  transition: 'font-size 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: 'translateZ(0)',
                }}
              >
                Customer Service Assistant · Creative Technologist
              </p>
            </div>

            {/* Download CV button */}
            <div className="flex-shrink-0 will-change-transform">
              <Button 
                onClick={() => window.print()} 
                size="sm" 
                className="gap-2"
                style={{ transition: 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">Download CV</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
```

**Verification**: 
1. `npm run build` passes
2. Open browser dev tools → scroll → observe 60fps in Performance tab

## Tests / Validation
1. Run `npm run build` after each change — must pass with no errors
2. Manual check: open page, scroll to observe smooth header animation
3. Press ⌘+P (print dialog) → select "Save as PDF" → verify:
   - Black text on white background
   - No glassmorphism/gradients visible
   - Output fits approximately 2 A4 pages
4. Chrome DevTools → Performance tab → scroll recording shows consistent 16ms frames

## Risks, Tradeoffs, and Open Questions
- **Risk**: Print CSS may conflict with existing Tailwind classes. Solution: use `!important` sparingly, only for print.
- **Tradeoff**: `will-change` can cause memory issues if overused. Only apply to 3-4 animated elements.
- **Tradeoff**: CSS `cubic-bezier(0.4, 0, 0.2, 1)` is standard easing; `ease-out` is snappier but may feel different.
- **Open Q**: Should the CV PDF match the on-screen styling exactly, or should it be simplified? (Assuming simplified for print reliability)
- **Open Q**: How many sections/content blocks are there to estimate 2-page fit? (Need to check `src/app/page.tsx` content volume)
