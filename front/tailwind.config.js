/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-custom-gradient": "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
      },
    },
  },
  plugins: [],
};
