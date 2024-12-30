/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#28e98c",
                background: "#202020",
                text: "#fff",
                "text-secondary": "#999",
                border: "#575757",
            },
        },
    },
    plugins: [],
}

