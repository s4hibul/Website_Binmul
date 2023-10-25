/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white'  : '#ffffff',
      'tosca'  : '#34A997',
      'orange' : '#F08619',
      'light'  : '#D6EEEA',
      'dark'   : '#267A6E',
      'gray'   : '#F0F0F0',
      'red'    : '#FF0000',
    },
  },
  plugins: [],
}
