module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "max-xl": { "max": "1400px" }, 
    }
  },
  corePlugins: { },   // <— disables Tailwind’s reset
  plugins: [require("daisyui")],
};
