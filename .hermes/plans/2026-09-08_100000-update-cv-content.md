# Plan: Update CV Website Content to Match Current CV

## Goal
Update the portfolio website's content to accurately reflect James Hope's current CV, correcting dates, adding missing roles/education, updating descriptions, and removing outdated information.

## Current Context / Assumptions
- Next.js 16 App Router site at `/Users/jim/cv-site`
- Main content file: `src/app/page.tsx`
- Header component: `src/components/collapsing-header.tsx`
- Current website has: About Me, Projects (carousel), Beyond Work, Experience, Education, Skills, Contact
- CV provided by user shows updated experience, education, skills, and a profile statement
- User will handle PDF creation separately — this plan covers website content only

## Architecture / Proposed Approach
Update `src/app/page.tsx` data arrays (experience, education, skills) and About Me text to match the new CV. Add new sections (Other Qualifications) and remove outdated ones. Update header subtitle to reflect "Product Trainer" rather than "Creative Technologist."

## Step-by-Step Tasks

### Task 1: Update header subtitle
**File**: `src/components/collapsing-header.tsx`

Change subtitle from "Customer Service Assistant · Creative Technologist" to "Customer Service Agent · Product Trainer"

```typescript
// Line ~78
<p className="text-muted-foreground mt-0.5 mb-0">
  Customer Service Agent · Product Trainer
</p>
```

**Verification**: `npm run build` passes

### Task 2: Update About Me / Profile section
**File**: `src/app/page.tsx`

Replace the current About Me text (lines 128-137) with the CV's profile statement:

```tsx
<CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
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
</CardContent>
```

**Verification**: `npm run build` passes

### Task 3: Update Experience array
**File**: `src/app/page.tsx`

Replace the `experience` array (lines 60-66) with updated roles from CV:

```typescript
const experience = [
  { 
    role: "Customer Service Agent / Former Client Trainer", 
    company: "Sigma Connected", 
    dates: "2021 – Present", 
    location: "Remote", 
    bullets: [
      "Support vulnerable customers with their energy accounts, including updating information, setting up plans, and addressing enquiries and complaints", 
      "As Client Trainer: onboarded new team members, developed training materials, delivered sessions, and ensured they meet business and client expectations"
    ] 
  },
  { 
    role: "Customer Service Agent (Outbound)", 
    company: "Sitel", 
    dates: "2020 – 2021", 
    location: "Remote", 
    bullets: [
      "Proactively reached out to clients on behalf of the organisation, gathering essential information and offering relevant guidance",
      "Collaborated closely with management to ensure team received strong support and played a key role in sustaining team morale following challenging interactions"
    ] 
  },
  { 
    role: "Assistant Store Manager", 
    company: "Vodafone", 
    dates: "2020", 
    location: "Bridlington", 
    bullets: [
      "Supported the Store Manager by training and managing team members, conducting stock counts, and ensuring excellent customer service",
      "Held key holder responsibilities, including opening and closing the store, performing security checks, and reporting faults"
    ] 
  },
  { 
    role: "Hotel/Restaurant Manager", 
    company: "The Star Inn", 
    dates: "2019 – 2020", 
    location: "Bridlington", 
    bullets: [
      "Oversaw the hotel and restaurant's smooth operation, led and coordinated teams to provide exceptional guest experiences",
      "Managed daily operations, implemented high service standards, ensured effective communication across departments, and maintained rigorous quality control"
    ] 
  },
  { 
    role: "Cinema Customer Assistant / Theatre Technician", 
    company: "Parkway Cinema", 
    dates: "2017 – 2018", 
    location: "Beverley", 
    bullets: [
      "Provided exceptional customer service by selling tickets, serving refreshments, guiding patrons, and maintaining a clean environment",
      "Assisted clients with technical support for lighting, sound, and audiovisual equipment to ensure smooth event execution"
    ] 
  },
  { 
    role: "Customer Assistant", 
    company: "Clarks", 
    dates: "2017", 
    location: "Beverley", 
    bullets: [
      "Assisted customers in selecting appropriate footwear and accessories, expanded product knowledge and product care techniques",
      "Maintained well-stocked and visually appealing displays"
    ] 
  },
  { 
    role: "Front Line Agent", 
    company: "1st Locate", 
    dates: "2016 – 2017", 
    location: "Scarborough", 
    bullets: [
      "Served a diverse range of clients in a debt collection role, focusing on maintaining a professional company image during phone interactions",
      "Addressed customer enquiries, resolved issues efficiently, and established suitable payment plans"
    ] 
  },
  { 
    role: "Customer Assistant", 
    company: "Tesco Superstore", 
    dates: "2011 – 2016", 
    location: "Bridlington", 
    bullets: [
      "Provided friendly and helpful service to customers in a busy supermarket",
      "Responsible for stock rotation, supporting warehouse staff with deliveries, and ensuring aisles were kept clean and tidy",
      "Worked as part of a team to hit sales targets and make the store a success"
    ] 
  },
  { 
    role: "Venue Technician", 
    company: "The Spa", 
    dates: "2007 – 2010", 
    location: "Bridlington", 
    highlight: true,
    bullets: [
      "Managed lighting, sound, and AV equipment for clients leasing the theatre, royal hall, and conference rooms",
      "Oversaw events from conception to completion, provided detailed briefs, designed lighting layouts, programmed and operated equipment",
      "Managed rigging and de-rigging, ensured compliance with health and safety procedures, and accommodated client requests"
    ] 
  },
];
```

