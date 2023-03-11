/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                // Simple 16 column grid
                'custom-grid': '316px 1fr 1fr 1fr auto',
                'grid-product': '1fr 1fr 1fr 1fr auto',
                'grid-total': '200px 1fr',

            },
        },
    },
    plugins: [],
}
