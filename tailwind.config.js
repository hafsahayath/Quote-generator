const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     colors: {
//       transparent: 'transparent',
//       current: 'currentColor',
//       black: colors.black,
//       white: colors.white,
//       gray: colors.trueGray,
//       indigo: colors.indigo,
//       red: colors.rose,
//       yellow: colors.amber,
//     }
//   }
// }

module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      indigo: colors.indigo,
      green: colors.green,
      white: colors.white,
      darkBlue: {
        DEFAULT: "#25234F"
      },
      pinkBg: {
        DEFAULT: "#FBF3F3"
      },
      pinkMain: {
        DEFAULT: "#BD2F85"
      },
      whitesmoke:{
        DEFAULT:"#F5F5F5."
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}