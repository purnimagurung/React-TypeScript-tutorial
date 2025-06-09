/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffffff',         // shorthand for bg-primary, text-primary
          light: '#D9D9D9',           // lighter shade
          dark: '#03081F',            // darker shade
          foreground: '#FC8A06',      // text on primary background
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          light: '#A6A6A6',
          dark: '#000000',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#03081F',
          light: '#1A2040',
          foreground: '#ffffff',
        },
        neutral: {
          light: '#f5f5f5',
          dark: '#028643',
        },
        alert: {
          success: '#28a745',
          warning: '#ffc107',
          danger: '#dc3545',
        },
      },
    },
  },
  plugins: [],
}
