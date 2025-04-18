
import type { Config } from "tailwindcss";

const sharedConfig: Config = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      colors: {
        primary: "#EF2A39", 
      },
      fontSize: {
        "xxl": "34px",
      },

    },
  },
  plugins: [],
};
export default sharedConfig;