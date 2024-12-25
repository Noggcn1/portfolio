import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1025px',
        lgx: '1170px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        'color-1': 'hsl(var(--color-1))',
        'color-2': 'hsl(var(--color-2))',
        'color-3': 'hsl(var(--color-3))',
        'color-4': 'hsl(var(--color-4))',
        'color-5': 'hsl(var(--color-5))',
      },
      fontFamily: {
        audiowide: ['var(--font-audiowide)'],
        archivo: ['var(--font-archivo)'],
        anonymousPro: ['var(--font-anonymous-pro)'],
        apex: ['var(--font-apex)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        rainbow: 'rainbow var(--speed, 2s) infinite linear',
        'spin-orbit1': 'spin-orbit1 6s linear infinite',
        'spin-orbit2': 'spin-orbit2 6s linear infinite',
        'spin-orbit3': 'spin-orbit3 6s linear infinite',
        'spin-orbit4': 'spin-orbit4 6s linear infinite',
        'spin-orbit-purple1': 'spin-orbit-purple1 6s linear infinite',
        'spin-orbit-purple2': 'spin-orbit-purple2 6s linear infinite',
        'spin-orbit-purple3': 'spin-orbit-purple3 6s linear infinite',
        'spin-orbit-purple4': 'spin-orbit-purple4 6s linear infinite',
        'spin-pulse': 'spin 4s linear infinite, pulse 2s ease-in-out infinite',
        'bounce-angel': 'bounce-angel 6s linear infinite',
      },
      keyframes: {
        rainbow: {
          '0%': {
            'background-position': '0%',
          },
          '100%': {
            'background-position': '200%',
          },
        },
        'spin-orbit1': {
          '0%': { transform: 'rotate(0deg) translateX(160px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(360deg) translateX(160px) rotate(360deg)',
          },
        },
        'spin-orbit2': {
          '0%': { transform: 'rotate(90deg) translateX(160px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(450deg) translateX(160px) rotate(360deg)',
          },
        },
        'spin-orbit3': {
          '0%': { transform: 'rotate(180deg) translateX(160px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(540deg) translateX(160px) rotate(360deg)',
          },
        },
        'spin-orbit4': {
          '0%': { transform: 'rotate(270deg) translateX(160px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(630deg) translateX(160px) rotate(360deg)',
          },
        },
        'spin-orbit-purple1': {
          '0%': { transform: 'rotate(45deg) translateX(160px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(405deg) translateX(160px) rotate(360deg)',
          },
        },
        'spin-orbit-purple2': {
          '0%': { transform: 'rotate(135deg) translateX(160px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(495deg) translateX(160px) rotate(360deg)',
          },
        },
        'spin-orbit-purple3': {
          '0%': { transform: 'rotate(225deg) translateX(160px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(585deg) translateX(160px) rotate(360deg)',
          },
        },
        'spin-orbit-purple4': {
          '0%': { transform: 'rotate(315deg) translateX(160px) rotate(0deg)' },
          '100%': {
            transform: 'rotate(675deg) translateX(160px) rotate(360deg)',
          },
        },
        'bounce-angel': {
          '0%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(30px)',
          },
          '100%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
