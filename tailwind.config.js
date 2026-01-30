/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                vinotinto: '#800020',
                lightGray: '#F5F5F5',
                pureWhite: '#FFFFFF',
                matteBlack: '#1A1A1A',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'wood-pattern': "url('/wood-texture.png')",
                'nature-pattern': "url('/nature-bg.png')",
            }
        },
    },
    plugins: [],
}
