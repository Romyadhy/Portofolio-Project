/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.css"],
  theme: {
    extend: {
      color: {
        'primary': '#0ea5e9',
        'second': '#60a5fa',
      },
    },
  },
  plugins: [],
}

