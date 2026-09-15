using System;
using System.Collections.Generic;
using System.Reflection;
using HarmonyLib;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;
using TWModule = TaleWorlds.MountAndBlade.Module;

namespace OneSkip
{
    public class SubModule : MBSubModuleBase
    {
        public const string HarmonyId = "skiplord.oneskip";

        Harmony _harmony;
        bool _announced;

        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            try
            {
                _harmony = new Harmony(HarmonyId);
                _harmony.PatchAll(Assembly.GetExecutingAssembly());
            }
            catch (Exception ex)
            {
                InformationManager.DisplayMessage(
                    new InformationMessage("One Skip failed to patch: " + ex.Message, Colors.Red));
            }
        }

        protected override void OnBeforeInitialModuleScreenSetAsRoot()
        {
            base.OnBeforeInitialModuleScreenSetAsRoot();
            SplashPatch.MarkPlayed(TWModule.CurrentModule);
            if (_announced) return;
            _announced = true;
            InformationManager.DisplayMessage(
                new InformationMessage("One Skip loaded — splash and campaign cinematic", Colors.Cyan));
        }

        protected override void OnSubModuleUnloaded()
        {
            try
            {
                _harmony?.UnpatchAll(HarmonyId);
            }
            catch
            {
            }
            base.OnSubModuleUnloaded();
        }
    }

    [HarmonyPatch(typeof(TWModule), "SetInitialModuleScreenAsRootScreen")]
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

    [HarmonyPatch]
    public static class CampaignPushPatch
    {
        static IEnumerable<MethodBase> TargetMethods()
        {
            var type = typeof(GameStateManager);
            foreach (var name in new[] { "OnPushState", "OnCleanAndPushState", "PushState", "CleanAndPushState" })
            {
                foreach (var method in type.GetMethods(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic))
                {
                    if (method.Name != name) continue;
                    var parameters = method.GetParameters();
                    if (parameters.Length == 0) continue;
                    if (typeof(GameState).IsAssignableFrom(parameters[0].ParameterType))
                        yield return method;
                }
            }
        }

        public static void Prefix(GameState gameState)
        {
            CampaignCinematic.Mute(gameState as VideoPlaybackState);
        }

        public static void Postfix(GameState gameState)
        {
            CampaignCinematic.Finish(gameState as VideoPlaybackState);
        }
    }

    [HarmonyPatch(typeof(VideoPlaybackState), nameof(VideoPlaybackState.OnVideoStarted))]
    public static class CampaignVideoStartedPatch
    {
        public static void Postfix(VideoPlaybackState __instance)
        {
            CampaignCinematic.Finish(__instance);
        }
    }

    static class CampaignCinematic
    {
        static readonly HashSet<VideoPlaybackState> InFlight = new HashSet<VideoPlaybackState>();

        static readonly MethodInfo AudioSetter = typeof(VideoPlaybackState)
            .GetProperty("AudioPath", BindingFlags.Instance | BindingFlags.Public)
            ?.GetSetMethod(true);

        public static bool IsCampaignIntro(VideoPlaybackState video)
        {
            if (video == null) return false;
            var path = video.VideoPath;
            return !string.IsNullOrEmpty(path)
                && path.IndexOf("campaign_intro", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        public static void Mute(VideoPlaybackState video)
        {
            if (!IsCampaignIntro(video) || AudioSetter == null) return;
            try
            {
                AudioSetter.Invoke(video, new object[] { null });
            }
            catch
            {
            }
        }

        public static void Finish(VideoPlaybackState video)
        {
            if (!IsCampaignIntro(video)) return;
            if (!InFlight.Add(video)) return;
            try
            {
                video.OnVideoFinished();
            }
            catch
            {
            }
            finally
            {
                InFlight.Remove(video);
            }
        }
    }
}
