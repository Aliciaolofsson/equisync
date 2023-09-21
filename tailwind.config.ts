/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      'winter'
    ]
  },

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'whiteOverlay': '#00000080',
        'accent-opacity': '#c149ac60',
      },
      backgroundImage: {
        'landingImg': "url('/images/landingImage.jpg')",
        'showjumpingImg': "url('/images/showjumping.jpg')"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')]
};
