/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rancho: '"Rancho", cursive',
        raleway: '"Raleway", sans-serif',
      },
      backgroundImage: {
        'header': "url('https://i.postimg.cc/2q2TcG3G/15.jpg')",
        'banner': "url('https://t4.ftcdn.net/jpg/03/26/12/23/240_F_326122335_RKvTXMb4RYkIzk94ZoPjkZQe2CUOVnen.jpg')",
        'footer': "url('https://i.postimg.cc/WtrgtSjy/24.jpg')",
        'top-footer': "url('https://i.postimg.cc/23qTG4Yd/13.jpg')",
      }
    }
  },
  // (//eslint-disable-next-line)    ---> that can be used but not good practice
  plugins: [require("daisyui")],
}

