export const GITHUB = {
  owner: "rsoyxihnark",
  repo: "SkipLord",
  url: "https://github.com/rsoyxihnark/SkipLord",
  releases: "https://github.com/rsoyxihnark/SkipLord/releases",
} as const;

export const MODULE = {
  id: "OneSkip",
  name: "One Skip",
  short: "One Skip",
  version: "v1.1.0",
  game: "Mount & Blade II: Bannerlord",
  zip: "/downloads/OneSkip-v1.1.0.zip",
  zipName: "OneSkip-v1.1.0.zip",
  zipBytes: 4325,
  sha256: "dc52428891aba8fe8cb1e648527ab11f61b25e2642fc76d48410a044d6885d85",
  githubAsset:
    "https://github.com/rsoyxihnark/SkipLord/releases/download/v1.1.0/OneSkip-v1.1.0.zip",
  githubRelease: "https://github.com/rsoyxihnark/SkipLord/releases/tag/v1.1.0",
} as const;

export const RELEASES = [
  {
    tag: "v1.1.0",
    title: "One Skip v1.1.0",
    date: "15 Sep 2026",
    latest: true,
    zip: "/downloads/OneSkip-v1.1.0.zip",
    zipName: "OneSkip-v1.1.0.zip",
    github: "https://github.com/rsoyxihnark/SkipLord/releases/tag/v1.1.0",
    githubAsset:
      "https://github.com/rsoyxihnark/SkipLord/releases/download/v1.1.0/OneSkip-v1.1.0.zip",
    notes:
      "Own assembly. Splash and campaign cinematic only. No MCM. v1.0.0 never loaded if you did not already have MCM — that pack is dead.",
    bytes: 4325,
    sha256: "dc52428891aba8fe8cb1e648527ab11f61b25e2642fc76d48410a044d6885d85",
  },
] as const;

export const FILES = [
  { path: "SubModule.xml", bytes: 1230, role: "Module manifest" },
  { path: "README.txt", bytes: 814, role: "Install" },
  { path: "bin/Win64_Shipping_Client/OneSkip.dll", bytes: 6656, role: "Splash + campaign cinematic" },
] as const;

export const FEATURES = [
  {
    id: "splash",
    title: "Startup splash",
    blurb: "Marks the splash as already played before the first screen is set. You land on the menu.",
    defaultOn: true,
  },
  {
    id: "campaign",
    title: "Campaign cinematic",
    blurb: "When a new sandbox or story campaign pushes campaign_intro, playback is finished immediately.",
    defaultOn: true,
  },
] as const;

export const REQUIREMENTS = [
  { id: "Harmony", note: "Bannerlord.Harmony, enabled above this module" },
  { id: "Native", note: "The game itself. Nothing else." },
] as const;

export const INSTALL = [
  "Install Harmony if it is not already in your list.",
  "Delete any old OneSkip folder first, then unzip so Modules/OneSkip/SubModule.xml exists.",
  "Launcher → Singleplayer → Mods. Enable Harmony, then One Skip.",
  "Turn off any other intro-skip module so they do not double-patch.",
  "Start the game. Splash is gone. A new campaign does not play the cinematic.",
] as const;

export const SUBMODULE_XML = `<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="One Skip" />
  <Id value="OneSkip" />
  <Version value="v1.1.0" />
  <DependedModules>
    <DependedModule Id="Native" />
    <DependedModule Id="Bannerlord.Harmony" />
  </DependedModules>
  <SubModules>
    <SubModule>
      <DLLName value="OneSkip.dll" />
      <SubModuleClassType value="OneSkip.SubModule" />
    </SubModule>
  </SubModules>
</Module>`;
