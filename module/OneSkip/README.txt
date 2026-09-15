ONE SKIP — TO RULE THEM ALL
Mount & Blade II: Bannerlord  |  Module Id: OneSkip  |  v1.0.0

An unofficial merge of four community skip mods. One folder.
Disable the original four if they are still in your Modules list.


WHAT IT DOES
------------
On by default
  • Startup splash / intro video          (WPS Skip Intro, 1.4.8-aware)
  • New-campaign cinematic                (Useful Skips)

Off by default — toggle in MCM
  • Character creation (random culture, 6 AP + 12 FP)
  • Story-mode tutorial phase

Open MCM → "Useful Skips" after you reach the main menu.


WHY THESE TWO ASSEMBLIES (AND NOT ALL FOUR)
-------------------------------------------
All four mods patch the same startup path in different years of the game.

  Skip Splash Videos (scorpiona / jzebedee, v1.1.0, 2022)
      Harmony reverse-patch on Module.SetInitialModuleScreenAsRootScreen.
      Technique is sound. The 2026 WPS patch does the same job against
      Bannerlord 1.4.8, so the old DLL is not loaded (it would double-patch
      the same method).

  Skip Intro and Character Creation (gallickgunner, v1.1, 2022)
      Config-file skip of logo, sandbox intro, and optional character
      creation. Uses a Harmony transpiler on the same startup method as
      WPS — they cannot share a process. Character-creation skip is
      superseded by Useful Skips (culture, family, equipment, clan name).

  Useful Skips (OrderWOPower, v1.0.2, 2025)
      The only one of the four that skips the tutorial, and the only one
      with MCM toggles. Splash is set from OnBeforeInitialModuleScreenSetAsRoot
      rather than a Harmony prefix, so it stacks with WPS instead of fighting it.
      Campaign intro is skipped by finishing the VideoPlaybackState rather
      than returning false from a prefix.

  [WPS] Skip Intro (Wasted Potential Studios, v1.0.2, 2026)
      Tiny, current, Native 1.4.8. Harmony prefix marks the splash as
      already played. This is the splash skip that belongs on a 2026 install.

Loaded:
  bin/Win64_Shipping_Client/WPS_SkipIntro.dll
  bin/Win64_Shipping_Client/UsefulSkips.dll

Not loaded (kept out on purpose):
  SkipIntro.dll, SkipSplashVideos.dll


REQUIREMENTS
------------
  1. Bannerlord.Harmony          (BUTR Harmony)
  2. Bannerlord.MBOptionScreen   (Mod Configuration Menu — MCM)
  3. Native, SandBoxCore, Sandbox, StoryMode

Safe to add or remove on an existing save. It does not touch campaign data.


INSTALL
-------
  1. Install Harmony and MCM if you do not already have them.
  2. Drop the OneSkip folder into:
       [game]\Modules\
     e.g.  Steam\steamapps\common\Mount & Blade II Bannerlord\Modules\OneSkip
  3. Launcher → Singleplayer → Mods
       Enable: Harmony, MCM, One Skip
       Disable: Skip Intro, Skip Splash Videos, Useful Skips, [WPS] Skip Intro
  4. Start the game. Splash should not play.
  5. MCM → Useful Skips to skip character creation and/or the tutorial
     on your next new campaign.


CREDITS (original authors retain their work)
--------------------------------------------
  Wasted Potential Studios   [WPS] Skip Intro                 nexusmods.com/mountandblade2bannerlord/mods/10230
  OrderWOPower               Useful Skips                     nexusmods.com/mountandblade2bannerlord/mods/4896
  gallickgunner              Skip Intro and Character Creation nexusmods.com/mountandblade2bannerlord/mods/3696
  scorpiona / jzebedee       Skip Splash Videos               nexusmods.com/mountandblade2bannerlord/mods/4201

This pack redistributes their compiled assemblies as a single Bannerlord
module for convenience. It is not affiliated with TaleWorlds. Endorse the
originals on Nexus if this saved you a launcher slot.
