const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			black: "#000000",
			white: "#FFFFFF",
			/* primary */
			"fulvous-100": "#E38A2A",
			"fulvous-200": "#D97F2A",
			"fulvous-300": "#D0742A",
			"fulvous-400": "#C5682A",
			"fulvous-500": "#BB5D2A",
			"fulvous-600": "#B1522A",
			"fulvous-700": "#A6462A",
			"fulvous-800": "#9C3B2A",
			"fulvous-900": "#922F2A",
			/* secondary */
			"dodger-blue-100": "#1E90FF",
			"dodger-blue-200": "#1C86EE",
			"dodger-blue-300": "#1A7CDD",
			"dodger-blue-400": "#1872CC",
			"dodger-blue-500": "#1668BB",
			"dodger-blue-600": "#1460AA",
			"dodger-blue-700": "#125898",
			"dodger-blue-800": "#105086",
			"dodger-blue-900": "#0E4774",
			/* tertiary */
			"black-coral-100": "#546E7A",
			"black-coral-200": "#4D6672",
			"black-coral-300": "#465E6A",
			"black-coral-400": "#3F5762",
			"black-coral-500": "#38505A",
			"black-coral-600": "#314852",
			"black-coral-700": "#2A404A",
			"black-coral-800": "#232842",
			"black-coral-900": "#1C203A",
			/* neutral */
			stone: colors.stone,
			green: colors.green,
			sky: colors.sky,
			teal: colors.teal,
			cyan: colors.cyan,
			gray: colors.gray,
			indigo: colors.indigo,
			purple: colors.purple

		},
		extend: {
			backgroundPosition: {
				"center-left-20": "center left -20rem",
			},
			backgroundImage: {
				"world-pattern": "url('/assets/world.svg')",
			},
		},
		frontFamily: {
			sans: ["'Nunito'", "'Helvetica'", ...defaultTheme.fontFamily.sans],
		},
		screens: {
			xs: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px"
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
	],
};
