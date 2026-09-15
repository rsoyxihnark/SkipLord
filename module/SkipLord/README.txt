SkipLord  v1.4.0
Bannerlord module. Zip root: Modules/SkipLord. Assembly: SkipLord.dll.

Skips two videos only:
  • Startup splash (TWLogo_and_Partners)
  • Campaign cinematic (campaign_intro)

Does not skip character creation.
Does not skip the story tutorial.

When it loads you will see this in the game log:
  SkipLord loaded — splash and campaign cinematic
If that line never appears, Harmony is off or an old folder is still in Modules.

Requires
  Bannerlord.Harmony, enabled ABOVE this module in the launcher list.

Vortex
  Drop this zip on Vortex. The first folder is Modules, same as other
  Bannerlord mods. Let Vortex install it.

Manual
  1. Delete any old Modules/SkipLord or Modules/OneSkip folder. Do not merge over it.
  2. Extract this zip into the game folder (the folder that already
     contains Modules). You should get Modules/SkipLord/SubModule.xml.
     Do not extract into Modules itself — that nests it twice.
  3. Launcher → Singleplayer → Mods.
  4. Enable Harmony first, then SkipLord.
  5. Turn off any other intro-skip module.
  6. Start the game.

Uninstall
  Disable the module or delete Modules/SkipLord. Safe on an existing save.

Files
  Modules/SkipLord/SubModule.xml
  Modules/SkipLord/README.txt
  Modules/SkipLord/bin/Win64_Shipping_Client/SkipLord.dll
