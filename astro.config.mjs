// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "ThreatHub",
			social: [{ icon: "github", label: "GitHub", href: "https://github.com/ThreatHubCo/threathub.co" }],
			sidebar: [
				{
					label: "Getting Started",
					items: [
						{ label: "What is ThreatHub?", slug: "docs/basics/about" },
						{ label: "Installation", slug: "docs/basics/install" },
						{ label: "Setup", slug: "docs/basics/setup" },
						{ label: "Running", slug: "docs/basics/running" },
						{ label: "HaloPSA Setup", slug: "docs/basics/setup-halopsa" }
					],
				},
				{
					label: "For Admins",
					items: [
						{ label: "Scheduled Tasks", slug: "docs/reference/scheduled-tasks" },
						{ label: "Agent Permissions", slug: "docs/reference/agent-permissions" },
						{ label: "Command Line Arguments", slug: "docs/reference/command-line-arguments" },
						{ label: "Health Checks (Monitoring)", slug: "docs/reference/health-checks" },
						{ label: "Configuration", slug: "docs/reference/config" }
					]
				},
			],
		}),
	],
});
