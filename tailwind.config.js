/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mb: { max: '549px' },
      sm: '550px',
      md: '751px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [],
};
