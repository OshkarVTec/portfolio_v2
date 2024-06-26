/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slideInLeft: {
					"0%": { opacity: 1, transform: "translateX(100%)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
			},
			animation: {
				slideInLeft: "slideInLeft .5s ease-in-out forwards",
			},
		},
		plugins: [],
	},
};
