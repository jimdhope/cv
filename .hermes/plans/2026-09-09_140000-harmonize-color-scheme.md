# Harmonize CV Site Color Scheme

## Goal
Create a cohesive color palette where the background, glass cards, and accent gradient complement each other rather than clashing.

## Current Context / Assumptions

**Current CV site palette:**
- Background: Pure black `oklch(0.145 0 0)` ≈ `#0a0a0a`
- Primary: Light gray `oklch(0.922 0 0)` ≈ `#e0e0e0` (no real accent color)
- Hero gradient: Purple-pink (`from-primary via-purple-500 to-pink-500`)
- Glass: Cool blue-gray gradients (`rgba(30, 46, 63, 0.6)`)

**The problem:** The purple-pink gradient clashes with the cool blue-gray glass. The background is pure black which makes glass cards look like floating gray boxes. There's no accent color tying the gradient to the glass.

**Reference (KPI Quest):**
- Background: Deep navy `#0f172a` → `#1e293b`
- Primary: Teal `#0d9488` / `#14b8a6`
- Glass: Slate-based `rgba(30, 41, 59, 0.5)` with teal accents
- Everything harmonizes because the background, glass, and accent are all in the same cool spectrum

## Architecture / Proposed Approach

Shift from pure black background to a deep navy/slate base. Replace the purple-pink gradient with a teal-to-indigo gradient that matches the glass card undertones. Update the primary color to teal so badges, links, and interactive elements all pull from the same accent pool. The glass cards will then naturally harmonize because they're built from the same color family as the background.

## Step-by-Step Tasks

### Task 1: Update CSS variable theme (dark mode)

**File:** `src/app/globals.css`

Replace the `.dark` class CSS variables (lines 86-118):

**Before:**
```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.87 0 0);
  --chart-2: oklch(0.556 0 0);
  --chart-3: oklch(0.439 0 0);
  --chart-4: oklch(0.371 0 0);
  --chart-5: oklch(0.269 0 0);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}
```

**After:**
```css
.dark {
  --background: oklch(0.12 0.02 250);
  --foreground: oklch(0.98 0.01 250);
  --card: oklch(0.15 0.02 250);
  --card-foreground: oklch(0.98 0.01 250);
  --popover: oklch(0.15 0.02 250);
  --popover-foreground: oklch(0.98 0.01 250);
  --primary: oklch(0.75 0.14 175);
  --primary-foreground: oklch(0.12 0.02 250);
  --secondary: oklch(0.22 0.02 250);
  --secondary-foreground: oklch(0.98 0.01 250);
  --muted: oklch(0.22 0.02 250);
  --muted-foreground: oklch(0.65 0.02 250);
  --accent: oklch(0.22 0.02 250);
  --accent-foreground: oklch(0.98 0.01 250);
  --destructive: oklch(0.65 0.2 25);
  --border: oklch(0.25 0.02 250);
  --input: oklch(0.25 0.02 250);
  --ring: oklch(0.75 0.14 175);
  --chart-1: oklch(0.75 0.14 175);
  --chart-2: oklch(0.65 0.12 200);
  --chart-3: oklch(0.55 0.1 250);
  --chart-4: oklch(0.45 0.08 280);
  --chart-5: oklch(0.35 0.06 310);
  --sidebar: oklch(0.15 0.02 250);
  --sidebar-foreground: oklch(0.98 0.01 250);
  --sidebar-primary: oklch(0.75 0.14 175);
  --sidebar-primary-foreground: oklch(0.12 0.02 250);
  --sidebar-accent: oklch(0.22 0.02 250);
  --sidebar-accent-foreground: oklch(0.98 0.01 250);
  --sidebar-border: oklch(0.25 0.02 250);
  --sidebar-ring: oklch(0.75 0.14 175);
}
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes with no errors.

### Task 2: Update glass card gradients to match new navy background

**File:** `src/app/globals.css`

Replace the `.glass`, `.glass-dark`, and `.glass-strong` classes in `@layer utilities`:

**Before:**
```css
.glass {
  background:
    radial-gradient(ellipse 70% 55% at 8% 0%, rgba(255, 255, 255, 0.08), transparent 60%),
    linear-gradient(145deg, rgba(30, 46, 63, 0.6) 0%, rgba(15, 29, 45, 0.5) 48%, rgba(10, 20, 35, 0.58) 100%);
  ...
}
```

**After:**
```css
.glass {
  background:
    radial-gradient(ellipse 70% 55% at 8% 0%, rgba(255, 255, 255, 0.06), transparent 60%),
    linear-gradient(145deg, rgba(20, 35, 55, 0.65) 0%, rgba(15, 28, 45, 0.55) 48%, rgba(10, 20, 35, 0.6) 100%);
  backdrop-filter: blur(22px) saturate(145%);
  -webkit-backdrop-filter: blur(22px) saturate(145%);
  border: 1px solid rgba(45, 212, 191, 0.12);
  border-radius: var(--radius-lg);
  box-shadow:
    0 22px 45px -24px rgba(0, 0, 0, 0.85),
    0 8px 20px -14px rgba(7, 20, 32, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    inset 0 -1px 0 rgba(1, 8, 15, 0.55);
  position: relative;
}

.glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(
    135deg,
    rgba(45, 212, 191, 0.04) 0%,
    transparent 50%,
    rgba(45, 212, 191, 0.02) 100%
  );
  pointer-events: none;
}

