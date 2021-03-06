module.exports = {
  purge: [
    './components/**/*.js',
    './components/**/*.jsx',
    './pages/**/*.js',
    './pages/**/*.jsx'
  ],
  // important: true,
  theme: {
    fontFamily: {
      body: ['Noto Sans HK', 'sans-serif']
    },
    colors: {
      c000: '#ffffff', //white
      c100: '#000000', // black
      c200: '#66f28d',
      c300: '#2D5BFF',
      c400: 'rgba(102, 242, 141, 0.61)',
      c500: 'rgba(0, 0, 0, 0.38)',
      c600: 'rgba(0, 0, 0, 0.51)',
      c700: 'rgba(0, 0, 0, 0.7)',
      c800: 'rgba(0, 0, 0, 0.96)',
      c900: '#0A0A0A',
      c1000: 'rgba(196, 196, 196, 0.29)',
      c1100: 'rgba(238, 239, 240, 0.9)',
      c1200: '#F0FAF3', // project card bg
      c1300: '#A4B6F9' // Mentor Card Bg
    },
    fontSize: {
      xxs: '0.875rem', //14px
      xs: '1rem', // 16px
      sm: '1.25rem', // 20px
      base: '1.5rem', // 24px
      md: '1.75rem', // 28px
      lg: '2.125rem', //34px
      xlg: '2.375rem', //38px
      xxlg: '2.5rem', //40px
      xxxlg: '3.75rem', //60px
      super: '4.375rem', //70px
      ultra: '5rem', //80px
      giant: '7.75rem' //124px
    },
    extend: {
      lineHeight: {
        body: '1.2'
      },
      boxShadow: {
        btn: '0px 8px 20px 3px rgba(0, 0, 0, 0.08)',
        card: '0 0 40px rgba(0, 0, 0, 0.1)',
        img: '0px 4px 10px rgba(0, 0, 0, 0.2)'
      },
      spacing: {
        '.5': '2px',
        72: '19rem'
      },
      inset: {
        12: '3rem',
        '-12': '-3rem',
        '1/2': '50%',
        '-30': '-7.5rem'
      },
      zIndex: {
        '-1': '-1'
      },
      maxWidth: {
        xxs: '10rem'
      }
    }
  },
  corePlugins: {
    container: false
  },
  variants: {
    margin: ['responsive', 'group-hover', 'last']
  },
  plugins: []
};
