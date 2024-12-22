// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Ensures Tailwind CSS is applied to all React components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D74E1', // Blue for primary buttons, highlights, and links
        secondary: '#FBBF24', // Yellow for call-to-action buttons, accents
        background: '#F3F4F6', // Light gray background
        darkGray: '#2D2D2D', // Dark gray for dark mode background, headers
        lightGray: '#F3F4F6', // Light gray for sections and inputs
        white: '#FFFFFF', // White for content backgrounds
        black: '#000000', // Black for main text
        grayText: '#6B7280', // Gray for less prominent text
        darkBlue: '#1A4F92', // Dark blue for navigation bar and footer
      },
    },
  },
  plugins: [],
};
