/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#002E94',
        'primary-transparent': '#4470cf3f',
        'secondary': '#083AA9',
        'primary-disabled': '#698fe0de',
        'danger': '#EB1D36',
        'danger-secondary': '#ff0a27',
        'danger-disabled': '#FA9494',
        'muted': '#7895B2'
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
          "@screen 2xl": {
            maxWidth: "1350px",
          },
        },
      });
    },
  ],
}
