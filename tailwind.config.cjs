/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  // Add the paths to all of your template files in your tailwind.config.js file.
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  // Possible theme
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#5beaa0",
  //         secondary: "#e241d8",
  //         accent: "#ffe66d",
  //         neutral: "#1E141F",
  //         "base-100": "#4A4554",
  //         info: "#379AE6",
  //         success: "#1CC495",
  //         warning: "#FABD5C",
  //         error: "#E7746E"
  //       }
  //     }
  //   ]
  // }
};
