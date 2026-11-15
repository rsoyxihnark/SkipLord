# SkipLord

Bannerlord module. Skips the startup splash and the campaign cinematic. Nothing else.

Folder: `Modules/SkipLord`. Assembly: `SkipLord.dll`.

The release zip opens at `Modules/`, which is the layout Vortex expects.

## Download

**Latest:** [SkipLord release zip](https://github.com/rsoyxihnark/SkipLord/releases/latest)

Vortex: drop the zip. Manual: extract into the game folder (the folder that already contains `Modules`). Delete any old `Modules/SkipLord` or `Modules/OneSkip` folder first. Enable **Harmony above SkipLord**.

When it works, the game log shows: `SkipLord loaded: splash and campaign cinematic`.

## What it does

| | |
| --- | --- |
| Startup splash | `TWLogo_and_Partners` does not play |
| Campaign cinematic | New sandbox / story games skip `campaign_intro` |

Does not skip character creation or the story tutorial.

## Layout

```
module-src/          C# source
module/SkipLord/     packaged module (SubModule.xml, the build adds SkipLord.dll)
scripts/             build and release scripts
releases/            Vortex zip, written by the build
```

## Build

```sh
dotnet build module-src/SkipLord.csproj -c Release
mkdir -p module/SkipLord/bin/Win64_Shipping_Client
cp module-src/bin/SkipLord.dll module/SkipLord/bin/Win64_Shipping_Client/
sh scripts/build-release.sh
```

The version lives only in `module/SkipLord/SubModule.xml`. The build stamps it on `SkipLord.dll`.

Every push to `main` builds the zip. A commit whose subject starts with a new version, such as `[1.4.1]`, publishes that version as a GitHub Release.

The release notes are that commit's body, and they match the version's section in `CHANGELOG.md`.

Not affiliated with TaleWorlds.
