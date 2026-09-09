# Add Accordions to Experience and Education Sections

## Goal
Convert Experience and Education sections into collapsible accordions so users see a compact list when collapsed and full details when expanded.

## Current Context / Assumptions

**Current behavior:**
- Experience: All 9 roles visible with full descriptions — very long page
- Education: All 4 entries visible with module lists — takes lots of space

**Proposed behavior:**
- Experience collapsed: Role, Company, Dates (one line each)
- Experience expanded: Shows full job description
- Education collapsed: School, Title, Grade, Dates
- Education expanded: Shows modules/notes
- Only one accordion open at a time within each section
- Smooth height transition animation

## Architecture / Proposed Approach

Use the same accordion pattern as the Projects section: a `useState` tracking which item is expanded, with `max-h-0` → `max-h-96` transition on the collapsible content. Each card header is clickable to toggle. The description/modules are wrapped in a `div` with `overflow-hidden` and dynamic `max-height`.

## Step-by-Step Tasks

### Task 1: Convert Experience section to accordion

**File:** `src/app/page.tsx`

Replace the Experience section (lines ~345-367):

**Before:**
```tsx
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
```

**After:**
```tsx
{experience.map((exp) => {
  const isExpanded = expandedExp === exp.id;
  return (
    <Card
      key={exp.id}
      className={exp.highlight ? "border-primary/30 glass" : "glass"}
    >
      <CardContent className="pt-6">
        <button
          onClick={() => setExpandedExp(isExpanded ? null : exp.id)}
          className="w-full text-left"
          aria-expanded={isExpanded}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
            <h3 className="font-semibold">{exp.role}</h3>
            <span className="text-sm text-muted-foreground font-mono">{exp.dates}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-primary">{exp.company}</span>
            <Badge variant="outline" className="text-xs">{exp.location}</Badge>
            <ChevronDown className={`w-4 h-4 ml-auto transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 mt-3' : 'max-h-0'}`}>
          <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
        </div>
      </CardContent>
    </Card>
  );
})}
```

Add state at the top of the component:
```tsx
const [expandedExp, setExpandedExp] = useState<string | null>(null);
```

Add `ChevronDown` to imports:
```tsx
import { Mail, Download, BookOpen, Music, Container, Wrench, ChevronDown } from "lucide-react";
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 2: Convert Education section to accordion

**File:** `src/app/page.tsx`

Replace the Education section (lines ~369-398):

**Before:**
```tsx
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
```

**After:**
```tsx
{education.map((edu) => {
  const isExpanded = expandedEdu === edu.school;
  const hasModules = edu.modules && Object.keys(edu.modules).length > 0;
  return (
    <Card key={edu.school} className="glass">
      <CardContent className="pt-6">
        <button
          onClick={() => setExpandedEdu(isExpanded ? null : edu.school)}
          className="w-full text-left"
          aria-expanded={isExpanded}
        >
          <div className="text-xs text-primary font-mono mb-1">{edu.dates}</div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{edu.title}{edu.grade && <> — <span className="text-green-500">{edu.grade}</span></>}</h3>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
          <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] mt-3' : 'max-h-0'}`}>
          {edu.note && <p className="text-sm text-muted-foreground mb-3">{edu.note}</p>}
          {hasModules && (
            <div className="space-y-2 overflow-y-auto max-h-80">
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
        </div>
      </CardContent>
    </Card>
  );
})}
```

Add state:
```tsx
const [expandedEdu, setExpandedEdu] = useState<string | null>(null);
```

**Verification:**
```bash
cd /Users/jim/cv-site && npm run build 2>&1 | tail -5
```
Expected: Build passes.

### Task 3: Commit, build, push

```bash
cd /Users/jim/cv-site && git add -A && git commit -m "Add accordions to Experience and Education sections" && git push
```

```bash
cd /Users/jim/cv-site && docker build --no-cache -t jimdhope/cv:latest . && docker push jimdhope/cv:latest
```

## Tests / Validation

After deploy:
1. Experience section shows compact list of roles
2. Click a role — expands to show description
3. Click another role — previous collapses, new one expands
4. Education section shows compact list of schools
5. Click a school — expands to show modules
6. Smooth animation on expand/collapse

## Risks, Tradeoffs, and Open Questions

- **Risk:** Long module lists may overflow. Mitigation: `max-h-80` with scroll.
- **Tradeoff:** Extra click required to see details. Mitigation: First item could be expanded by default.
- **Open:** Should the first experience/education item be expanded by default?
