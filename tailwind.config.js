/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,jsx, js}',
    './src/components/**/*.{html,jsx, js}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
  },
  purge: {
    content: [
      './src/**/*.{html,jsx,js}',
      './src/components/**/*.{html,jsx,js}',
    ],
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
