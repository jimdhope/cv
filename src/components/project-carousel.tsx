"use client";

import { useState, useEffect, useCallback } from "react";
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

function KPIMockup() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-primary/25 bg-background/70 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="flex flex-col gap-3 border-b border-white/10 bg-white/[0.035] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-2 text-xs text-muted-foreground">Dashboard preview · fictional data</span>
        </div>
        <div className="inline-flex w-fit rounded-lg border border-white/10 bg-black/20 p-1">
          <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">agent view</button>
          <button className="rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">admin view</button>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold sm:text-xl">Welcome back, Jordan!</h2>
        </div>
        <div className="grid items-start gap-3 lg:grid-cols-3">
          <div className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] shadow-lg shadow-black/10">
            <div className="border-b border-white/8 p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="rounded-lg bg-white/5 p-1.5">
                    <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" /><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" /><path d="M18 9h1.5a1 1 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" /><path d="M6 9H4.5a1 1 0 0 1 0-5H6" /></svg>
                  </div>
                  <h3 className="truncate text-xs font-semibold">Competitions</h3>
                </div>
                <span className="rounded border border-white/10 px-2 py-1 text-[9px] text-muted-foreground">Summer Sprint</span>
              </div>
            </div>
            <div className="p-3">
              <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">Team Standings</p>
              <div className="w-full text-[9px]">
                <div className="grid border-b border-white/8 bg-white/[0.035] font-semibold uppercase text-muted-foreground" style={{ gridTemplateColumns: "1.5rem repeat(2, minmax(0, 1fr))" }}>
                  <span className="px-1.5 py-2">#</span>
                  <span className="px-1.5 py-2">Team</span>
                  <span className="px-1.5 py-2 text-right">Score</span>
                </div>
                <div className="grid items-center border-b border-white/5" style={{ gridTemplateColumns: "1.5rem repeat(2, minmax(0, 1fr))" }}>
                  <span className="truncate px-1.5 py-2"><svg className="h-3.5 w-3.5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2.2" /><path d="m13 12 5.88-9.8" /><path d="M8 7h8" /><circle cx="12" cy="17" r="5" /></svg></span>
                  <span className="truncate px-1.5 py-2">Momentum Makers</span>
                  <span className="truncate px-1.5 py-2 text-right font-semibold">3,420</span>
                </div>
                <div className="grid items-center border-b border-white/5 bg-primary/10 text-primary" style={{ gridTemplateColumns: "1.5rem repeat(2, minmax(0, 1fr))" }}>
                  <span className="truncate px-1.5 py-2"><svg className="h-3.5 w-3.5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2.2" /><path d="m13 12 5.88-9.8" /><path d="M8 7h8" /><circle cx="12" cy="17" r="5" /></svg></span>
                  <span className="truncate px-1.5 py-2">Northern Lights</span>
                  <span className="truncate px-1.5 py-2 text-right font-semibold">3,180</span>
                </div>
                <div className="grid items-center border-b border-white/5" style={{ gridTemplateColumns: "1.5rem repeat(2, minmax(0, 1fr))" }}>
                  <span className="truncate px-1.5 py-2"><svg className="h-3.5 w-3.5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2.2" /><path d="m13 12 5.88-9.8" /><path d="M8 7h8" /><circle cx="12" cy="17" r="5" /></svg></span>
                  <span className="truncate px-1.5 py-2">Trailblazers</span>
                  <span className="truncate px-1.5 py-2 text-right font-semibold">2,940</span>
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] shadow-lg shadow-black/10">
            <div className="border-b border-white/8 p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="rounded-lg bg-white/5 p-1.5">
                    <svg className="h-3.5 w-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-semibold">Performance</h3>
                    <p className="truncate text-[9px] text-muted-foreground">6-week KPI breakdown</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-white/8 bg-white/[0.065] px-3 py-2 text-[10px] font-semibold">Jordan Lee</div>
            <div className="overflow-hidden p-2">
              <div className="grid grid-cols-[1.2fr_repeat(4,0.7fr)_0.8fr] bg-white/[0.035] text-[8px] font-bold uppercase text-muted-foreground">
                <span className="px-1 py-2 text-center first:text-left last:border-l last:border-primary/40 last:text-primary">KPI</span>
                <span className="px-1 py-2 text-center first:text-left last:border-l last:border-primary/40 last:text-primary">09/06</span>
                <span className="px-1 py-2 text-center first:text-left last:border-l last:border-primary/40 last:text-primary">16/06</span>
                <span className="px-1 py-2 text-center first:text-left last:border-l last:border-primary/40 last:text-primary">23/06</span>
                <span className="px-1 py-2 text-center first:text-left last:border-l last:border-primary/40 last:text-primary">30/06</span>
                <span className="px-1 py-2 text-center first:text-left last:border-l last:border-primary/40 last:text-primary">AVG</span>
              </div>
              <div className="grid grid-cols-[1.2fr_repeat(4,0.7fr)_0.8fr] text-[8px]">
                <span className="truncate px-1 py-2 font-semibold">Quality</span>
                <span className="border-l border-white/5 px-1 py-2 text-center">89%</span>
                <span className="border-l border-white/5 px-1 py-2 text-center">91%</span>
                <span className="border-l border-white/5 px-1 py-2 text-center">94%</span>
                <span className="border-l border-white/5 px-1 py-2 text-center">92%</span>
                <span className="border-l border-primary/40 bg-primary/5 px-1 py-2 text-center font-bold text-primary">91.5%</span>
              </div>
              <div className="grid grid-cols-[1.2fr_repeat(4,0.7fr)_0.8fr] text-[8px] bg-white/[0.025]">
                <span className="truncate px-1 py-2 font-semibold">Resolution</span>
                <span className="border-l border-white/5 px-1 py-2 text-center">82%</span>
                <span className="border-l border-white/5 px-1 py-2 text-center">84%</span>
                <span className="border-l border-white/5 px-1 py-2 text-center">87%</span>
                <span className="border-l border-white/5 px-1 py-2 text-center">90%</span>
                <span className="border-l border-primary/40 bg-primary/5 px-1 py-2 text-center font-bold text-primary">85.8%</span>
              </div>
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.045] shadow-lg shadow-black/10">
            <div className="border-b border-white/8 p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <div className="rounded-lg bg-white/5 p-1.5">
                    <svg className="h-3.5 w-3.5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="6" x2="10" y1="11" y2="11" /><line x1="8" x2="8" y1="9" y2="13" /><line x1="15" x2="15.01" y1="12" y2="12" /><line x1="18" x2="18.01" y1="10" y2="10" /><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" /></svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-xs font-semibold">Mini Games</h3>
                    <p className="truncate text-[9px] text-muted-foreground">Top scores for each game</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3 p-3">
              <div>
                <div className="mb-1 flex justify-between border-b border-white/8 pb-1.5 text-[9px]">
                  <span className="font-semibold">Daily Word</span>
                  <span className="uppercase text-muted-foreground">Guesses</span>
                </div>
                <div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-1 rounded px-1 py-1.5 text-[9px]">
                  <svg className="h-3.5 w-3.5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2.2" /><path d="m13 12 5.88-9.8" /><path d="M8 7h8" /><circle cx="12" cy="17" r="5" /></svg>
                  <span>Morgan Reed</span>
                  <strong>3</strong>
                </div>
                <div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-1 rounded bg-purple-500/15 px-1 py-1.5 text-[9px] text-purple-300">
                  <svg className="h-3.5 w-3.5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2.2" /><path d="m13 12 5.88-9.8" /><path d="M8 7h8" /><circle cx="12" cy="17" r="5" /></svg>
                  <span>You</span>
                  <strong>4</strong>
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between border-b border-white/8 pb-1.5 text-[9px]">
                  <span className="font-semibold">Higher or Lower</span>
                  <span className="uppercase text-muted-foreground">Streak</span>
                </div>
                <div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-1 rounded px-1 py-1.5 text-[9px]">
                  <svg className="h-3.5 w-3.5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2.2" /><path d="m13 12 5.88-9.8" /><path d="M8 7h8" /><circle cx="12" cy="17" r="5" /></svg>
                  <span>Morgan Reed</span>
                  <strong>18</strong>
                </div>
                <div className="grid grid-cols-[1.5rem_1fr_auto] items-center gap-1 rounded bg-purple-500/15 px-1 py-1.5 text-[9px] text-purple-300">
                  <svg className="h-3.5 w-3.5 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2.2" /><path d="m13 12 5.88-9.8" /><path d="M8 7h8" /><circle cx="12" cy="17" r="5" /></svg>
                  <span>You</span>
                  <strong>15</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolsMockup() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: "Instalment Plan", icon: "calendar-days" },
    { name: "Energy Usage", icon: "zap" },
    { name: "Burns Test", icon: "flame" },
    { name: "Dual Fuel", icon: "infinity" },
  ];
  const balance = 1200;
  const usage = 100;
  const plans = [
    { months: 12, amount: (balance / 12).toFixed(2) },
    { months: 18, amount: (balance / 18).toFixed(2) },
    { months: 24, amount: (balance / 24).toFixed(2) },
  ];
  const selectedPlan = plans[0];
  const totalMonthly = (parseFloat(selectedPlan.amount) + usage).toFixed(2);
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-primary/25 bg-background/70 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 text-xs text-muted-foreground">Useful Tools</span>
      </div>
      <div className="p-4 sm:p-6">
        <nav className="mb-6 flex flex-wrap gap-2 rounded-lg bg-muted p-1.5" aria-label="Useful tools menu">
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(i)}
              className={`flex-col sm:flex-row items-center gap-2 py-2.5 px-3 text-xs sm:text-sm inline-flex whitespace-nowrap rounded-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex-1 min-w-[140px] justify-center ${
                activeTab === i
                  ? "bg-background text-foreground shadow-sm"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {tab.icon === "calendar-days" && (<><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /></>)}
                {tab.icon === "zap" && <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />}
                {tab.icon === "flame" && <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />}
                {tab.icon === "infinity" && <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />}
                {tab.icon === "file-check-2" && (<><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m3 15 2 2 4-4" /></>)}
                {tab.icon === "phone" && <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />}
                {tab.icon === "book-open" && (<><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></>)}
                {tab.icon === "tv" && (<><rect width="20" height="15" x="2" y="7" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></>)}
              </svg>
              {tab.name}
            </button>
          ))}
        </nav>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
          <div className="xl:col-span-3">
            <div className="rounded-lg border bg-card text-card-foreground w-full shadow-lg">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-3">{tabs[activeTab].name}</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Current Balance</label>
                    <input className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm mt-1" value={`£${balance}`} readOnly />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Monthly Usage</label>
                    <input className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm mt-1" value={`£${usage}`} readOnly />
                  </div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-1 w-full">
                  Calculate
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-1">
            <div className="rounded-lg border bg-card text-card-foreground w-full shadow-lg xl:sticky xl:top-6">
              <div className="flex flex-col space-y-1.5 p-4">
                <h3 className="font-semibold tracking-tight text-sm flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Results
                </h3>
              </div>
              <div className="px-4 pb-4 pt-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Suggested Plans</p>
                {plans.map((plan) => (
                  <div key={plan.months} className="flex justify-between items-center gap-2 py-1">
                    <span className="text-xs text-muted-foreground">{plan.months} Months</span>
                    <span className="text-xs font-semibold whitespace-nowrap">£{plan.amount}/mo</span>
                  </div>
                ))}
                <div className="shrink-0 bg-border h-[1px] w-full my-2" />
                <div className="flex justify-between items-center gap-2 py-1">
                  <span className="text-xs text-muted-foreground">Total Monthly</span>
                  <span className="text-xs font-semibold whitespace-nowrap text-primary">£{totalMonthly}</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1">
                  <span className="text-xs text-muted-foreground">Start</span>
                  <span className="text-xs font-semibold whitespace-nowrap">01-10-2026</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1">
                  <span className="text-xs text-muted-foreground">End</span>
                  <span className="text-xs font-semibold whitespace-nowrap">01-09-2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapMockup() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-primary/25 bg-background/70 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-2 sm:flex-nowrap">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-1 text-[10px] text-muted-foreground">UK Power Cut Map</span>
        <div className="ml-auto flex items-center gap-1">
          <span className="rounded border border-white/10 bg-white/[0.045] px-1.5 py-0.5 text-[8px] font-semibold text-red-400">162 Live</span>
          <span className="rounded border border-white/10 bg-white/[0.045] px-1.5 py-0.5 text-[8px] font-semibold text-yellow-400">39 Planned</span>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="relative rounded-xl border border-white/10 bg-white/[0.035] h-56 overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 400 240" className="w-full h-full" preserveAspectRatio="none">
                  <path d="M60,40 Q100,20 140,50 Q180,30 220,60 Q260,40 300,70 Q340,50 360,90 L370,150 Q340,180 300,170 Q260,200 220,180 Q180,210 140,190 Q100,200 80,170 Q50,180 40,150 Q30,120 50,90 Q40,60 60,40 Z" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/50" />
                  <path d="M120,80 Q160,60 200,90 Q240,70 280,100 Q300,80 320,110 L330,150 Q300,160 270,150 Q240,170 210,155 Q180,165 150,150 Q120,160 110,140 Q100,120 120,80 Z" fill="currentColor" className="text-primary/20" />
                </svg>
              </div>
              <div className="absolute top-8 left-12 w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/60 ring-2 ring-purple-300/30" />
              <div className="absolute top-16 left-28 w-5 h-5 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/60 ring-2 ring-cyan-300/30" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-10 right-20 w-6 h-6 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/60 ring-2 ring-red-300/30" style={{ animationDelay: "1s" }}>
                <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-white">25</span>
              </div>
              <div className="absolute bottom-14 left-20 w-4 h-4 bg-amber-500 rounded-full animate-pulse shadow-lg shadow-amber-500/60 ring-2 ring-amber-300/30" style={{ animationDelay: "1.5s" }} />
              <div className="absolute bottom-10 right-14 w-5 h-5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/60 ring-2 ring-green-300/30" style={{ animationDelay: "2s" }}>
                <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-white">43</span>
              </div>
              <div className="absolute top-24 left-1/2 w-7 h-7 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/60 ring-2 ring-red-300/30" style={{ animationDelay: "0.7s" }}>
                <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-white">118</span>
              </div>
              <div className="absolute bottom-3 right-3 rounded bg-black/60 px-1.5 py-0.5 text-[7px] text-white/70">Leaflet · OSM</div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] px-2 py-0.5 text-[8px]"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />National Grid</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] px-2 py-0.5 text-[8px]"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />SSEN</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] px-2 py-0.5 text-[8px]"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Northern Powergrid</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] px-2 py-0.5 text-[8px]"><span className="w-1.5 h-1.5 rounded-full bg-red-500" />UK Power Networks</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] px-2 py-0.5 text-[8px]"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />SP Energy</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] px-2 py-0.5 text-[8px]"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Elec NW</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-semibold">NR34 7; NR34 8</span>
                <span className="rounded-full bg-red-500/20 px-1.5 py-0.5 text-[7px] font-semibold text-red-400">Unplanned</span>
              </div>
              <div className="text-[8px] text-muted-foreground">BROADLAND · Started 14:42</div>
              <div className="mt-1 flex items-center gap-2 text-[8px]">
                <span className="text-muted-foreground">Cust: <strong className="text-foreground">—</strong></span>
                <span className="text-muted-foreground">Est: <strong className="text-foreground">—</strong></span>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-semibold">DD11 1LZ</span>
                <span className="rounded-full bg-red-500/20 px-1.5 py-0.5 text-[7px] font-semibold text-red-400">Unplanned</span>
              </div>
              <div className="text-[8px] text-muted-foreground">Arbroath · Started 13:47</div>
              <div className="mt-1 flex items-center gap-2 text-[8px]">
                <span className="text-muted-foreground">Cust: <strong className="text-foreground">22</strong></span>
                <span className="text-muted-foreground">Est: <strong className="text-foreground">—</strong></span>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-semibold">DN40 3PJ</span>
                <span className="rounded-full bg-amber-500/20 px-1.5 py-0.5 text-[7px] font-semibold text-amber-400">On-Site</span>
              </div>
              <div className="text-[8px] text-muted-foreground">Immingham · Started 14:02</div>
              <div className="mt-1 flex items-center gap-2 text-[8px]">
                <span className="text-muted-foreground">Cust: <strong className="text-foreground">29</strong></span>
                <span className="text-muted-foreground">Est: <strong className="text-foreground">17:03</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpotifyMockup() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-primary/25 bg-background/70 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 text-xs text-muted-foreground">WP Spotify Connect · webOS Bridge</span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-xl shadow-lg overflow-hidden">
                  <img src="/singularity-suite.png" alt="Singularity Suite" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate">Singularity Suite</div>
                  <div className="text-[10px] text-muted-foreground">AI · Collaboration</div>
                  <div className="text-[10px] text-green-500 mt-0.5">Currently Playing</div>
                </div>
                <div className="flex gap-0.5 items-end h-6">
                  <div className="w-1 bg-green-500 rounded-full animate-pulse" style={{ height: "60%" }} />
                  <div className="w-1 bg-green-500 rounded-full animate-pulse" style={{ height: "100%", animationDelay: "0.1s" }} />
                  <div className="w-1 bg-green-500 rounded-full animate-pulse" style={{ height: "40%", animationDelay: "0.2s" }} />
                  <div className="w-1 bg-green-500 rounded-full animate-pulse" style={{ height: "80%", animationDelay: "0.3s" }} />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-green-500 rounded-full" />
                </div>
                <span className="text-[10px] text-muted-foreground shrink-0">2:34 / 3:47</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-full bg-white/[0.065] p-2 hover:bg-white/[0.1] transition-colors">
                  <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                </button>
                <button className="rounded-full bg-white/[0.065] p-2 hover:bg-white/[0.1] transition-colors">
                  <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                </button>
                <button className="rounded-full bg-white/[0.065] p-2 hover:bg-white/[0.1] transition-colors">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                </button>
                <div className="ml-auto flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5">
                  <svg className="w-3 h-3 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 3l14 9-14 9V3z" /></svg>
                  <span className="text-[9px] font-semibold text-green-500">Connected</span>
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.035] p-3">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M12 2v20" /></svg>
                <span className="text-[10px] font-semibold">Available Devices</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 p-2">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-[10px] font-bold overflow-hidden shrink-0">
                    <img src="/singularity-suite.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold truncate">Living Room · webOS</div>
                    <div className="text-[8px] text-green-500">WordPress — Active</div>
                  </div>
                  <span className="text-[7px] text-green-500 font-semibold uppercase">Now Playing</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/[0.035] border border-white/10 p-2">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-[10px] font-bold">📱</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold truncate">Pixel 7</div>
                    <div className="text-[8px] text-muted-foreground">Android</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                <span className="text-[8px] font-semibold">webOS Context</span>
              </div>
              <div className="text-[8px] text-muted-foreground mb-1">Screensaver running · WordPress app</div>
              <div className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] text-green-500">WP site visible as Spotify device</span>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg className="w-3 h-3 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68 1.65 1.65 0 0 0 10 3.17V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                <span className="text-[8px] font-semibold">WordPress Bridge</span>
              </div>
              <div className="text-[8px] text-muted-foreground mb-1">PHP plugin registers WP as Spotify Connect endpoint</div>
              <div className="rounded bg-black/20 px-1.5 py-1 text-[7px] font-mono text-green-400">wp_spotify_connect_register();</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg className="w-3 h-3 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <span className="text-[8px] font-semibold">Use Case</span>
              </div>
              <div className="text-[8px] text-muted-foreground">Build screensavers on webOS that play music simultaneously</div>
              <div className="mt-1.5 flex items-center gap-1">
                <span className="rounded bg-purple-500/20 px-1 py-0.5 text-[7px] text-purple-300 font-semibold">webOS</span>
                <span className="rounded bg-blue-500/20 px-1 py-0.5 text-[7px] text-blue-300 font-semibold">WordPress</span>
                <span className="rounded bg-green-500/20 px-1 py-0.5 text-[7px] text-green-300 font-semibold">Spotify</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TVMockup() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-primary/25 bg-background/70 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 text-xs text-muted-foreground">LG WebOS Plugin · WP Remote Navigation</span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.035] overflow-hidden">
              <div className="bg-black/40 px-3 py-1.5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                </div>
                <span className="text-[8px] text-muted-foreground font-mono">http://192.168.1.42</span>
                <div className="w-12" />
              </div>
              <div className="p-4">
                <div className="text-center mb-3">
                  <div className="text-sm font-bold text-foreground">My WordPress Site</div>
                  <div className="text-[10px] text-muted-foreground">Running as webOS App</div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 p-2 cursor-pointer">
                    <span className="text-[10px] font-semibold text-primary">Home</span>
                    <span className="ml-auto text-[8px] text-primary/60">▸</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] p-2">
                    <span className="text-[10px] font-semibold">About</span>
                    <span className="ml-auto text-[8px] text-muted-foreground">▸</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] p-2">
                    <span className="text-[10px] font-semibold">Blog</span>
                    <span className="ml-auto text-[8px] text-muted-foreground">▸</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] p-2">
                    <span className="text-[10px] font-semibold">Projects</span>
                    <span className="ml-auto text-[8px] text-muted-foreground">▸</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.045] p-2">
                    <span className="text-[10px] font-semibold">Contact</span>
                    <span className="ml-auto text-[8px] text-muted-foreground">▸</span>
                  </div>
                </div>
                <div className="mt-3 rounded-lg bg-white/[0.035] p-2.5">
                  <div className="text-[10px] text-muted-foreground mb-1">Latest Post</div>
                  <div className="text-[10px] font-semibold">Building a Smart Home with Home Assistant</div>
                  <div className="text-[8px] text-muted-foreground mt-1">March 2025 · 5 min read</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                <span className="text-[8px] font-semibold">LG Magic Remote</span>
              </div>
              <div className="text-[8px] text-muted-foreground mb-1">Directional pad mapped to WP nav</div>
              <div className="flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] text-green-500">OK / Back keys active</span>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg className="w-3 h-3 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M12 2v20" /></svg>
                <span className="text-[8px] font-semibold">Key Mapping</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px]">
                  <span className="text-muted-foreground">Up / Down</span>
                  <span className="text-foreground font-mono">Scroll</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span className="text-muted-foreground">Left / Right</span>
                  <span className="text-foreground font-mono">Focus prev/next</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span className="text-muted-foreground">OK</span>
                  <span className="text-foreground font-mono">Click link</span>
                </div>
                <div className="flex justify-between text-[8px]">
                  <span className="text-muted-foreground">Back</span>
                  <span className="text-foreground font-mono">history.back()</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <svg className="w-3 h-3 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                <span className="text-[8px] font-semibold">Use Case</span>
              </div>
              <div className="text-[8px] text-muted-foreground">Navigate any WordPress site on a TV without a mouse or keyboard</div>
              <div className="mt-1.5 flex items-center gap-1">
                <span className="rounded bg-purple-500/20 px-1 py-0.5 text-[7px] text-purple-300 font-semibold">webOS</span>
                <span className="rounded bg-blue-500/20 px-1 py-0.5 text-[7px] text-blue-300 font-semibold">WordPress</span>
                <span className="rounded bg-orange-500/20 px-1 py-0.5 text-[7px] text-orange-300 font-semibold">TV Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockups: Record<string, React.FC> = {
  kpi: KPIMockup,
  tools: ToolsMockup,
  map: MapMockup,
  spotify: SpotifyMockup,
  tv: TVMockup,
};

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openProject, setOpenProject] = useState<Project | null>(null);
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

  // Auto-scroll every 5 seconds, pause on hover
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

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
              const Mockup = mockups[project.mockup];
              return (
                <div key={project.name} className="flex-[0_0_100%] min-w-0 px-12">
                  <Card className="mx-auto max-w-3xl glass">
                    <CardContent className="pt-6">
                      <div className="mb-4 min-h-[400px]">
                        {Mockup && <Mockup />}
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
        <DialogContent className="max-w-lg glass">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">{openProject?.emoji}</span>
              {openProject?.name}
            </DialogTitle>
            <DialogDescription className="text-base text-foreground pt-2">
              {openProject?.detail}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-between pt-4">
            <Badge variant="secondary">{openProject?.tech}</Badge>
            <Button size="sm" variant="outline">
              <a href={openProject?.url} target="_blank" rel="noopener" className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3" aria-hidden="true" /> View on GitHub
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
