/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      screens : {
        "sm" : "540px",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
