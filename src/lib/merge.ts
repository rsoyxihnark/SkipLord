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
  version: "v1.2.0",
  game: "Mount & Blade II: Bannerlord",
  zip: "/downloads/OneSkip-v1.2.0.zip",
  zipName: "OneSkip-v1.2.0.zip",
  zipBytes: 5557,
  sha256: "05804e97f30e0401af5c37b41dde1cc0ddf999ad8fb67c9b055f0ba61cd6002c",
  githubAsset:
    "https://github.com/rsoyxihnark/SkipLord/releases/download/v1.2.0/OneSkip-v1.2.0.zip",
  githubRelease: "https://github.com/rsoyxihnark/SkipLord/releases/tag/v1.2.0",
} as const;

export const RELEASES = [
  {
    tag: "v1.2.0",
    title: "One Skip v1.2.0",
    date: "15 Sep 2026",
    latest: true,
    zip: "/downloads/OneSkip-v1.2.0.zip",
    zipName: "OneSkip-v1.2.0.zip",
    github: "https://github.com/rsoyxihnark/SkipLord/releases/tag/v1.2.0",
    githubAsset:
      "https://github.com/rsoyxihnark/SkipLord/releases/download/v1.2.0/OneSkip-v1.2.0.zip",
    notes:
      "OneSkip.dll only. Splash is marked played before the first screen. Campaign cinematic is finished when campaign_intro actually starts. Character creation and the tutorial are left alone. Delete any older OneSkip folder first.",
    bytes: 5557,
    sha256: "05804e97f30e0401af5c37b41dde1cc0ddf999ad8fb67c9b055f0ba61cd6002c",
  },
] as const;

export const FILES = [
  { path: "SubModule.xml", bytes: 1230, role: "Module manifest" },
  { path: "README.txt", bytes: 970, role: "Install" },
  { path: "bin/Win64_Shipping_Client/OneSkip.dll", bytes: 9216, role: "Splash + campaign cinematic" },
] as const;

export const FEATURES = [
  {
    id: "splash",
    title: "Startup splash",
    blurb: "Sets the game’s splash flag before the first screen. You land on the menu.",
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
  "Unzip so Modules/OneSkip/SubModule.xml exists. The only DLL is OneSkip.dll.",
  "Launcher → Singleplayer → Mods. Enable Harmony, then One Skip.",
  "Turn off any other intro-skip module.",
  "Start the game. You should see “One Skip loaded” in the log, then the menu.",
] as const;

export const SUBMODULE_XML = `<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="One Skip" />
  <Id value="OneSkip" />
  <Version value="v1.2.0" />
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
