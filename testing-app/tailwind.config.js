/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
        colors: {
            'accent': {
              'navy': {
                200: "#f6e58d",
                100: "#485468",
                75: "#BFD2F2",
                50: "#D7E3F7"
              }
            }
          }
    },
  },
  plugins: [],
};
