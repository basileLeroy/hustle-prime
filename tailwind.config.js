module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
            green: {
                vrt: '#38f34b',
                vrtdark: '#38e34b',
                footer: '#DEFFB4',
                profilebg: '#94FFBF',
                profiledeets: '#D9F8EC',
            },
            yellow: {
                banana: '#F4FFE5',
            },
            brown: {
                sand: '#D5C7BA',
                clay: '#AC6C53',
                yellow: '#C5874B',
                white: '#F2F2F2',
                navajo: '#FFDEAD'
            },
            blue: {
                ocean: '#31596D',
                naval: '#2F3E4C',
                aliceBlue: '#f0f8ff',
            },
            gray: {
                input: '#9CA38F',
                hustle: '#212121',
            },
            },
            rotate: {
            contact: '-4.4deg',
            },
            scale: {
            25: '.25',
            },
            height: {
            ten: '10%',
            nine: '90%',
            moodTracker: '600px',
            },
            width: {
            ten: '10%',
            nine: '90%',
            150: '150%',
            seven: '70%',
            },
            maxHeight: {
            moodTracker: '600px',
            },
            maxWidth: {
            Large: '2000px'
            },
            minWidth: {
            100: '30rem',
            },
        },
        boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
            discord: '0 5px 60px -5px rgba(0, 249, 255, 0.3)',
        },
    },
    variants: {
    fill: ['hover', 'focus'],
    extend: {},
    },
    plugins: [],
}
