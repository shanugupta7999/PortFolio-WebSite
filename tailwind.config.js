/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ensure this includes all your relevant files
  ],
  theme: {
    extend: {
      colors: {
        main: '#457ce0', // Custom main color for your theme
      },
      textShadow: {
        glow: '0 0 25px #457ce0', // Glow effect for the logo's span
      },
      animation: {
        typing: 'typing 2s steps(14) infinite', // For typing effect animation
        cursor: 'cursor 0.6s infinite', // For the cursor animation
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        cursor: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
          '100%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')], // Include this if you're using text shadow plugin
};
