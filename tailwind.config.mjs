import { Manrope } from 'next/font/google';
import { Silkscreen } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // List all necessary class combinations explicitly
    'after:absolute',
    'after:bg-black',
    'after:dark:bg-white',
    'after:h-[0.9]',
    'after:w-0',
    'after:bottom-0',
    'after:left-0',
    'hover:after:w-full',
    'after:transition-all',
    'after:duration-300',
    'after:content-[""]', // if you're using content
  ],
  theme: {
    extend: {
      colors: {
        // lightHover: '#F2F2F2',
        darkHover: '#1c1c1c',
        darkTheme: '#1c1c1c',
        // lightTheme: '#f8f8f8'
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        silkscreen: ['var(--font-silkscreen)'],
        plus_jakarta_sans: ['var(--font-plus-jakarta-sans)'],
        roboto: ['var(--font-roboto)'],
      },
      boxShadow: {
        'black': '4px 4px 0 #1c1c1c',
        'white': '4px 4px 0 #1c1c1c',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};


