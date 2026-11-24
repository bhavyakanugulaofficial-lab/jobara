/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15171C',
        muted: '#777D89',
        accent: '#6257E8',
        'accent-soft': '#EFEDFF',
        line: '#E9EAF0',
        canvas: '#F8F9FB',
        success: '#16A36A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
