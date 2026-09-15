import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sigil } from "@/components/sigil";
import {
  FEATURES,
  FILES,
  GITHUB,
  INSTALL,
  LEFT_ALONE,
  MODULE,
  RELEASES,
  REQUIREMENTS,
  SUBMODULE_XML,
} from "@/lib/merge";
import { formatBytes } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="relative min-h-dvh bg-bg text-fg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-12deg, transparent, transparent 11px, color-mix(in oklab, var(--color-fg) 4%, transparent) 11px, color-mix(in oklab, var(--color-fg) 4%, transparent) 12px)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 42%)",
        }}
      />
      <Header />
      <main>
        <Hero />
        <Releases />
        <Features />
        <Forge />
        <Install />
        <Credits />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-fg">
          <Sigil className="size-7 text-steel" />
          <span className="font-display text-sm tracking-(--tracking-display)">
            One Skip
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          <a href="#releases" className="hover:text-fg">
            Releases
          </a>
          <a href="#features" className="hover:text-fg">
            Skips
          </a>
          <a href="#install" className="hover:text-fg">
            Install
          </a>
        </nav>
        <Button asChild size="sm" variant="primary">
          <a href={MODULE.zip} download={MODULE.zipName}>
            <Download />
            Download
          </a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
      <p
        className="rise font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase"
        style={{ animationDelay: "40ms" }}
      >
        Bannerlord module · {MODULE.version}
      </p>
      <div className="mt-5 grid min-w-0 items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="min-w-0">
          <h1
            className="rise font-display text-3xl leading-tight font-semibold tracking-(--tracking-display) text-balance"
            style={{ animationDelay: "80ms" }}
          >
            Splash and the
            <br />
            campaign cinematic.
          </h1>
          <p
            className="rise mt-5 max-w-xl text-base leading-(--leading-normal) text-muted"
            style={{ animationDelay: "140ms" }}
          >
            One folder. One DLL named OneSkip.dll. You hit the menu, and a new
            campaign does not play the intro reel. Character creation and the
            tutorial stay. Harmony must be enabled above this module.
          </p>
          <div
            className="rise mt-8 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "200ms" }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={MODULE.zip} download={MODULE.zipName}>
                <Download />
                Download v1.3.1 zip
              </a>
            </Button>
            <p className="font-mono text-xs text-subtle">
              {formatBytes(MODULE.zipBytes)} · delete the old folder first
            </p>
          </div>
          <HashRow />
        </div>
        <ModuleCard />
      </div>
    </section>
  );
}

function HashRow() {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className="rise mt-8 flex min-w-0 items-start gap-3 border-t border-line pt-5"
      style={{ animationDelay: "260ms" }}
    >
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium tracking-(--tracking-kicker) text-subtle uppercase">
          SHA-256
        </p>
        <p className="mt-1 break-all font-mono text-[11px] text-muted sm:text-xs">
          {MODULE.sha256}
        </p>
      </div>
      <Button
        type="button"
        size="sm"
        variant="ghost"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(MODULE.sha256);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          } catch {
            /* clipboard may be blocked inside the preview iframe */
          }
        }}
      >
        {copied ? <Check /> : <Copy />}
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}

