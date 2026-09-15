# One Skip

Bannerlord module. Skips the startup splash and the campaign cinematic. Nothing else.

Folder: `OneSkip`. Assembly: `OneSkip.dll`. No other names.

## Download

**Latest:** [OneSkip-v1.2.0.zip](https://github.com/rsoyxihnark/SkipLord/releases/latest)

Delete any old `Modules/OneSkip` folder first. Unzip so `Modules/OneSkip/SubModule.xml` exists. Enable Harmony, then One Skip.

When it works, the game log shows: `One Skip loaded — splash and campaign cinematic`.

Older zips are withdrawn. Do not keep them.

## What it does

| | |
| --- | --- |
| Startup splash | Menu is next |
| Campaign cinematic | New sandbox / story games skip `campaign_intro` |

Does not skip character creation or the story tutorial. No extra menus.

## Build

```sh
dotnet build module-src/OneSkip.csproj -c Release
cp module-src/bin/OneSkip.dll module/OneSkip/bin/Win64_Shipping_Client/
sh scripts/build-release.sh
```

Pushing a `v*` tag publishes a GitHub Release with the zip.

Not affiliated with TaleWorlds.
