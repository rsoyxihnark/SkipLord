import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as Copy, n as Minus, o as ArrowUpRight, r as Download, s as ArrowDown } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DRXvoKZ5.js
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
var GITHUB = {
	owner: "rsoyxihnark",
	repo: "SkipLord",
	url: "https://github.com/rsoyxihnark/SkipLord",
	releases: "https://github.com/rsoyxihnark/SkipLord/releases"
};
var MODULE = {
	id: "OneSkip",
	name: "One Skip",
	short: "One Skip",
	version: "v1.1.0",
	game: "Mount & Blade II: Bannerlord",
	zip: "/downloads/OneSkip-v1.1.0.zip",
	zipName: "OneSkip-v1.1.0.zip",
	zipBytes: 4325,
	sha256: "dc52428891aba8fe8cb1e648527ab11f61b25e2642fc76d48410a044d6885d85",
	githubAsset: "https://github.com/rsoyxihnark/SkipLord/releases/download/v1.1.0/OneSkip-v1.1.0.zip",
	githubRelease: "https://github.com/rsoyxihnark/SkipLord/releases/tag/v1.1.0"
};
var RELEASES = [{
	tag: "v1.1.0",
	title: "One Skip v1.1.0",
	date: "15 Sep 2026",
	latest: true,
	zip: "/downloads/OneSkip-v1.1.0.zip",
	zipName: "OneSkip-v1.1.0.zip",
	github: "https://github.com/rsoyxihnark/SkipLord/releases/tag/v1.1.0",
	githubAsset: "https://github.com/rsoyxihnark/SkipLord/releases/download/v1.1.0/OneSkip-v1.1.0.zip",
	notes: "Own assembly. Splash and campaign cinematic only. No MCM. v1.0.0 never loaded if you did not already have MCM — that pack is dead.",
	bytes: 4325,
	sha256: "dc52428891aba8fe8cb1e648527ab11f61b25e2642fc76d48410a044d6885d85"
}];
var FILES = [
	{
		path: "SubModule.xml",
		bytes: 1230,
		role: "Module manifest"
	},
	{
		path: "README.txt",
		bytes: 814,
		role: "Install"
	},
	{
		path: "bin/Win64_Shipping_Client/OneSkip.dll",
		bytes: 6656,
		role: "Splash + campaign cinematic"
	}
];
var FEATURES = [{
	id: "splash",
	title: "Startup splash",
	blurb: "Marks the splash as already played before the first screen is set. You land on the menu.",
	defaultOn: true
}, {
	id: "campaign",
	title: "Campaign cinematic",
	blurb: "When a new sandbox or story campaign pushes campaign_intro, playback is finished immediately.",
	defaultOn: true
}];
var REQUIREMENTS = [{
	id: "Harmony",
	note: "Bannerlord.Harmony, enabled above this module"
}, {
	id: "Native",
	note: "The game itself. Nothing else."
}];
var INSTALL = [
	"Install Harmony if it is not already in your list.",
	"Delete any old OneSkip folder first, then unzip so Modules/OneSkip/SubModule.xml exists.",
	"Launcher → Singleplayer → Mods. Enable Harmony, then One Skip.",
	"Turn off any other intro-skip module so they do not double-patch.",
	"Start the game. Splash is gone. A new campaign does not play the cinematic."
];
var SUBMODULE_XML = `<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="One Skip" />
  <Id value="OneSkip" />
  <Version value="v1.1.0" />
  <DependedModules>
    <DependedModule Id="Native" />
    <DependedModule Id="Bannerlord.Harmony" />
  </DependedModules>
  <SubModules>
    <SubModule>
      <DLLName value="OneSkip.dll" />
      <SubModuleClassType value="OneSkip.SubModule" />
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Releases, {}),
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
							href: "#releases",
							className: "hover:text-fg",
							children: "Releases"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#features",
							className: "hover:text-fg",
							children: "Skips"
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
							"Splash and the",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"campaign cinematic."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise mt-5 max-w-xl text-base leading-(--leading-normal) text-muted",
						style: { animationDelay: "140ms" },
						children: "One assembly. Two skips. You hit the menu, and a new campaign does not play the intro reel. Character creation and the tutorial stay. Harmony is the only extra."
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download v1.1.0 zip"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs text-subtle",
							children: [formatBytes(MODULE.zipBytes), " · replace the old folder"]
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
function Releases() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "releases",
		className: "scroll-mt-16 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[11px] font-semibold tracking-(--tracking-kicker) text-steel uppercase",
					children: "Releases"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl",
						children: "Use this zip. Not v1.0.0."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: GITHUB.releases,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1 text-sm text-steel hover:text-fg",
						children: ["GitHub releases", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: RELEASES.map((rel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-xl border border-line bg-bg-elevated p-5 sm:p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-lg text-fg",
											children: rel.title
										}), rel.latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-fg px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-bg uppercase",
											children: "Latest"
										}) : null]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 font-mono text-[11px] text-subtle",
										children: [
											rel.tag,
											" · ",
											rel.date,
											" · ",
											formatBytes(rel.bytes)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-2xl text-sm leading-(--leading-normal) text-muted",
										children: rel.notes
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 break-all font-mono text-[11px] text-subtle",
										children: ["SHA-256 ", rel.sha256]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0 flex-col gap-2 sm:w-48",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: rel.zip,
										download: rel.zipName,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "Download zip"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: rel.github,
										target: "_blank",
										rel: "noreferrer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {}), "GitHub"]
									})
								})]
							})]
						})
					}, rel.tag))
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
					children: "What it skips"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl",
					children: "Two videos. That is the whole mod."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-(--leading-normal) text-muted",
					children: "Both fire with no menu and no extra dependency. Character creation, the story tutorial, and Gunnar stay where TaleWorlds put them."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2",
					children: FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-bg-elevated p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg text-fg",
								children: f.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-ok",
								children: "on"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-(--leading-normal) text-muted",
							children: f.blurb
						})]
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
						children: "How it runs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-xl font-semibold tracking-(--tracking-display) sm:text-2xl",
						children: "One DLL. One class."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-(--leading-normal) text-muted",
						children: "Before the first screen, the splash flag is set so the menu is next. When a campaign pushes a video whose path contains campaign_intro, playback is finished. Native files stay untouched."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-3 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-steel" }), "Safe on an existing save."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-steel" }), "No MCM. Harmony only."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "mt-0.5 size-4 shrink-0 text-subtle" }), "Delete the old OneSkip folder before dropping this one in."]
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
					children: "Drop one folder. Turn two mods on."
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
				children: "Not affiliated with TaleWorlds. Does not rewrite saves. Delete the module folder to uninstall."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-mono text-[11px] text-subtle",
				children: [
					"OneSkip ",
					MODULE.version,
					" ·",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: GITHUB.url,
						className: "text-steel hover:text-fg",
						target: "_blank",
						rel: "noreferrer",
						children: [
							GITHUB.owner,
							"/",
							GITHUB.repo
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { Home as component };
