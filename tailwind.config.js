/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9039FF",
        "text-primary":"#1B2559",
        "light-primary": "#8ABDF8",
        "dark-black": "#2B3674", 
        "light-black": "#68709C",
        secondary: "#3D4854",
        danger: "#FF4747",
        lightGray: "#8386A8",
        black: "#3D4854",
        success: "#01BE4F",
        white: "#fff",
        "sidebar-bg":"linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.00) 104.88%)"
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
      boxShadow: {
        shadowOne: "11px 16px 42px 0px rgba(85, 52, 221, 0.15)",
        shadowTwo: "0px 4px 15px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
