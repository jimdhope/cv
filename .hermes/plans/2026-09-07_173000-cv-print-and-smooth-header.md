# Plan: CV Print Styles (UK Format, Text-Only) + Smooth Header Scroll Animation

## Goal
Make the printed/downloaded CV produce proper UK CV format (text-only, black on white, no graphics) that fits 2 A4 pages, and fix the collapsing header scroll animation to be butter-smooth (60fps).

## Current Context / Assumptions
- Next.js 16 App Router, TypeScript, Tailwind CSS
- Header component: `src/components/collapsing-header.tsx`
- Main page: `src/app/page.tsx` — contains all sections: About, Projects (carousel), Beyond Work, Experience, Education, Skills, Contact
- Uses `requestAnimationFrame` for scroll handling
- Three.js animated background in `src/components/animated-background.tsx`
- Print uses `window.print()` — browser native print dialog → Save as PDF
- UK CV format standards: black text on white, no colors/graphics, concise, 2 pages max

## Architecture / Proposed Approach
Two independent fixes:
1. **Print styles**: Add a dedicated `src/styles/print.css` that overrides everything for print — white background, black text, no backgrounds/boxes/glassmorphism/gradients, hides all images and decorative elements, uses proper A4 sizing with 2-page constraint
2. **Smooth header animation**: Optimize `collapsing-header.tsx` with `will-change`, CSS `transform3d`, and optimized rAF throttling

## Step-by-Step Tasks

### Task 1: Create print CSS with UK CV format
**File**: `src/styles/print.css` (create new)

This stylesheet will be loaded only for print media. It ensures text-only output in UK CV format:

```css
/* UK CV Print Styles - Text only, black on white, 2 A4 pages */
@media print {
  /* Force exact page sizing */
  @page {
    size: A4;
    margin: 1.5cm;
  }

  /* Base styles - override everything */
  body {
    background: white !important;
    color: black !important;
    font-size: 11pt;
    line-height: 1.25;
    font-family: "Times New Roman", serif !important;
  }

  /* Remove all backgrounds and colors */
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
    border: none !important;
  }

  /* Remove glassmorphism and gradients */
  .glass,
  .glass-strong,
  .glass-border,
  .backdrop-blur,
  .bg-gradient-to-br,
  .bg-gradient-to-r,
  .bg-clip-text,
  .text-transparent {
    background: transparent !important;
    border: none !important;
    backdrop-filter: none !important;
  }

  /* Specific color overrides */
  .text-muted-foreground,
  .text-foreground/80,
  .text-muted-foreground/70,
  .text-primary,
  .text-primary/50 {
    color: #333 !important;
  }

  .bg-black,
  .bg-white/[0.045],
  .bg-white/[0.035],
  .bg-white/10,
  .bg-white/95,
  .bg-blue-950/20 {
    background: transparent !important;
  }

  /* Hide all images and decorative elements */
  img,
  canvas,
  svg,
  video {
    display: none !important;
  }

  /* Hide Three.js background */
  .threejs,
  [style*="canvas"] {
    display: none !important;
  }

  /* Hide footer entirely (not needed on CV) */
  footer {
    display: none !important;
  }

  /* Cards - remove all styling, just plain text */
  .shadow-lg,
  .shadow-xl,
  .shadow-2xl,
  .shadow-black,
  .border {
    box-shadow: none !important;
    border: none !important;
  }

  /* Page break control - prevent breaks inside sections */
  .section,
  section {
    page-break-inside: avoid;
  }

  /* Badges/tags - plain text style */
  .rounded-full {
    border-radius: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
    font-size: 10pt !important;
  }

  /* Ensure all headings use bold black */
  h1, h2, h3, h4, h5, h6 {
    color: black !important;
    font-weight: bold !important;
  }

  /* Skip link - hide in print */
  .skip-link {
    display: none !important;
  }

  /* Project carousel - disable for print, show plain list */
  .carousel {
    display: none !important;
  }
}
```

**Verification**: `npm run build` passes

### Task 2: Add print-only CV stylesheet link in layout
**File**: `src/app/layout.tsx`

Add the print stylesheet import. Check the file first:
```bash
grep -n "print.css" src/app/layout.tsx
```

If no match found, add:
```typescript
import '../styles/print.css';
```

at the top of the file (before any other imports).

**Verification**: 
```bash
npm run build
```
Build must pass.

### Task 3: Fix header animation for buttery smoothness (60fps)
**File**: `src/components/collapsing-header.tsx`

Replace the current implementation with an optimized version:

