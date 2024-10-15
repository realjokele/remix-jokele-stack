/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'
import { withTV } from 'tailwind-variants/transformer'
import ta from 'tailwindcss-animate'
import trac from 'tailwindcss-react-aria-components'
import tailwindAspectRatioPlugin from '@tailwindcss/aspect-ratio'

export default withTV({
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [ta, trac, tailwindAspectRatioPlugin],
  theme: {
    extend: {
      colors: {
        light: 'oklch(var(--light) / <alpha-value>)',
        dark: 'oklch(var(--dark) / <alpha-value>)',
        border: 'oklch(var(--border) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        toggle: 'oklch(var(--toggle) / <alpha-value>)',
        bg: 'oklch(var(--bg) / <alpha-value>)',
        fg: 'oklch(var(--fg) / <alpha-value>)',
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          fg: 'oklch(var(--primary-fg) / <alpha-value>)',
          '50': 'oklch(97.37% 0.014 238)',
          '100': 'oklch(93.81% 0.03280649558828209 241.06746081081621)',
          '200': 'oklch(88.9% 0.059 242.33)',
          '300': 'oklch(82.58% 0.09763750297234024 239.47890979942932)',
          '400': 'oklch(74.36% 0.142 244.63)',
          '500': 'oklch(65.63% 0.18687681791257255 253.9987240551966)',
          '600': 'oklch(57.82% 0.228 260.03)',
          '700': 'oklch(52.27% 0.227 261.8)',
          '800': 'oklch(45.04% 0.19 262.37)',
          '900': 'oklch(39.92% 0.145 261.36)',
          '950': 'oklch(29.38% 0.093 262.52)',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          fg: 'oklch(var(--secondary-fg) / <alpha-value>)',
        },
        tertiary: {
          DEFAULT: 'oklch(var(--tertiary) / <alpha-value>)',
          fg: 'oklch(var(--tertiary-fg) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          fg: 'oklch(var(--accent-fg) / <alpha-value>)',
          subtle: 'oklch(var(--accent-subtle) / <alpha-value>)',
          'subtle-fg': 'oklch(var(--accent-subtle-fg) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'oklch(var(--success) / <alpha-value>)',
          fg: 'oklch(var(--success-fg) / <alpha-value>)',
        },
        info: {
          DEFAULT: 'oklch(var(--info) / <alpha-value>)',
          fg: 'oklch(var(--info-fg) / <alpha-value>)',
        },
        danger: {
          DEFAULT: 'oklch(var(--danger) / <alpha-value>)',
          fg: 'oklch(var(--danger-fg) / <alpha-value>)',
        },
        warning: {
          DEFAULT: 'oklch(var(--warning) / <alpha-value>)',
          fg: 'oklch(var(--warning-fg) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          fg: 'oklch(var(--muted-fg) / <alpha-value>)',
        },
        overlay: {
          DEFAULT: 'oklch(var(--overlay) / <alpha-value>)',
          fg: 'oklch(var(--overlay-fg) / <alpha-value>)',
        },
      },
      borderRadius: {
        '3xl': 'calc(var(--radius) + 6px)',
        '2xl': 'calc(var(--radius) + 4px)',
        xl: 'calc(var(--radius) + 2px)',
        lg: 'calc(var(--radius))',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
} satisfies Config)
