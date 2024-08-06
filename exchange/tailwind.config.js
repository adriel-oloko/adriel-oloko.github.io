/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors: { 
            'xanthous': { DEFAULT: '#f0af10', 100: '#302303', 200: '#604606', 300: '#906a09', 400: '#c08d0c', 500: '#f0af10', 600: '#f3c03f', 700: '#f6d06f', 800: '#f9df9f', 900: '#fcefcf' }, 
            'midnight_blue': { DEFAULT: '#18206f', 100: '#050616', 200: '#0a0d2b', 300: '#0e1341', 400: '#131a57', 500: '#18206f', 600: '#2533ab', 700: '#4554d6', 800: '#838de4', 900: '#c1c6f1' }, 
            'mantis': { DEFAULT: '#5fad56', 100: '#132311', 200: '#254622', 300: '#386933', 400: '#4b8c44', 500: '#5fad56', 600: '#7fbe78', 700: '#9fce9a', 800: '#bfdfbc', 900: '#dfefdd' }, 
            'davys_gray': { DEFAULT: '#5f5f5f', 100: '#131313', 200: '#262626', 300: '#393939', 400: '#4b4b4b', 500: '#5f5f5f', 600: '#7e7e7e', 700: '#9f9f9f', 800: '#bfbfbf', 900: '#dfdfdf' }, 'white': { DEFAULT: '#ffffff', 100: '#333333', 200: '#666666', 300: '#999999', 400: '#cccccc', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff', 800: '#ffffff', 900: '#ffffff' } }
      },
    },
    plugins: [],
  }