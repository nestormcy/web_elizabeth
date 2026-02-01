/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Premium Brand Colors
                cream: '#F5F5DC',
                burgundy: '#4A0E0E',
                gold: '#D4AF37',
                // Supporting Colors
                pureWhite: '#FFFFFF',
                matteBlack: '#1A1A1A',
                darkWood: '#3E2723',
                vinotinto: '#4A0E0E', // Keeping alias for compatibility during migration
                lightGray: '#F5F5DC', // Mapping to cream
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
