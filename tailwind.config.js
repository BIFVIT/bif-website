/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'content', 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'text': '#0c070d',
      'background': '#f3e5f5',
      'primary': '#97569f',
      'secondary': '#e1cde4',
      'accent': '#8a5095',
      'highlight': '#dfc8e3',
      'darktext': '#f7f2f8',
      'darkbackground': '#180a1a',
      'darkprimary': '#a160a9',
      'darksecondary': '#2f1b32',
      'darkaccent': '#a36aaf',
      'darkhighlight':'#462d4b',
     },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        '3xl': '0 20px 80px -10px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'twinkle': 'twinkle 1.5s linear infinite',

      }, 
      
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 }
        }
      },
      // animation: {
      //   twinkle: 'twinkle 1.5s linear infinite',
      // },

    },
    // animationspin: {
    //   'spin-slow': 'spin 3000 linear infinite',
    // },


  },
  
      
  plugins: [],
}
