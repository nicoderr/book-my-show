8
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#2e3147',
        'regal-blue-dark': '#222539',
        'background-white': '#f5f5f5',
        'background-blue':'#2b3148',
        'background-cream':'#fff3d2', 
      }
    },
      screens: {
        'sm': '100px',
        // => @media (min-width: 640px) { ... }
  
        'md': '600px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      outline: {
        gray: '1px solid #ededed',
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
