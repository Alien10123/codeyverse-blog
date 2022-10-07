/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#0E2349",
				"secondary": "#16336A",
				"accent": "#BBD2FF",
				"neutral": "#191D24",
				"base-100": "#12203A",
				"brand": "#4B7DDB",
				"success": "#09D769",
				"error": "#F52C2C",
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
}
