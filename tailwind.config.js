module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    // Add more file paths as needed
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        primary: '#3490dc',
        secondary: '#ffed4a',
      },
      fontFamily: {
        // Add custom fonts
        sans: ['Roboto', 'sans-serif'],
      },
      // Add more theme customizations as needed
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins you want to use
  ],
}
