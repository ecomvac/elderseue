/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9039FF",
        "light-primary": "#8ABDF8",
        "drak-black": "#2B3674",
        "light-black": "#68709C",
        secondary: "#3D4854",
        danger: "#FF4747",
        lightGray: "#8386A8",
        black: "#3D4854",
        success: "01BE4F",
        white: "#fff",
      },
      screens: {
        sm: "320px",
        md: "768px",
        md2: "900px",
        lg: "974px",
        lg2: "1280px",
        xl: "1440px",
        xl2: "2000px"
      },
    },
  },
  plugins: [],
};
