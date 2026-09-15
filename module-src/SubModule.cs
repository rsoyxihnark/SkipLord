using System;
using System.Reflection;
using HarmonyLib;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;
using TWModule = TaleWorlds.MountAndBlade.Module;

namespace SkipLord
{
    public class SubModule : MBSubModuleBase
    {
        public const string HarmonyId = "skiplord";

        Harmony _harmony;
        bool _announced;

        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            _harmony = new Harmony(HarmonyId);
            PatchSplash();
            PatchVideos();
        }

        void PatchSplash()
        {
            try
            {
                var method = AccessTools.Method(typeof(TWModule), "SetInitialModuleScreenAsRootScreen");
                if (method == null)
                    throw new InvalidOperationException("SetInitialModuleScreenAsRootScreen not found");
                var prefix = new HarmonyMethod(typeof(SplashPatch), nameof(SplashPatch.Prefix))
                {
                    priority = Priority.First
                };
                _harmony.Patch(method, prefix: prefix);
                SplashPatch.MarkPlayed(TWModule.CurrentModule);
            }
            catch (Exception ex)
            {
                Say("SkipLord splash patch failed: " + ex.Message, Colors.Red);
            }
        }

        void PatchVideos()
        {
            try
            {
                var started = AccessTools.Method(typeof(VideoPlaybackState), nameof(VideoPlaybackState.OnVideoStarted));
                if (started != null)
                {
                    _harmony.Patch(
                        started,
                        postfix: new HarmonyMethod(typeof(VideoSkipPatch), nameof(VideoSkipPatch.OnStarted)));
                }

                var setter = AccessTools.DeclaredMethod(typeof(VideoPlaybackState), "SetStartingParameters");
                if (setter != null)
                {
                    _harmony.Patch(
                        setter,
                        postfix: new HarmonyMethod(typeof(VideoSkipPatch), nameof(VideoSkipPatch.OnSetParams)));
                }
            }
            catch (Exception ex)
            {
                Say("SkipLord video patch failed: " + ex.Message, Colors.Red);
            }
        }

        protected override void OnBeforeInitialModuleScreenSetAsRoot()
        {
            base.OnBeforeInitialModuleScreenSetAsRoot();
            SplashPatch.MarkPlayed(TWModule.CurrentModule);
            if (_announced) return;
            _announced = true;
            Say("SkipLord loaded — splash and campaign cinematic", Colors.Cyan);
        }

        protected override void OnSubModuleUnloaded()
        {
            try { _harmony?.UnpatchAll(HarmonyId); }
            catch { }
            base.OnSubModuleUnloaded();
        }

        static void Say(string text, Color color)
        {
            try
            {
                InformationManager.DisplayMessage(new InformationMessage(text, color));
            }
            catch
            {
            }
        }
    }

    public static class SplashPatch
    {
        static readonly FieldInfo SplashPlayed = typeof(TWModule).GetField(
            "_splashScreenPlayed",
            BindingFlags.Instance | BindingFlags.NonPublic);

        public static void Prefix(TWModule __instance)
        {
            MarkPlayed(__instance);
        }

        public static void MarkPlayed(TWModule module)
        {
            if (module == null || SplashPlayed == null) return;
            SplashPlayed.SetValue(module, true);
        }
    }

    public static class VideoSkipPatch
    {
        static VideoPlaybackState _pending;

        public static void OnSetParams(VideoPlaybackState __instance, string videoPath)
        {
            if (!ShouldSkip(videoPath)) return;
            _pending = __instance;
            Mute(__instance);
        }

        public static void OnStarted(VideoPlaybackState __instance)
        {
            if (__instance == null) return;
            if (__instance != _pending && !ShouldSkip(__instance.VideoPath)) return;
            Mute(__instance);
            try
            {
                __instance.OnVideoFinished();
            }
            catch
            {
            }
            if (_pending == __instance) _pending = null;
        }

        static bool ShouldSkip(string path)
        {
            if (string.IsNullOrEmpty(path)) return false;
            return path.IndexOf("TWLogo", StringComparison.OrdinalIgnoreCase) >= 0
                || path.IndexOf("campaign_intro", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        static void Mute(VideoPlaybackState video)
        {
            try
            {
                var setter = typeof(VideoPlaybackState)
                    .GetProperty("AudioPath", BindingFlags.Instance | BindingFlags.Public)
                    ?.GetSetMethod(true);
                setter?.Invoke(video, new object[] { null });
            }
            catch
            {
            }
        }
    }
}
