/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['zolina', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
			}
		}
	},
	plugins: []
};
