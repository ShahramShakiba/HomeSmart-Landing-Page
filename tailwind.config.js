/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        16: '16rem',
      },
    },
  },

  //add forms plugins since we use it
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
