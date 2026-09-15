import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDown,
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
  INSTALL,
  MODULE,
  REQUIREMENTS,
  SOURCES,
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
        <Lineage />
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
          <a href="#lineage" className="hover:text-fg">
            Lineage
          </a>
          <a href="#features" className="hover:text-fg">
            Features
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
            One skip to
            <br />
            rule them all
          </h1>
          <p
            className="rise mt-5 max-w-xl text-base leading-(--leading-normal) text-muted"
            style={{ animationDelay: "140ms" }}
          >
            Four community skip mods, one folder. Splash, campaign cinematic,
            character creation, and the story tutorial — the two assemblies
            that still belong on a 1.4.8 install, and none of the ones that
            would fight them.
          </p>
          <div
            className="rise mt-8 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "200ms" }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={MODULE.zip} download={MODULE.zipName}>
                <Download />
                Download the module
              </a>
            </Button>
            <p className="font-mono text-xs text-subtle">
              {formatBytes(MODULE.zipBytes)} · drop into Modules
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

function Lineage() {
  return (
    <section id="lineage" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase">
          Four worlds
        </p>
        <h2 className="mt-3 font-display text-xl leading-snug font-semibold tracking-(--tracking-display) sm:text-2xl">
          What each mod brought — and which two still load
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-(--leading-normal) text-muted">
          Loading all four Harmony patches on the same startup method is how
          you crash a launcher. One Skip keeps the current splash skip and
          the only feature-complete campaign skip, and leaves the 2022
          doubles in the lineage.
        </p>
        <ol className="mt-10 grid gap-3 md:grid-cols-2">
          {SOURCES.map((src) => (
            <li
              key={src.id}
              className="flex flex-col rounded-[calc(var(--radius-sm)+12px)] border border-line bg-bg-elevated p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-mono text-[11px] text-subtle">
                  {src.year} · {src.version}
                </p>
                <span
                  className={
                    src.role === "loaded"
                      ? "rounded-full bg-fg px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-bg uppercase"
                      : "rounded-full border border-line px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase"
                  }
                >
                  {src.verdict}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg leading-snug text-fg">
                {src.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{src.author}</p>
              <p className="mt-4 text-sm leading-(--leading-normal) text-fg/90">
                {src.take}
              </p>
              <p className="mt-3 text-sm leading-(--leading-normal) text-subtle">
                {src.leave}
              </p>
              <a
                className="mt-4 self-start text-xs text-steel hover:text-fg"
                href={`https://www.nexusmods.com/mountandblade2bannerlord/mods/${src.nexus}`}
                target="_blank"
                rel="noreferrer"
              >
                Nexus #{src.nexus}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-line bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase">
          The one module
        </p>
        <h2 className="mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl">
          Four skips. Two on by default.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-(--leading-normal) text-muted">
          Splash and the campaign cinematic fire without asking. Character
          creation and the tutorial stay off until you enable them in MCM —
          skipping the tutorial also skips Gunnar’s questline.
        </p>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li key={f.id} className="bg-bg-elevated p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg text-fg">{f.title}</h3>
                <span
                  className={
                    f.defaultOn
                      ? "font-mono text-[11px] text-ok"
                      : "font-mono text-[11px] text-subtle"
                  }
                >
                  {f.defaultOn ? "on" : "mcm"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-(--leading-normal) text-muted">
                {f.blurb}
              </p>
              <p className="mt-4 font-mono text-[11px] text-subtle">
                {f.source} · {f.via}
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
            How it was forged
          </p>
          <h2 className="mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl">
            One SubModule.xml, two assemblies
          </h2>
          <p className="mt-4 text-sm leading-(--leading-normal) text-muted">
            Bannerlord loads every DLL listed in a module. WPS prefixes
            startup and marks the splash played. Useful Skips never hooks
            that method — it uses a submodule callback for splash, then
            Harmony on campaign intro, character creation, and the tutorial.
            They stack. The 2022 mods both transpile the same startup
            method as WPS, so they stay on the bench.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-steel" />
              Safe on an existing save. No campaign data is rewritten.
            </li>
            <li className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-steel" />
              Native video files are untouched — verifying game files will
              not undo the skip.
            </li>
            <li className="flex gap-2">
              <Minus className="mt-0.5 size-4 shrink-0 text-subtle" />
              Do not enable the original four beside this. Harmony will
              patch the same methods twice.
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
          Drop one folder. Turn three mods on.
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
          Original authors keep their work. This pack is an unofficial
          convenience merge — not TaleWorlds, not Nexus, not the four
          authors. Endorse the originals if it saved you a launcher slot.
        </p>
        <p className="mt-4 font-mono text-[11px] text-subtle">
          OneSkip {MODULE.version} · {MODULE.id} · Bannerlord community
          module
        </p>
      </div>
    </footer>
  );
}
