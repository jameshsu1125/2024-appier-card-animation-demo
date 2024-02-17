/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';

delete color.lightBlue;
delete color.warmGray;
delete color.trueGray;
delete color.coolGray;
delete color.blueGray;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['luxury'],
  },
  plugins: ['prettier-plugin-tailwindcss', daisyui],
};