**Verification**: `npm run build` passes

### Task 4: Update Education array
**File**: `src/app/page.tsx`

Replace the `education` array (lines 68-100) with updated entries from CV:

```typescript
const education = [
  { 
    school: "East Riding College, Beverley", 
    dates: "2016 – 2019", 
    title: "BA in Contemporary Media, Design & Production", 
    grade: "2:1", 
    note: "", 
    modules: {} 
  },
  { 
    school: "Reid Kerr College, Paisley", 
    dates: "2005 – 2006", 
    title: "HNC in Production & Technical Theatre", 
    grade: "Merit", 
    note: "", 
    modules: {} 
  },
  { 
    school: "Ayr College, Ayr", 
    dates: "2004 – 2005", 
    title: "NQ2 Performing Arts", 
    grade: "Pass", 
    note: "", 
    modules: {} 
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
```

**Verification**: `npm run build` passes

### Task 5: Add Other Qualifications section
**File**: `src/app/page.tsx`

Add a new section after Education (before Skills):

```tsx
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
```

**Verification**: `npm run build` passes

### Task 6: Update Skills array
**File**: `src/app/page.tsx`

Replace the `allSkills` array (line 102) with CV skills:

```typescript
const allSkills = [
  "Microsoft Office Suite", 
  "Basic Web Design (HTML & CSS)", 
  "WordPress Website Setup & Operation", 
  "Lighting, Sound & AV for Events", 
  "Adobe Photoshop", 
  "Adobe Premiere", 
  "Online Live Streaming (OBS & MimoLive)"
];
```

**Verification**: `npm run build` passes

### Task 7: Keep Beyond Work and Projects sections
**No changes needed** — Both sections remain as-is on the website. The Projects carousel and Beyond Work cards (Author, Music, Blog, Creative Tech) are portfolio content that complements the CV without conflicting with it.

## Tests / Validation
1. Run `npm run build` after each change — must pass with no errors
2. Start dev server: `npm run dev`
3. Open `http://localhost:3000` and verify:
   - Header shows "Customer Service Agent · Product Trainer"
   - About Me shows new profile text
   - Experience shows all 9 roles in correct order
   - Education shows 4 entries with correct dates/grades
   - Other Qualifications section appears
   - Skills shows 7 items (not 28)
4. Press ⌘+P to verify print output is ~2 A4 pages with black text

## Risks, Tradeoffs, and Open Questions
- **Risk**: More experience entries may push print output beyond 2 pages. Mitigation: Print CSS already has tight spacing; can further reduce if needed.
- **Tradeoff**: Removing Beyond Work section loses the "Author/Music/Blog" content. Can be re-added as a simple "Interests" line if desired.
- **Open Q**: Should the Projects carousel be kept on the website even though it's not on the CV? (Recommendation: keep it — it's a portfolio site, not just a CV)
- **Open Q**: Should the "AI to bring ideas to life" paragraph be kept in About Me? (CV doesn't mention it but it's relevant to the portfolio)
