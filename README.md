# One Skip — To Rule Them All

Unofficial [Mount & Blade II: Bannerlord](https://www.taleworlds.com) module pack. Four community skip mods, one folder.

## Download

**Latest release:** [OneSkip-v1.0.0.zip](https://github.com/rsoyxihnark/SkipLord/releases/latest)

Drop the `OneSkip` folder into `Modules`. Requires [Harmony](https://www.nexusmods.com/mountandblade2bannerlord/mods/2006) and [MCM](https://www.nexusmods.com/mountandblade2bannerlord/mods/159). Disable the original four skip mods.

## What is loaded

| Assembly | Job |
| --- | --- |
| `WPS_SkipIntro.dll` | Splash skip for Native 1.4.8 |
| `UsefulSkips.dll` | Campaign cinematic, character creation, tutorial (MCM) |

Skip Splash Videos and Skip Intro and Character Creation are lineage only — they Harmony-patch the same startup method as WPS and are not loaded.

## Build the zip

```sh
sh scripts/build-release.sh
```

Writes `public/downloads/OneSkip-v1.0.0.zip` and `dist-release/`. Pushing a `v*` tag runs `.github/workflows/release.yml` and publishes a GitHub Release with the zip attached.

## Credits

Original authors retain their work:

- [WPS Skip Intro](https://www.nexusmods.com/mountandblade2bannerlord/mods/10230) — Wasted Potential Studios
- [Useful Skips](https://www.nexusmods.com/mountandblade2bannerlord/mods/4896) — OrderWOPower
- [Skip Intro and Character Creation](https://www.nexusmods.com/mountandblade2bannerlord/mods/3696) — gallickgunner
- [Skip Splash Videos](https://www.nexusmods.com/mountandblade2bannerlord/mods/4201) — scorpiona / jzebedee

Not affiliated with TaleWorlds.
