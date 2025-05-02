/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: "#0EA5E9",
				"accent-blue": "#0284C7",
				"bg-dark": "#030712",
				"bg-card": "#111827",
				success: "#10B981",
				warning: "#F59E0B",
				error: "#EF4444",
			},
			container: {
				center: true,
				padding: "1rem",
				screens: {
					sm: "600px",
					md: "728px",
					lg: "984px",
					xl: "1240px",
					"2xl": "1440px",
				},
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				gradientBackground: {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
			},
			animation: {
				float: "float 3s ease-in-out infinite",
				fadeIn: "fadeIn 0.6s ease-in-out",
				gradient: "gradientBackground 5s ease infinite",
			},
		},
	},
	plugins: [],
};
