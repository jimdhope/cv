# Replace Modal with Card Flip Animation

## Goal
Replace the Learn More modal with a card flip animation that reveals the project description on the back of each card, keeping the content in the page flow instead of a fixed overlay.

## Current Context / Assumptions

**Current behavior:**
- "Learn More" button opens a Modal (Dialog) overlay
- Modal shows project description
- Problem: Long content overflows above the modal on mobile

**Proposed behavior:**
- "Learn More" button flips the card 180° on the Y-axis
- Back face shows the full project description
- User can scroll naturally since the card is in the page flow
- A "Back to front" button returns to the original view

## Architecture / Proposed Approach

Add CSS `transform-style: preserve-3d` and `backface-visibility: hidden` to each card. When flipped, rotate 180° to reveal the back face containing the description. The card maintains its position in the DOM so scrolling works naturally. Use Tailwind's `rotate-y-180` and conditional classes to toggle between front/back.

## Step-by-Step Tasks

### Task 1: Update project-carousel.tsx — replace dialog with card flip

**File:** `src/components/project-carousel.tsx`

Replace the `openProject` state and `Dialog` with a `flippedCard` state:

**Before:**
```tsx
const [openProject, setOpenProject] = useState<Project | null>(null);
```

**After:**
```tsx
const [flippedCard, setFlippedCard] = useState<string | null>(null);
```

Update the "Learn More" button:

**Before:**
```tsx
<Button size="sm" onClick={() => setOpenProject(project)}>
  Learn More
</Button>
```

**After:**
```tsx
<Button size="sm" onClick={() => setFlippedCard(flippedCard === project.name ? null : project.name)}>
  {flippedCard === project.name ? 'Back' : 'Learn More'}
</Button>
```

Wrap each card content in a flip container:

**Before:**
```tsx
<div key={project.name} className="flex-[0_0_100%] min-w-0 px-4 md:px-8">
  <Card className="mx-auto max-w-3xl glass">
    <CardContent className="pt-6">
      {/* front content */}
    </CardContent>
  </Card>
</div>
```

**After:**
```tsx
<div key={project.name} className="flex-[0_0_100%] min-w-0 px-4 md:px-8">
  <div className={`relative mx-auto max-w-3xl transition-transform duration-700 ease-in-out ${flippedCard === project.name ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
    {/* Front Face */}
    <Card className="mx-auto max-w-3xl glass w-full" style={{ backfaceVisibility: 'hidden' }}>
      <CardContent className="pt-6">
        {/* existing front content */}
      </CardContent>
    </Card>
    
    {/* Back Face */}
    <Card className="mx-auto max-w-3xl glass w-full absolute inset-0 rotate-y-180" style={{ backfaceVisibility: 'hidden' }}>
      <CardContent className="pt-6">
        {/* description content */}
      </CardContent>
    </Card>
  </div>
</div>
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 2: Add rotate-y-180 utility to globals.css

**File:** `src/app/globals.css`

Add to `@layer utilities`:

```css
/* Card flip utilities */
.rotate-y-180 {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
}

.preserve-3d {
  transform-style: preserve-3d;
}
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 3: Remove Dialog import (no longer needed)

**File:** `src/components/project-carousel.tsx`

Remove:
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 4: Commit, build, push

```bash
cd /Users/jim/cv-site && git add -A && git commit -m "Replace modal with card flip animation" && git push
```

```bash
cd /Users/jim/cv-site && docker build --no-cache -t jimdhope/cv:latest . && docker push jimdhope/cv:latest
```

## Tests / Validation

After deploy:
1. Navigate to Projects section on mobile and desktop
2. Tap "Learn More" — card should flip 180° revealing the description
3. Content should be readable and scrollable in page flow
4. Tap "Back" — card flips back to front
5. No modal overlay appears
6. Other cards remain visible behind the flipped card (or: only one card visible at a time)

## Risks, Tradeoffs, and Open Questions

- **Risk:** Card flip may be disorienting for some users. Mitigation: smooth 700ms transition.
- **Tradeoff:** Takes more vertical space when flipped — user must scroll past it to see next card.
- **Open:** Should only one card be visible at a time when flipped (hide others)?
- **Open:** Should the flip work on the hero card too, or just project cards?

## Notes for Implementer

- The `preserve-3d` and `backface-visibility: hidden` are essential for the flip effect
- The back face needs `rotate-y-180` by default so it's pre-rotated
- The container rotates 180° on flip, bringing the back face into view
- Both faces need `backface-visibility: hidden` so they're invisible when facing away
