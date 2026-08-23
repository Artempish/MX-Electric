import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // MX Electric brand: black structure, yellow accent, red action.
        // Neutral (not navy) grays to match the existing brand.
        ink: {
          50: '#f7f7f7',
          100: '#efefef',
          200: '#e2e2e2',
          300: '#cfcfcf',
          400: '#a1a1a1',
          500: '#737373',
          600: '#525252',
          700: '#3d3d3d',
          800: '#262626',
          900: '#171717',
          950: '#0b0b0b',
        },
        // Primary action color — MX red (buttons, CTA bands)
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f4595d',
          500: '#e8353a',
          600: '#d81f24',
          700: '#b5171c',
          800: '#95171b',
          900: '#7c1a1d',
          950: '#440a0c',
        },
        // Accent — MX yellow (nav strip, headings on dark, highlights)
        volt: {
          50: '#fffdea',
          100: '#fff8c5',
          200: '#ffef85',
          300: '#ffe14d',
          400: '#ffd400',
          500: '#e6be00',
          600: '#c29a00',
          700: '#9a7502',
          800: '#7f5f0a',
          900: '#6c4f0d',
          950: '#3f2c02',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI Semibold',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(8,12,20,0.06), 0 8px 24px -12px rgba(8,12,20,0.18)',
        lift: '0 2px 4px rgba(8,12,20,0.08), 0 18px 40px -16px rgba(8,12,20,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
