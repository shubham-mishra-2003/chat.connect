import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

import daisyui from "daisyui";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        gradient: "gradient 5s ease infinite"
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #39D353, #4CAF50)" // Example gradient; adjust as needed
      }
    }
  },
  plugins: [daisyui, tailwindcssAnimate]
};

export default config;