.glass-dark {
  background:
    radial-gradient(ellipse 70% 55% at 8% 0%, rgba(255, 255, 255, 0.05), transparent 60%),
    linear-gradient(145deg, rgba(15, 28, 42, 0.75) 0%, rgba(10, 20, 35, 0.65) 48%, rgba(5, 15, 25, 0.7) 100%);
  backdrop-filter: blur(24px) saturate(150%);
  -webkit-backdrop-filter: blur(24px) saturate(150%);
  border: 1px solid rgba(45, 212, 191, 0.1);
  border-radius: var(--radius-lg);
  box-shadow:
    0 24px 55px -18px rgba(0, 0, 0, 0.9),
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    inset 0 -1px 0 rgba(0, 0, 0, 0.45);
}

.glass-strong {
  background:
    radial-gradient(ellipse 70% 55% at 8% 0%, rgba(255, 255, 255, 0.07), transparent 60%),
    linear-gradient(145deg, rgba(20, 35, 50, 0.8) 0%, rgba(12, 22, 38, 0.7) 48%, rgba(8, 16, 28, 0.75) 100%);
  backdrop-filter: blur(28px) saturate(150%);
  -webkit-backdrop-filter: blur(28px) saturate(150%);
  border: 1px solid rgba(45, 212, 191, 0.15);
  border-radius: var(--radius-lg);
  box-shadow:
    0 26px 52px -26px rgba(0, 0, 0, 0.9),
    0 10px 26px -18px rgba(20, 184, 166, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(1, 8, 15, 0.55);
}

@media (max-width: 768px) {
  .glass-strong {
    background: rgba(10, 18, 30, 0.96);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 3: Update hero gradient to teal-indigo

**File:** `src/app/page.tsx`

Find the hero `h1` (line ~199):
```tsx
<h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 md:mb-3">
```

Replace with:
```tsx
<h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2 md:mb-3">
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 4: Update header gradient to match

**File:** `src/components/collapsing-header.tsx`

Find the header `h1` (line ~57):
```tsx
<h1 className="font-bold leading-tight bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent text-base md:text-lg whitespace-nowrap">
```

Replace with:
```tsx
<h1 className="font-bold leading-tight bg-gradient-to-r from-primary via-cyan-400 to-indigo-400 bg-clip-text text-transparent text-base md:text-lg whitespace-nowrap">
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 5: Update layout background gradient

**File:** `src/app/layout.tsx`

Find the background overlay (line ~26):
```tsx
<div className="fixed inset-0 -z-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(15,15,30,0.4) 0%, rgba(10,10,18,0.7) 100%)' }} />
```

Replace with:
```tsx
<div className="fixed inset-0 -z-5 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(15,25,45,0.3) 0%, rgba(8,15,28,0.6) 100%)' }} />
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 6: Update mobile footer solid background

**File:** `src/app/globals.css`

Find the mobile glass-strong override (line ~227):
```css
@media (max-width: 768px) {
  .glass-strong {
    background: rgba(12, 12, 20, 0.95);
    ...
  }
}
```

Replace with:
```css
@media (max-width: 768px) {
  .glass-strong {
    background: rgba(8, 15, 25, 0.97);
    ...
  }
}
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 7: Commit, build, push

```bash
cd /Users/jim/cv-site && git add -A && git commit -m "Harmonize color scheme: navy background, teal accents, unified gradients" && git push
```

```bash
cd /Users/jim/cv-site && docker build --no-cache -t jimdhope/cv:latest . && docker push jimdhope/cv:latest
```

## Tests / Validation

After each task:
1. `npm run build` passes with no errors
2. `curl -s https://cv.jabi.uk | grep -o '/_next/static/chunks/[^"]*\.css'` shows new CSS hash after deploy
3. Visual check: background should be deep navy (not pure black), glass cards should have subtle teal tint, hero gradient should be teal-cyan-indigo

## Risks, Tradeoffs, and Open Questions

- **Risk:** The teal primary color may look too similar to KPI Quest. Mitigation: the exact hue can be adjusted (more blue or more green).
- **Tradeoff:** Teal-on-dark has lower contrast than white text. Mitigation: using `oklch(0.75 0.14 175)` keeps contrast ratio above 4.5:1 against the navy background.
- **Open:** Should the Three.js animated background colors also shift to teal? Currently it's abstract shapes — may not need changes.
- **Open:** Badge colors use `variant="secondary"` which will now be slightly lighter navy. Verify readability.
