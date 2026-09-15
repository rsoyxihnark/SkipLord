# SkipLord

Bannerlord module. Skips the startup splash and the campaign cinematic. Nothing else.

Folder: `Modules/SkipLord`. Assembly: `SkipLord.dll`.

The release zip opens at `Modules/`, which is the layout Vortex expects.

## Download

**Latest:** [SkipLord-v1.4.0.zip](https://github.com/rsoyxihnark/SkipLord/releases/latest)

Vortex: drop the zip. Manual: extract into the game folder (the folder that already contains `Modules`). Delete any old `Modules/SkipLord` or `Modules/OneSkip` folder first. Enable **Harmony above SkipLord**.

When it works, the game log shows: `SkipLord loaded — splash and campaign cinematic`.

## What it does

| | |
| --- | --- |
| Startup splash | `TWLogo_and_Partners` does not play |
| Campaign cinematic | New sandbox / story games skip `campaign_intro` |

Does not skip character creation or the story tutorial.

## Layout

```
module-src/          C# source
module/SkipLord/     packaged module (SubModule.xml + SkipLord.dll)
scripts/build-release.sh
releases/            Vortex zip
```

## Build

```sh
dotnet build module-src/SkipLord.csproj -c Release
cp module-src/bin/SkipLord.dll module/SkipLord/bin/Win64_Shipping_Client/
sh scripts/build-release.sh
```

Pushing a `v*` tag publishes a GitHub Release with the zip.

Not affiliated with TaleWorlds.
