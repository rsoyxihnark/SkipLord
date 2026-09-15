import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as Copy, n as Minus, o as ArrowDown, r as Download } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBmc0_M8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	const kb = bytes / 1024;
	if (kb < 1024) return `${kb < 10 ? kb.toFixed(1) : Math.round(kb)} KB`;
	return `${(kb / 1024).toFixed(2)} MB`;
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-colors duration-(--motion-fast) ease-(--ease-out) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-fg text-bg hover:bg-steel active:scale-[0.98]",
			ghost: "bg-transparent text-fg border border-line hover:border-line-strong hover:bg-bg-subtle",
			steel: "bg-bg-subtle text-steel border border-line hover:border-steel/50 hover:bg-bg-elevated"
		},
		size: {
			md: "h-11 px-5 text-sm rounded-[var(--radius-sm)]",
			lg: "h-12 px-6 text-sm rounded-[var(--radius-md)]",
			sm: "h-9 px-3 text-xs rounded-[var(--radius-sm)]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Sigil({ className = "size-10" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 64 64",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "26",
				stroke: "currentColor",
				strokeOpacity: "0.18",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				className: "sigil-ring",
				cx: "32",
				cy: "32",
				r: "18",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeDasharray: "113",
				strokeDashoffset: "0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "sigil-arc",
				d: "M32 8 A24 24 0 0 1 56 32",
				stroke: "currentColor",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				style: { animationDelay: "0ms" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "sigil-arc",
				d: "M56 32 A24 24 0 0 1 32 56",
				stroke: "currentColor",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				style: { animationDelay: "80ms" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "sigil-arc",
				d: "M32 56 A24 24 0 0 1 8 32",
				stroke: "currentColor",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				style: { animationDelay: "160ms" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				className: "sigil-arc",
				d: "M8 32 A24 24 0 0 1 32 8",
				stroke: "currentColor",
				strokeWidth: "2.2",
				strokeLinecap: "round",
				style: { animationDelay: "240ms" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "3",
				fill: "currentColor"
			})
		]
	});
}
var MODULE = {
	id: "OneSkip",
	name: "One Skip — To Rule Them All",
	short: "One Skip",
	version: "v1.0.0",
	game: "Mount & Blade II: Bannerlord",
	zip: "/downloads/OneSkip-v1.0.0.zip",
	zipName: "OneSkip-v1.0.0.zip",
	zipBytes: 15259,
	sha256: "344f2d81873b10c09e7ae504c76171f1f091978c36ce9fc08e3b4bfbd331b158"
};
var FILES = [
	{
		path: "SubModule.xml",
		bytes: 2263,
		role: "Module manifest — loads both assemblies"
	},
	{
		path: "README.txt",
		bytes: 3702,
		role: "Install, credits, why two DLLs"
	},
	{
		path: "bin/Win64_Shipping_Client/WPS_SkipIntro.dll",
		bytes: 5120,
		role: "1.4.8 splash skip"
	},
	{
		path: "bin/Win64_Shipping_Client/UsefulSkips.dll",
		bytes: 12288,
		role: "Intro, character creation, tutorial"
	},
	{
		path: "bin/Win64_Shipping_Client/UsefulSkips.pdb",
		bytes: 38400,
		role: "Symbols for crash reports"
	}
];
var FEATURES = [
	{
		id: "splash",
		title: "Startup splash",
		blurb: "Marks the intro video as already played before the first screen is set. You land on the menu.",
		defaultOn: true,
		source: "WPS Skip Intro",
		via: "Harmony prefix on SetInitialModuleScreenAsRootScreen"
	},
	{
		id: "campaign",
		title: "Campaign cinematic",
		blurb: "When a new sandbox or story campaign pushes the intro video, the playback state is finished immediately.",
		defaultOn: true,
		source: "Useful Skips",
		via: "Harmony on GameStateManager.CleanAndPushState"
	},
	{
		id: "cc",
		title: "Character creation",
		blurb: "Random culture and name, matching family and kit, plus 6 attribute and 12 focus points. Off until you flip it in MCM.",
		defaultOn: false,
		source: "Useful Skips",
		via: "Harmony on CharacterCreationManager.NextStage"
	},
	{
		id: "tutorial",
		title: "Story tutorial",
		blurb: "Closes the training-field / brother prologue so a story-mode start dumps you on the map. Off by default — it also skips Gunnar’s questline.",
		defaultOn: false,
		source: "Useful Skips",
		via: "Harmony on TutorialPhaseCampaignBehavior"
	}
];
var SOURCES = [
	{
		id: "splash-videos",
		year: "2022",
		version: "v1.1.0",
		name: "Skip Splash Videos",
		author: "scorpiona / jzebedee",
		nexus: 4201,
		role: "lineage",
		verdict: "Not loaded",
		take: "Proved a Harmony reverse-patch can kill the splash without touching native video files.",
		leave: "Patches the same startup method as WPS. Shipping both would double-hook 1.4.8."
	},
	{
		id: "skip-intro",
		year: "2022",
		version: "v1.1",
		name: "Skip Intro and Character Creation",
		author: "gallickgunner",
		nexus: 3696,
		role: "lineage",
		verdict: "Not loaded",
		take: "Config-file skips and a dedicated character-creation fast path. First of the four to treat intros as code, not deleted .ivd files.",
		leave: "Harmony transpiler on the same method WPS prefixes. Character creation is handled more completely by Useful Skips."
	},
	{
		id: "useful",
		year: "2025",
		version: "v1.0.2",
		name: "Useful Skips",
		author: "OrderWOPower",
		nexus: 4896,
		role: "loaded",
		verdict: "Loaded",
		take: "Campaign intro, character creation, tutorial, and MCM toggles. Splash is set from a submodule callback, so it stacks with WPS.",
		leave: "Nothing — this is the feature engine."
	},
	{
		id: "wps",
		year: "2026",
		version: "v1.0.2",
		name: "[WPS] Skip Intro",
		author: "Wasted Potential Studios",
		nexus: 10230,
		role: "loaded",
		verdict: "Loaded",
		take: "Five-kilobyte splash skip written against Native 1.4.8. The one that belongs on a current install.",
		leave: "Splash only — Useful Skips covers the rest."
	}
];
var REQUIREMENTS = [
	{
		id: "Harmony",
		note: "BUTR Harmony, enabled before this module"
	},
	{
		id: "MCM",
		note: "Mod Configuration Menu (Bannerlord.MBOptionScreen)"
	},
	{
		id: "Native",
		note: "Game module — launcher will pull Sandbox / StoryMode with it"
	}
];
var INSTALL = [
	"Install Harmony and MCM if they are not already in your list.",
	"Unzip OneSkip-v1.0.0.zip so Modules/OneSkip/SubModule.xml exists.",
	"Launcher → Singleplayer → Mods. Enable Harmony, MCM, and One Skip.",
	"Disable the original four: Skip Intro, Skip Splash Videos, Useful Skips, [WPS] Skip Intro.",
	"Start the game. MCM → Useful Skips to skip character creation or the tutorial on a new campaign."
];
var SUBMODULE_XML = `<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="One Skip — To Rule Them All" />
  <Id value="OneSkip" />
  <Version value="v1.0.0" />
  <ModuleCategory value="Singleplayer" />
  <DependedModules>
    <DependedModule Id="Native" />
    <DependedModule Id="Bannerlord.Harmony" />
    <DependedModule Id="Bannerlord.MBOptionScreen" />
    …
  </DependedModules>
  <SubModules>
    <SubModule>
      <DLLName value="WPS_SkipIntro.dll" />
      <SubModuleClassType value="WPS.SkipIntro.SubModule" />
    </SubModule>
    <SubModule>
      <DLLName value="UsefulSkips.dll" />
      <SubModuleClassType value="UsefulSkips.UsefulSkipsSubModule" />
    </SubModule>
  </SubModules>
</Module>`;
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 opacity-[0.35]",
				style: {
					backgroundImage: "repeating-linear-gradient(-12deg, transparent, transparent 11px, color-mix(in oklab, var(--color-fg) 4%, transparent) 11px, color-mix(in oklab, var(--color-fg) 4%, transparent) 12px)",
					maskImage: "linear-gradient(to bottom, black 0%, transparent 42%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lineage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Forge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Install, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Credits, {})
			] })
		]
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-line bg-bg/95 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sigil, { className: "size-7 text-steel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm tracking-(--tracking-display)",
						children: "One Skip"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 text-sm text-muted sm:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#lineage",
							className: "hover:text-fg",
							children: "Lineage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#features",
							className: "hover:text-fg",
							children: "Features"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#install",
							className: "hover:text-fg",
							children: "Install"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					variant: "primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: MODULE.zip,
						download: MODULE.zipName,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download"]
					})
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "rise font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase",
			style: { animationDelay: "40ms" },
			children: ["Bannerlord module · ", MODULE.version]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 grid min-w-0 items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "rise font-display text-3xl leading-tight font-semibold tracking-(--tracking-display) text-balance",
						style: { animationDelay: "80ms" },
						children: [
							"One skip to",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"rule them all"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise mt-5 max-w-xl text-base leading-(--leading-normal) text-muted",
						style: { animationDelay: "140ms" },
						children: "Four community skip mods, one folder. Splash, campaign cinematic, character creation, and the story tutorial — the two assemblies that still belong on a 1.4.8 install, and none of the ones that would fight them."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise mt-8 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center",
						style: { animationDelay: "200ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: MODULE.zip,
								download: MODULE.zipName,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download the module"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs text-subtle",
							children: [formatBytes(MODULE.zipBytes), " · drop into Modules"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashRow, {})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleCard, {})]
		})]
	});
}
function HashRow() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise mt-8 flex min-w-0 items-start gap-3 border-t border-line pt-5",
		style: { animationDelay: "260ms" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-medium tracking-(--tracking-kicker) text-subtle uppercase",
				children: "SHA-256"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 break-all font-mono text-[11px] text-muted sm:text-xs",
				children: MODULE.sha256
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			size: "sm",
			variant: "ghost",
			onClick: async () => {
				try {
					await navigator.clipboard.writeText(MODULE.sha256);
					setCopied(true);
					window.setTimeout(() => setCopied(false), 1600);
				} catch {}
			},
			children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy"]
		})]
	});
}
function ModuleCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rise min-w-0 rounded-xl border border-line bg-bg-elevated p-3 shadow-(--shadow-soft)",
		style: { animationDelay: "180ms" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[var(--radius-md)] border border-line bg-bg px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] tracking-wide text-subtle",
					children: [
						"Modules/",
						MODULE.id,
						"/"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-lg text-fg",
					children: MODULE.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: MODULE.game
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-1 divide-y divide-line",
			children: FILES.map((file) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex min-w-0 items-baseline justify-between gap-4 px-4 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "break-all font-mono text-xs text-fg",
						children: file.path
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-subtle",
						children: file.role
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 font-mono text-[11px] text-muted",
					children: formatBytes(file.bytes)
				})]
			}, file.path))
		})]
	});
}
function Lineage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "lineage",
		className: "scroll-mt-16 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase",
					children: "Four worlds"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-xl leading-snug font-semibold tracking-(--tracking-display) sm:text-2xl",
					children: "What each mod brought — and which two still load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-(--leading-normal) text-muted",
					children: "Loading all four Harmony patches on the same startup method is how you crash a launcher. One Skip keeps the current splash skip and the only feature-complete campaign skip, and leaves the 2022 doubles in the lineage."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-3 md:grid-cols-2",
					children: SOURCES.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col rounded-[calc(var(--radius-sm)+12px)] border border-line bg-bg-elevated p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[11px] text-subtle",
									children: [
										src.year,
										" · ",
										src.version
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: src.role === "loaded" ? "rounded-full bg-fg px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-bg uppercase" : "rounded-full border border-line px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase",
									children: src.verdict
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg leading-snug text-fg",
								children: src.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: src.author
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-(--leading-normal) text-fg/90",
								children: src.take
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-(--leading-normal) text-subtle",
								children: src.leave
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "mt-4 self-start text-xs text-steel hover:text-fg",
								href: `https://www.nexusmods.com/mountandblade2bannerlord/mods/${src.nexus}`,
								target: "_blank",
								rel: "noreferrer",
								children: ["Nexus #", src.nexus]
							})
						]
					}, src.id))
				})
			]
		})
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "scroll-mt-16 border-t border-line bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase",
					children: "The one module"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl",
					children: "Four skips. Two on by default."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-(--leading-normal) text-muted",
					children: "Splash and the campaign cinematic fire without asking. Character creation and the tutorial stay off until you enable them in MCM — skipping the tutorial also skips Gunnar’s questline."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2",
					children: FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-bg-elevated p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg text-fg",
									children: f.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: f.defaultOn ? "font-mono text-[11px] text-ok" : "font-mono text-[11px] text-subtle",
									children: f.defaultOn ? "on" : "mcm"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-(--leading-normal) text-muted",
								children: f.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-mono text-[11px] text-subtle",
								children: [
									f.source,
									" · ",
									f.via
								]
							})
						]
					}, f.id))
				})
			]
		})
	});
}
function Forge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase",
						children: "How it was forged"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl",
						children: "One SubModule.xml, two assemblies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-(--leading-normal) text-muted",
						children: "Bannerlord loads every DLL listed in a module. WPS prefixes startup and marks the splash played. Useful Skips never hooks that method — it uses a submodule callback for splash, then Harmony on campaign intro, character creation, and the tutorial. They stack. The 2022 mods both transpile the same startup method as WPS, so they stay on the bench."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-3 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-steel" }), "Safe on an existing save. No campaign data is rewritten."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-steel" }), "Native video files are untouched — verifying game files will not undo the skip."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "mt-0.5 size-4 shrink-0 text-subtle" }), "Do not enable the original four beside this. Harmony will patch the same methods twice."]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "min-w-0 max-w-full overflow-x-auto whitespace-pre-wrap break-all rounded-[var(--radius-lg)] border border-line bg-bg-elevated p-5 font-mono text-[11px] leading-relaxed text-muted sm:text-xs",
				children: SUBMODULE_XML
			})]
		})
	});
}
function Install() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "install",
		className: "scroll-mt-16 border-t border-line bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase",
					children: "Install"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl",
					children: "Drop one folder. Turn three mods on."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-0",
						children: INSTALL.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 border-l border-line py-4 pl-5 first:pt-0 last:pb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-steel",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-(--leading-normal) text-fg",
								children: step
							})]
						}, step))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[calc(var(--radius-sm)+12px)] border border-line bg-bg p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-medium tracking-(--tracking-kicker) text-subtle uppercase",
								children: "Required first"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-4",
								children: REQUIREMENTS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-base text-fg",
									children: r.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: r.note
								})] }, r.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6 w-full",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: MODULE.zip,
									download: MODULE.zipName,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {}), "Get the zip"]
								})
							})
						]
					})]
				})
			]
		})
	});
}
function Credits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm text-fg",
				children: "Original authors keep their work. This pack is an unofficial convenience merge — not TaleWorlds, not Nexus, not the four authors. Endorse the originals if it saved you a launcher slot."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-mono text-[11px] text-subtle",
				children: [
					"OneSkip ",
					MODULE.version,
					" · ",
					MODULE.id,
					" · Bannerlord community module"
				]
			})]
		})
	});
}
//#endregion
export { Home as component };
