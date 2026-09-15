export const MODULE = {
  id: "OneSkip",
  name: "One Skip — To Rule Them All",
  short: "One Skip",
  version: "v1.0.0",
  game: "Mount & Blade II: Bannerlord",
  zip: "/downloads/OneSkip-v1.0.0.zip",
  zipName: "OneSkip-v1.0.0.zip",
  zipBytes: 15259,
  sha256: "344f2d81873b10c09e7ae504c76171f1f091978c36ce9fc08e3b4bfbd331b158",
} as const;

export const FILES = [
  { path: "SubModule.xml", bytes: 2263, role: "Module manifest — loads both assemblies" },
  { path: "README.txt", bytes: 3702, role: "Install, credits, why two DLLs" },
  { path: "bin/Win64_Shipping_Client/WPS_SkipIntro.dll", bytes: 5120, role: "1.4.8 splash skip" },
  { path: "bin/Win64_Shipping_Client/UsefulSkips.dll", bytes: 12288, role: "Intro, character creation, tutorial" },
  { path: "bin/Win64_Shipping_Client/UsefulSkips.pdb", bytes: 38400, role: "Symbols for crash reports" },
] as const;

export const FEATURES = [
  {
    id: "splash",
    title: "Startup splash",
    blurb: "Marks the intro video as already played before the first screen is set. You land on the menu.",
    defaultOn: true,
    source: "WPS Skip Intro",
    via: "Harmony prefix on SetInitialModuleScreenAsRootScreen",
  },
  {
    id: "campaign",
    title: "Campaign cinematic",
    blurb: "When a new sandbox or story campaign pushes the intro video, the playback state is finished immediately.",
    defaultOn: true,
    source: "Useful Skips",
    via: "Harmony on GameStateManager.CleanAndPushState",
  },
  {
    id: "cc",
    title: "Character creation",
    blurb: "Random culture and name, matching family and kit, plus 6 attribute and 12 focus points. Off until you flip it in MCM.",
    defaultOn: false,
    source: "Useful Skips",
    via: "Harmony on CharacterCreationManager.NextStage",
  },
  {
    id: "tutorial",
    title: "Story tutorial",
    blurb: "Closes the training-field / brother prologue so a story-mode start dumps you on the map. Off by default — it also skips Gunnar’s questline.",
    defaultOn: false,
    source: "Useful Skips",
    via: "Harmony on TutorialPhaseCampaignBehavior",
  },
] as const;

export const SOURCES = [
  {
    id: "splash-videos",
    year: "2022",
    version: "v1.1.0",
    name: "Skip Splash Videos",
    author: "scorpiona / jzebedee",
    nexus: 4201,
    role: "lineage",
    verdict: "Not loaded",
    take: "Proved a Harmony reverse-patch can kill the splash without touching native video files.",
    leave: "Patches the same startup method as WPS. Shipping both would double-hook 1.4.8.",
  },
  {
    id: "skip-intro",
    year: "2022",
    version: "v1.1",
    name: "Skip Intro and Character Creation",
    author: "gallickgunner",
    nexus: 3696,
    role: "lineage",
    verdict: "Not loaded",
    take: "Config-file skips and a dedicated character-creation fast path. First of the four to treat intros as code, not deleted .ivd files.",
    leave: "Harmony transpiler on the same method WPS prefixes. Character creation is handled more completely by Useful Skips.",
  },
  {
    id: "useful",
    year: "2025",
    version: "v1.0.2",
    name: "Useful Skips",
    author: "OrderWOPower",
    nexus: 4896,
    role: "loaded",
    verdict: "Loaded",
    take: "Campaign intro, character creation, tutorial, and MCM toggles. Splash is set from a submodule callback, so it stacks with WPS.",
    leave: "Nothing — this is the feature engine.",
  },
  {
    id: "wps",
    year: "2026",
    version: "v1.0.2",
    name: "[WPS] Skip Intro",
    author: "Wasted Potential Studios",
    nexus: 10230,
    role: "loaded",
    verdict: "Loaded",
    take: "Five-kilobyte splash skip written against Native 1.4.8. The one that belongs on a current install.",
    leave: "Splash only — Useful Skips covers the rest.",
  },
] as const;

export const REQUIREMENTS = [
  { id: "Harmony", note: "BUTR Harmony, enabled before this module" },
  { id: "MCM", note: "Mod Configuration Menu (Bannerlord.MBOptionScreen)" },
  { id: "Native", note: "Game module — launcher will pull Sandbox / StoryMode with it" },
] as const;

export const INSTALL = [
  "Install Harmony and MCM if they are not already in your list.",
  "Unzip OneSkip-v1.0.0.zip so Modules/OneSkip/SubModule.xml exists.",
  "Launcher → Singleplayer → Mods. Enable Harmony, MCM, and One Skip.",
  "Disable the original four: Skip Intro, Skip Splash Videos, Useful Skips, [WPS] Skip Intro.",
  "Start the game. MCM → Useful Skips to skip character creation or the tutorial on a new campaign.",
] as const;

export const SUBMODULE_XML = `<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="One Skip — To Rule Them All" />
  <Id value="OneSkip" />
  <Version value="v1.0.0" />
  <ModuleCategory value="Singleplayer" />
  <DependedModules>
    <DependedModule Id="Native" />
    <DependedModule Id="Bannerlord.Harmony" />
    <DependedModule Id="Bannerlord.MBOptionScreen" />
    …
  </DependedModules>
  <SubModules>
    <SubModule>
      <DLLName value="WPS_SkipIntro.dll" />
      <SubModuleClassType value="WPS.SkipIntro.SubModule" />
    </SubModule>
    <SubModule>
      <DLLName value="UsefulSkips.dll" />
      <SubModuleClassType value="UsefulSkips.UsefulSkipsSubModule" />
    </SubModule>
  </SubModules>
</Module>`;
