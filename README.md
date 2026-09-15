# One Skip

Bannerlord module. Skips the startup splash and the campaign cinematic. Nothing else.

## Download

**Latest:** [OneSkip-v1.1.0.zip](https://github.com/rsoyxihnark/SkipLord/releases/latest)

Delete any old `Modules/OneSkip` folder first. Unzip so `Modules/OneSkip/SubModule.xml` exists. Enable Harmony, then One Skip.

v1.0.0 is withdrawn. It required MCM and shipped other assemblies, so it often loaded nothing.

## What it does

| | |
| --- | --- |
| Startup splash | Menu is next |
| Campaign cinematic | New sandbox / story games skip `campaign_intro` |

Does not skip character creation or the story tutorial. No MCM.

## Build

```sh
# compile OneSkip.dll (needs .NET SDK)
dotnet build module-src/OneSkip.csproj -c Release
cp module-src/bin/OneSkip.dll module/OneSkip/bin/Win64_Shipping_Client/

# pack
sh scripts/build-release.sh
```

Pushing a `v*` tag publishes a GitHub Release with the zip.

Not affiliated with TaleWorlds.
