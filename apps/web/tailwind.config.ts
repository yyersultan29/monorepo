
import type { Config } from "tailwindcss";
// import sharedConfig from "@repo/tailwind-config";


const config: Config = {
  content: [  
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF2A39"
      }
    }
  },
  
};

export default config;