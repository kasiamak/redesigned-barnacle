/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{html,js}'], 
    
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/hero.jpg')",
                firmie: "url('/firmie.jpg')",
            },

            colors: {
                'green-main': '#1B5B31',
                'grey-main': '#F5F0EC',
                'beige': '#DCC1AB',
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                monte: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
