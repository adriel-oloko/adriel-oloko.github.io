/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'barn_red': { DEFAULT: '#780000', 100: '#180000', 200: '#310000', 300: '#490000', 400: '#620000', 500: '#780000', 600: '#c80000', 700: '#ff1616', 800: '#ff6464', 900: '#ffb1b1' }, 
            'fire_brick': { DEFAULT: '#c1121f', 100: '#260406', 200: '#4d070c', 300: '#730b12', 400: '#990e17', 500: '#c1121f', 600: '#eb2330', 700: '#f05a64', 800: '#f59198', 900: '#fac8cb' }, 
            'papaya_whip': { DEFAULT: '#fdf0d5', 100: '#593c04', 200: '#b17908', 300: '#f5ae22', 400: '#f9cf7b', 500: '#fdf0d5', 600: '#fdf2dc', 700: '#fef5e5', 800: '#fef9ed', 900: '#fffcf6' }, 
            'prussian_blue': { DEFAULT: '#003049', 100: '#00090e', 200: '#00131d', 300: '#001c2b', 400: '#002539', 500: '#003049', 600: '#00679f', 700: '#00a0f7', 800: '#50c2ff', 900: '#a7e0ff' }, 
            'air_superiority_blue': { DEFAULT: '#669bbc', 100: '#122028', 200: '#233f51', 300: '#355f79', 400: '#477fa2', 500: '#669bbc', 600: '#85afc9', 700: '#a4c3d7', 800: '#c2d7e4', 900: '#e1ebf2' },
            
            'custom-purple': {DEFAULT: '#8E2DE2'},
            'custom-blue': {DEFAULT: '#4A00E0'},
            'custom-black': {DEFAULT: '#121212'}
        },

        aspectRatio: {
            'portfolio': '2047 / 1200',
        },
      },
    },
    plugins: [],
  }