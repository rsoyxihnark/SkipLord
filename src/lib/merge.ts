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
  version: "v1.3.1",
  game: "Mount & Blade II: Bannerlord",
  zip: "/downloads/OneSkip-v1.3.1.zip",
  zipName: "OneSkip-v1.3.1.zip",
  zipBytes: 5208,
  sha256: "230ec004b567e1e4f89b68f240b6cb037989087d215b9716b75dea46a8b43427",
  githubAsset:
    "https://github.com/rsoyxihnark/SkipLord/releases/download/v1.3.1/OneSkip-v1.3.1.zip",
  githubRelease: "https://github.com/rsoyxihnark/SkipLord/releases/tag/v1.3.1",
} as const;

export const RELEASES = [
  {
    tag: "v1.3.1",
    title: "One Skip v1.3.1",
    date: "15 Sep 2026",
    latest: true,
    zip: "/downloads/OneSkip-v1.3.1.zip",
    zipName: "OneSkip-v1.3.1.zip",
    github: "https://github.com/rsoyxihnark/SkipLord/releases/tag/v1.3.1",
    githubAsset:
      "https://github.com/rsoyxihnark/SkipLord/releases/download/v1.3.1/OneSkip-v1.3.1.zip",
    notes:
      "Zip now opens at Modules/, the same layout Vortex expects from other Bannerlord mods. Drop it on Vortex, or extract into the game folder. Splash and campaign cinematic skips are unchanged.",
    bytes: 5208,
    sha256: "230ec004b567e1e4f89b68f240b6cb037989087d215b9716b75dea46a8b43427",
  },
] as const;

export const FILES = [
  { path: "SubModule.xml", bytes: 1230, role: "Module manifest" },
  { path: "README.txt", bytes: 1280, role: "Install" },
  { path: "bin/Win64_Shipping_Client/OneSkip.dll", bytes: 7168, role: "Splash + campaign cinematic" },
] as const;

export const FEATURES = [
  {
    id: "splash",
    title: "Startup splash",
    blurb: "Marks splash as already played before the first screen, and finishes TWLogo_and_Partners if that video still starts.",
    defaultOn: true,
  },
  {
    id: "campaign",
    title: "Campaign cinematic",
    blurb: "When a new sandbox or story game starts campaign_intro, playback is finished immediately.",
    defaultOn: true,
  },
] as const;

export const LEFT_ALONE = [
  { id: "cc", title: "Character creation", blurb: "Not skipped. You still pick culture, face, and background." },
  { id: "tutorial", title: "Story tutorial", blurb: "Not skipped. Gunnar and the training field stay." },
] as const;

export const REQUIREMENTS = [
  { id: "Harmony", note: "Bannerlord.Harmony, enabled above this module" },
  { id: "Native", note: "The game itself. Nothing else." },
] as const;

export const INSTALL = [
  "Install Harmony if it is not already in your list.",
  "Delete any old Modules/OneSkip folder. Do not merge over the previous zip.",
  "Vortex: drop the zip. The first folder is Modules, same as other Bannerlord mods.",
  "Manual: extract into the game folder (the one that already contains Modules). Do not extract into Modules itself.",
  "Launcher → Singleplayer → Mods. Enable Harmony first, then One Skip. Turn off any other intro-skip module.",
  "Start the game. You should see “One Skip loaded” in the log, then the menu — no TaleWorlds logo reel.",
] as const;

export const SUBMODULE_XML = `<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="One Skip" />
  <Id value="OneSkip" />
  <Version value="v1.3.1" />
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
