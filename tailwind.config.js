/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#635FC7",
        "semi-purple": "#A8A4FF",
        dark: "#000112",
        "semi-dark": "#20212C",
        grey: "#2B2C37",
        "semi-grey": "#3E3F4E",
        "light-grey": "#828FA3",
        "dark-light": "#E4EBFA",
        "white-smoke": "#F4F7FD",
        red: "#EA5555",
        "light-red": "#FF9898",
      },
    },
  },
  plugins: [],
};
