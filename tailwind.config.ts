/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    colors: {
      gray: {
        0: '#ffffff',
        50: '#e6e6e6',
        200: '#b3b3b3',
        400: '#808080',
        800: '#4d4d4d',
        900: '#101010',
      },
      blue: {
        0: '#d4d3f8',
        50: '#aeadf1',
        200: '#7977e8',
        400: '#2825da',
        800: '#181683',
      },
      red: {
        0: '#f8d4d3',
        200: '#e97e7c',
        800: '#ca2522',
      },
      green: {
        0: '#d3f8d4',
        200: '#7ce97e',
        800: '#22ca25',
      },
      // white: {
      //   0: 'rgb(255, 255, 255) / <alpha-value>', // #FFFFFF
      //   100: 'rgb(247, 247, 247) / <alpha-value>', // #F7F7F7
      //   200: 'rgb(240, 240, 240) / <alpha-value>', // #F0F0F0
      //   300: 'rgb(234, 234, 234) / <alpha-value>', // #EAEAEA
      //   400: 'rgb(224, 224, 224) / <alpha-value>', // #E0E0E0
      //   500: 'rgb(214, 214, 214) / <alpha-value>', // #D6D6D6
      //   600: 'rgb(204, 204, 204) / <alpha-value>', // #CCCCCC
      //   700: 'rgb(179, 179, 179) / <alpha-value>', // #B3B3B3
      //   800: 'rgb(153, 153, 153) / <alpha-value>', // #999999
      //   900: 'rgb(102, 102, 102) / <alpha-value>', // #666666
      //   1000: 'rgb(51, 51, 51) / <alpha-value>', // #333333
      // },
    },

    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        quicksand: 'var(--font-quicksand)',
        inter: 'var(--font-inter)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
