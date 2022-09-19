/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./public/**/*.html',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		container: {
      center: true,
      padding: '1.5rem'
    },
		extend: {}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
}
