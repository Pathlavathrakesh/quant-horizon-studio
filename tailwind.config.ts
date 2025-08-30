
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				'border-hover': 'hsl(var(--border-hover))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'surface-glass': 'hsl(var(--surface-glass))',
				'surface-elevated': 'hsl(var(--surface-elevated))',
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				'bull-green': {
					DEFAULT: 'hsl(var(--bull-green))',
					light: 'hsl(var(--bull-green-light))'
				},
				'bear-red': {
					DEFAULT: 'hsl(var(--bear-red))',
					light: 'hsl(var(--bear-red-light))'
				},
				'neutral-yellow': 'hsl(var(--neutral-yellow))',
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				error: 'hsl(var(--error))',
				info: 'hsl(var(--info))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace']
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-bull': 'var(--gradient-bull)',
				'gradient-bear': 'var(--gradient-bear)',
				'gradient-surface': 'var(--gradient-surface)',
				'gradient-glass': 'var(--gradient-glass)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-in-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite alternate'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				pulseGlow: {
					'0%': { boxShadow: '0 0 20px hsla(217, 91%, 60%, 0.3)' },
					'100%': { boxShadow: '0 0 30px hsla(217, 91%, 60%, 0.5)' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
