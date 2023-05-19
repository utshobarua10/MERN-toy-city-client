/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#5ACED0',
        'pink' : '#EE6A68'
      },
    },
  },
    plugins: [require("daisyui")],

}

