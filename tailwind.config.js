/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme_1': '#FFFFFF',
        'theme_2': '#424245',
        'theme_3': '#6E6E73',
        'theme_4': '',
        'theme_5': '',
        'theme_6': '',
        'theme_7': '',
        
      }, 
      backgroundImage: {
        'hero': "url('/src/assets/26316.jpg')",
        'cs': "url('/src/assets/8058.png')",
        'sd':"url('/src/assets/sd.jpg')"
      }
    },
  },
  plugins: [],
}