```typescript
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
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
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initialize progress on mount
    updateProgress();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Memoized values to prevent re-renders
  const headerPadding = useMemo(() => 64 - (64 - 24) * progress, [progress]);
  const avatarSize = useMemo(() => 128 - (128 - 48) * progress, [progress]);
  const fontSize = useMemo(() => 3.75 - (3.75 - 1.25) * progress, [progress]);
  const subtitleFontSize = useMemo(() => 1 - 0.3 * progress, [progress]);

  return (
    <header
      className="sticky top-0 z-50"
      role="banner"
      aria-label="Site header"
    >
      <div
        className="glass-strong border-b border-white/10"
        style={{ 
          paddingTop: `${headerPadding}px`,
          paddingBottom: `${headerPadding}px`,
          transition: 'padding 0.15s cubic-bezier(0.2, 0, 0.05, 1)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4">
            {/* Avatar with hardware acceleration */}
            <Avatar
              className="border-2 border-primary/20 flex-shrink-0"
              style={{ 
                width: `${avatarSize}px`,
                height: `${avatarSize}px`,
                transform: 'translateZ(0)', // Force GPU layer
                transition: 'width 0.15s cubic-bezier(0.2, 0, 0.05, 1), height 0.15s cubic-bezier(0.2, 0, 0.05, 1)',
              }}
            >
              <AvatarImage src="/avatar.png" alt="James Hope" />
              <AvatarFallback
                className="font-bold bg-gradient-to-br from-primary via-purple-500 to-pink-500 text-white flex items-center justify-center"
                style={{ fontSize: `${avatarSize * 0.32}px` }}
              >
                JH
              </AvatarFallback>
            </Avatar>

            {/* Text content */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h1
                className="font-bold leading-tight bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-0"
                style={{ 
                  fontSize: `${fontSize}rem`,
                  transition: 'font-size 0.15s cubic-bezier(0.2, 0, 0.05, 1)',
                  transform: 'translateZ(0)',
                }}
              >
                James Hope
              </h1>
              <p
                className="text-muted-foreground mt-0.5 mb-0"
                style={{
                  fontSize: `${subtitleFontSize}rem`,
                  transition: 'font-size 0.15s cubic-bezier(0.2, 0, 0.05, 1)',
                  transform: 'translateZ(0)',
                }}
              >
                Customer Service Assistant · Creative Technologist
              </p>
            </div>

            {/* Download CV button */}
            <div className="flex-shrink-0">
              <Button 
                onClick={() => window.print()} 
                size="sm" 
                className="gap-2"
                style={{ transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.05, 1)' }}
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

Key changes:
- Uses `cubic-bezier(0.2, 0, 0.05, 1)` — standard smooth easing that avoids the "jerky" feel of `linear` or `ease`
- Adds `transform: 'translateZ(0)'` to force GPU acceleration on animated elements
- Uses `useMemo` to prevent unnecessary re-renders of inline styles
- Initializes progress on mount (was missing before, causing initial jump)

**Verification**:
1. `npm run build` passes
2. Open dev tools → Performance tab → record scroll → observe smooth 60fps

### Task 4: Ensure main content has proper print-friendly layout
**File**: `src/app/page.tsx`

Check if there's a `min-h-screen bg-transparent` wrapper that might cause issues. Verify the main content structure supports clean page breaks:
1. Check `page.tsx` line ~106: `<div className="min-h-screen bg-transparent">`
2. Ensure `main` element has proper spacing for print

The current structure should be fine — the print CSS in Task 1 handles overriding all styling.

**Verification**: `npm run build` passes

### Task 5: Test print output manually
**Verification**:
1. Start dev server: `npm run dev`
2. Open `http://localhost:3000`
3. Press ⌘+P (or Ctrl+P)
4. In print dialog, select "Save as PDF"
5. Verify:
   - All text is black on white
   - No images, gradients, or glass effects visible
   - Footer is hidden
   - Name "James Hope" appears at top
   - All sections are readable in plain text
   - Output is approximately 1-2 A4 pages
   - Font is Times New Roman (UK CV standard)

## Risks, Tradeoffs, and Open Questions
- **Risk**: Tailwind's `!important` ordering might override print styles. Solution: print CSS loads last and uses `!important` liberally for print.
- **Risk**: Three.js canvas might still render in print despite `display: none`. May need to also hide the parent container. Check `src/components/animated-background.tsx`.
- **Tradeoff**: Using `translateZ(0)` forces GPU memory usage. Acceptable for a single header.
- **Tradeoff**: Times New Roman for print vs. Lexend for screen. This matches UK CV conventions.
- **Open Q**: Should the printed CV include a cover letter section? Currently none exists in the page.
- **Open Q**: Should the CV be a separate page/route (e.g., `/cv`) instead of printing the homepage? Printing the homepage is simpler but may include unwanted elements.
