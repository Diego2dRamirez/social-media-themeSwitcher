/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
       },
      colors: {
        // Primary
        'LimeGreen': '#1db489',
        'BrightRed': '#dc414c',
        'Facebook': '#198ff5',
        'Twitter': '#1ca0f2',
        'Instagram1': '#fdc468',
        'Instagram2': '#df4996',
        'YouTube': '#c4032a',

        // Dark Theme
        'ToggleDark1': '#378fe6',
        'ToggleDark2': '#3eda82',
        'VeryDarkBlue': '#1e202a',  //(BG)
        'VeryDarkBlue2': '#1f212e',  //(Top BG Pattern)
        'DarkDesaturatedBlue': '#252a41',  //(Card BG)
        'DesaturatedBlue': '#3eda82',  // (Text)

        // Light Theme
        'ToggleLight': '#aeb3cb',
        'VeryPaleBlue': '#f5f7ff', //(Top BG Pattern)
        'LightGrayishBlue': '#f0f2fa', //(Card BG)
        'DarkGrayishBlue': '#63687e', //(Text)
        'VeryDarkBlueLight': '#1e202a', //(Text)
        
      },
    },
  },
  plugins: [],
}

