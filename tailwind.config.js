module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "*/*.{html,js}"
  ],
  // content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'imgDefault': "url('../img/bg1.png')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
