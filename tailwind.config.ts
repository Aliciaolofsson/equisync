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
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
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
