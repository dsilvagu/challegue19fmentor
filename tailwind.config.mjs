/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'opens': ['"Open Sans Variable"', 'sans-serif'],
				'raleway': ['"Raleway Variable"', 'sans-serif'],
			}
		},
		colors: {
			'pvdblue': 'hsl(243, 87%, 12%)',
			'pdblue': 'hsl(238, 22%, 44%)',

			'pbblue': 'hsl(224, 93%, 58%)',
			'pmcyan': 'hsl(170, 45%, 43%)',

			'plgblue': 'hsl(240, 75%, 98%)',
			'plgray': 'hsl(0, 0%, 75%)',
		}
	},
	plugins: [],
}