/** @type {import('tailwindcss').Config} */
export default {
  // Make sure Tailwind scans the frontend folder and .jsx/.tsx files
  content: ["./frontend/src/**/*.{html,js,jsx,ts,tsx}", "./frontend/index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#49557e',
      }
    }
  },
  plugins: [],
}