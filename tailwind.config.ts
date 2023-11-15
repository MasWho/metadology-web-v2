import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm-phone': '360px',  // by 640px
      'md-phone': '385px',
      'lg-phone': '425px',  // by 768px
      'tablet': '768px',
      'laptop': '1024px',  // by 768px
      'desktop': '1280px', // by 1080
    },
    colors: {
      'c-primary': '#000000',
      'c-heading': '#FFFFFF',
      'c-subtext': '#A8A8A8',
      'c-accent-red': '#FF6666',
      'c-accent-green': '#77DA7B',
      'c-secondary': '#1D1D1F',
      'c-section-heading': '#86868B'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
