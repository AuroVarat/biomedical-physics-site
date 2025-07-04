/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease reverse infinite',
      },
      keyframes: {
        text: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },

        },
      },


    },
  },
  plugins: [],
}