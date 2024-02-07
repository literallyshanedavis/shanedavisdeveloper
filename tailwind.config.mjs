/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
			"2xl": "1620px",
			},
		},
		extend: {
			scale: {
				105: '1.05', // Example scale size, can be customized
			  },
			keyframes: {
			  fadeIn: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
			  },
			  fadeInDelay: {
				'0%': { opacity: '0' },
				'100%': { opacity: '1' },
			  },
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-out 1.3s forwards',
				fadeInDelay: 'fadeIn 1s ease-out 1.65s forwards',
			},
		  },
		},
		variants: {
		  extend: {
			animation: ['responsive', 'motion-safe', 'motion-reduce'],
		},
	},
	plugins: [],
	
}
