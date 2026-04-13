// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const googleAnalyticsId = "G-JJ04KZTWTZ";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "ThreatHub",
			head: [
				{
					tag: "script",
					attrs: {
						src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`
					}
				},
				{
					tag: "script",
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${googleAnalyticsId}');
					`
				}
			],
			social: [{ icon: "github", label: "GitHub", href: "https://github.com/ThreatHubCo" }],
			sidebar: [
				{
					label: "Getting Started",
					items: [
						{ label: "What is ThreatHub?", slug: "docs/basics/about" },
						{ label: "Installation", slug: "docs/basics/install" },
						{ label: "Setup", slug: "docs/basics/setup" },
						{ label: "Running", slug: "docs/basics/running" },
						{ label: "HaloPSA Setup", slug: "docs/basics/setup-halopsa" }
					]
				},
				{
					label: "For Admins",
					items: [
						{ label: "Scripting API", slug: "docs/reference/scripting" },
						{ label: "Scheduled Tasks", slug: "docs/reference/scheduled-tasks" },
						{ label: "Agent Permissions", slug: "docs/reference/agent-permissions" },
						{ label: "Command Line Arguments", slug: "docs/reference/command-line-arguments" },
						{ label: "Health Checks (Monitoring)", slug: "docs/reference/health-checks" },
						{ label: "Configuration", slug: "docs/reference/config" }
					]
				}
			]
		})
	]
});
