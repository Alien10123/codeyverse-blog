/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography"),
    ],
    theme: {
		aspectRatio: {
			"card-w": "200",
			"card-h": "87",
		},
        extend: {
            colors: {
                primary: "#0E2349",
                secondary: "#16336A",
                accent: "#BBD2FF",
                neutral: "#191D24",
                "base-100": "#12203A",
                brand: "#4B7DDB",
                success: "#09D769",
                error: "#F52C2C",
            },
        },
    },
};
