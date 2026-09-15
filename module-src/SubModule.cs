using System;
using System.Reflection;
using HarmonyLib;
using TaleWorlds.MountAndBlade;

namespace OneSkip
{
    public class SubModule : MBSubModuleBase
    {
        Harmony _harmony;

        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            _harmony = new Harmony("skiplord.oneskip");
            PatchSplash(_harmony);
            PatchCampaignIntro(_harmony);
        }

        protected override void OnBeforeInitialModuleScreenSetAsRoot()
        {
            base.OnBeforeInitialModuleScreenSetAsRoot();
            MarkSplashPlayed();
        }

        static void PatchSplash(Harmony harmony)
        {
            try
            {
                var moduleType = AccessTools.TypeByName("TaleWorlds.MountAndBlade.Module");
                var method = AccessTools.DeclaredMethod(moduleType, "SetInitialModuleScreenAsRootScreen");
                if (method == null) return;
                harmony.Patch(method, prefix: new HarmonyMethod(typeof(SubModule), nameof(MarkSplashPlayed)));
            }
            catch
            {
            }
        }

        static void PatchCampaignIntro(Harmony harmony)
        {
            try
            {
                var gsm = AccessTools.TypeByName("TaleWorlds.Core.GameStateManager");
                if (gsm == null) return;
                foreach (var method in gsm.GetMethods(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic))
                {
                    if (method.Name != "CleanAndPushState" && method.Name != "PushState") continue;
                    var parameters = method.GetParameters();
                    if (parameters.Length == 0) continue;
                    harmony.Patch(
                        method,
                        prefix: new HarmonyMethod(typeof(SubModule), nameof(CampaignPrefix)),
                        postfix: new HarmonyMethod(typeof(SubModule), nameof(CampaignPostfix)));
                }
            }
            catch
            {
            }
        }

        public static void MarkSplashPlayed()
        {
            try
            {
                var module = TaleWorlds.MountAndBlade.Module.CurrentModule;
                if (module == null) return;
                var type = module.GetType();
                foreach (var name in new[] { "_splashScreenPlayed", "SplashScreenPlayed" })
                {
                    var field = AccessTools.Field(type, name);
                    if (field != null && field.FieldType == typeof(bool))
                    {
                        field.SetValue(module, true);
                    }
                }
                var view = AccessTools.TypeByName("TaleWorlds.MountAndBlade.View.ViewSubModule");
                var prop = view == null ? null : AccessTools.Property(view, "IsPlayIntroVideo");
                if (prop != null && prop.CanWrite) prop.SetValue(null, false);
            }
            catch
            {
            }
        }

        public static void CampaignPrefix(object __0)
        {
            MuteCampaignIntro(__0);
        }

        public static void CampaignPostfix(object __0)
        {
            FinishCampaignIntro(__0);
        }

        static bool IsCampaignIntro(object state)
        {
            if (state == null) return false;
            var type = state.GetType();
            if (type.Name != "VideoPlaybackState") return false;
            var path = AccessTools.Property(type, "VideoPath")?.GetValue(state) as string;
            if (string.IsNullOrEmpty(path)) return false;
            return path.IndexOf("campaign_intro", StringComparison.OrdinalIgnoreCase) >= 0;
        }

        static void MuteCampaignIntro(object state)
        {
            try
            {
                if (!IsCampaignIntro(state)) return;
                AccessTools.Property(state.GetType(), "AudioPath")?.SetValue(state, null);
            }
            catch
            {
            }
        }

        static void FinishCampaignIntro(object state)
        {
            try
            {
                if (!IsCampaignIntro(state)) return;
                AccessTools.Method(state.GetType(), "OnVideoFinished")?.Invoke(state, null);
            }
            catch
            {
            }
        }
    }
}