function ModuleCard() {
  return (
    <aside
      className="rise min-w-0 rounded-xl border border-line bg-bg-elevated p-3 shadow-(--shadow-soft)"
      style={{ animationDelay: "180ms" }}
    >
      <div className="rounded-[var(--radius-md)] border border-line bg-bg px-4 py-3">
        <p className="font-mono text-[11px] tracking-wide text-subtle">
          Modules/{MODULE.id}/
        </p>
        <p className="mt-1 font-display text-lg text-fg">{MODULE.short}</p>
        <p className="text-sm text-muted">{MODULE.game}</p>
      </div>
      <ul className="mt-1 divide-y divide-line">
        {FILES.map((file) => (
          <li
            key={file.path}
            className="flex min-w-0 items-baseline justify-between gap-4 px-4 py-2.5"
          >
            <div className="min-w-0">
              <p className="break-all font-mono text-xs text-fg">{file.path}</p>
              <p className="mt-0.5 text-xs text-subtle">{file.role}</p>
            </div>
            <span className="shrink-0 font-mono text-[11px] text-muted">
              {formatBytes(file.bytes)}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Releases() {
  return (
    <section id="releases" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase">
          Releases
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl">
            v1.3.1 — zip opens at Modules/.
          </h2>
          <a
            href={GITHUB.releases}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-steel hover:text-fg"
          >
            GitHub releases
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
        <ul className="mt-8 space-y-3">
          {RELEASES.map((rel) => (
            <li
              key={rel.tag}
              className="rounded-xl border border-line bg-bg-elevated p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg text-fg">{rel.title}</h3>
                    {rel.latest ? (
                      <span className="rounded-full bg-fg px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-bg uppercase">
                        Latest
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 font-mono text-[11px] text-subtle">
                    {rel.tag} · {rel.date} · {formatBytes(rel.bytes)}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-(--leading-normal) text-muted">
                    {rel.notes}
                  </p>
                  <p className="mt-3 break-all font-mono text-[11px] text-subtle">
                    SHA-256 {rel.sha256}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:w-48">
                  <Button asChild className="w-full">
                    <a href={rel.zip} download={rel.zipName}>
                      <Download />
                      Download zip
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="w-full">
                    <a href={rel.github} target="_blank" rel="noreferrer">
                      <ArrowUpRight />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase">
          What it skips
        </p>
        <h2 className="mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl">
          Two videos. That is the whole mod.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-(--leading-normal) text-muted">
          Both fire with no menu and no extra dependency. If the game log does
          not show “One Skip loaded”, Harmony is off or the old folder is still
          sitting in Modules.
        </p>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li key={f.id} className="bg-bg-elevated p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg text-fg">{f.title}</h3>
                <span className="font-mono text-[11px] text-ok">on</span>
              </div>
              <p className="mt-3 text-sm leading-(--leading-normal) text-muted">
                {f.blurb}
              </p>
            </li>
          ))}
          {LEFT_ALONE.map((f) => (
            <li key={f.id} className="bg-bg p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg text-fg">{f.title}</h3>
                <span className="font-mono text-[11px] text-subtle">off</span>
              </div>
              <p className="mt-3 text-sm leading-(--leading-normal) text-muted">
                {f.blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Forge() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase">
            How it runs
          </p>
          <h2 className="mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl">
            One DLL. One class.
          </h2>
          <p className="mt-4 text-sm leading-(--leading-normal) text-muted">
            Before the first screen, the splash flag is set so the menu is next.
            When the game starts a video whose path contains campaign_intro,
            playback is finished as soon as that state is pushed. Native files
            stay untouched.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-steel" />
              Safe on an existing save.
            </li>
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-steel" />
              Harmony only. No extra menus.
            </li>
            <li className="flex gap-2">
              <Minus className="mt-0.5 size-4 shrink-0 text-subtle" />
              Delete the old OneSkip folder before dropping this one in.
            </li>
          </ul>
        </div>
        <pre className="min-w-0 max-w-full overflow-x-auto whitespace-pre-wrap break-all rounded-[var(--radius-lg)] border border-line bg-bg-elevated p-5 font-mono text-[11px] leading-relaxed text-muted sm:text-xs">
          {SUBMODULE_XML}
        </pre>
      </div>
    </section>
  );
}

function Install() {
  return (
    <section id="install" className="scroll-mt-16 border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase">
          Install
        </p>
        <h2 className="mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl">
          Drop one folder. Turn two mods on.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <ol className="space-y-0">
            {INSTALL.map((step, i) => (
              <li key={step} className="flex gap-4 border-l border-line py-4 pl-5 first:pt-0 last:pb-0">
                <span className="font-mono text-xs text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-(--leading-normal) text-fg">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <div className="rounded-[calc(var(--radius-sm)+12px)] border border-line bg-bg p-5">
            <p className="text-[11px] font-medium tracking-(--tracking-kicker) text-subtle uppercase">
              Required first
            </p>
            <ul className="mt-4 space-y-4">
              {REQUIREMENTS.map((r) => (
                <li key={r.id}>
                  <p className="font-display text-base text-fg">{r.id}</p>
                  <p className="mt-1 text-sm text-muted">{r.note}</p>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 w-full" size="lg">
              <a href={MODULE.zip} download={MODULE.zipName}>
                <ArrowDown />
                Get the zip
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credits() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="font-display text-sm text-fg">
          Not affiliated with TaleWorlds. Does not rewrite saves. Delete
          the module folder to uninstall.
        </p>
        <p className="mt-4 font-mono text-[11px] text-subtle">
          OneSkip {MODULE.version} ·{" "}
          <a href={GITHUB.url} className="text-steel hover:text-fg" target="_blank" rel="noreferrer">
            {GITHUB.owner}/{GITHUB.repo}
          </a>
        </p>
      </div>
    </footer>
  );
}
