/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#f7edd7',
          DEFAULT: '#e8dcc8',
          dark: '#d4c5a8'
        },
        dark: {
          grey: '#1A1A1A',
          DEFAULT: '#2A2A2A',
          light: '#3A3A3A'
        },
        // accent: {
        //   coral: '#FF5A5F',     // coral: '#FF5A5F',
        //   orange: '#fb9035',    // orange: '#FF8A3D',
        //   yellow: '#FFC857',    // yellow: '#FFC857',
        //   purple: '#6A5ACD',    // purple: '#6A5ACD',
        //   violet: '#2E1A47'     // violet: '#2E1A47'
        // }
        // accent: {
        //   orange: '#fb9035',     
        //   pink: '#d34763',    
        //   purple: '#86276e',  
        //   violet: '#521d8f',    
        //   darkpurple: '#291148'     
        // }
        // accent: {
        //   red: '#df2c06',     
        //   orange: '#fb8738',    
        //   yellow: '#ffb431',  
        //   green: '#4e603a',    
        //   blue: '#296b6a'     
        // }
        accent: {
          yellow: '#dfb73f',     
          green: '#80934e',    
          turqoise: '#86b4ae',  
          blue: '#6b99b2'    
        }
      },
      fontFamily: {
        'display': ['"Shippori Mincho"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-on-hover': 'scale 0.3s ease-in-out',
        'grain': 'grain 8s steps(10) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 5%)' },
          '90%': { transform: 'translate(10%, -5%)' },
        },
        // float: {
        //   '0%, 100%': { transform: 'translateY(0px)' },
        //   '50%': { transform: 'translateY(-20px)' },
        // },
        float: {
            '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
            '25%': { transform: 'translate(10px, -15px) rotate(5deg)' },
            '50%': { transform: 'translate(-5px, -25px) rotate(-5deg)' },
            '75%': { transform: 'translate(-15px, -10px) rotate(3deg)' },
        },
        floatSlow: {
            '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(20px, -20px) scale(1.1)' },
            '66%': { transform: 'translate(-15px, -10px) scale(0.9)' },
        },
        drift: {
            '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
            '25%': { transform: 'translateX(50px) translateY(-25px)' },
            '50%': { transform: 'translateX(-30px) translateY(-40px)' },
            '75%': { transform: 'translateX(25px) translateY(-15px)' },
        },
        animation: {
            'fade-in': 'fadeIn 0.5s ease-out',
            'slide-up': 'slideUp 0.6s ease-out',
            'scale-on-hover': 'scale 0.3s ease-in-out',
            'grain': 'grain 8s steps(10) infinite',
            'float': 'float 8s ease-in-out infinite',
            'float-slow': 'floatSlow 12s ease-in-out infinite',
            'drift': 'drift 15s ease-in-out infinite',
        },
      },
      
      backgroundImage: {
        'grain-light': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E\")",
        'grain-medium': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E\")",
        'grain-heavy': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.45'/%3E%3C/svg%3E\")",
      },
      mixBlendMode: {
        'overlay': 'overlay',
        'multiply': 'multiply',
        'screen': 'screen',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.mix-blend-overlay': {
          'mix-blend-mode': 'overlay',
        },
        '.mix-blend-multiply': {
          'mix-blend-mode': 'multiply',
        },
        '.mix-blend-screen': {
          'mix-blend-mode': 'screen',
        },
      })
    }
  ],
}