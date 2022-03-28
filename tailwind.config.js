module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      // Black Lion Box color palette
      // L = Light Mode
      // D = Dark Mode
      // M = Main  brand color
      // A = Alternative brand color

      "L-Gray-dark": "#6D6F73",
      "L-Gray-med": "#A3AFC0",
      "L-Gray-light": "#F1F0F2",
      "D-Gray-dark": "#2E2E30",
      "D-Gray-med": "#868F9B",
      "D-Gray-light": "#DCDBDB",
      "M-Lime": "#DCDB37",
      "A-Magenta": "#DD156D",
      "A-Orange": "#F26722",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};