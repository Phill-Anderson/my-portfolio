module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://elanta.app/nazar/arter-demo/img/bg.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
