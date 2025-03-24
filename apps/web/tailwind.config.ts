
import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";


const config: Pick<Config, "content" | "presets" > = {
  presets: [sharedConfig],
  content: ["./app/**/*.tsx"],
};

export default config;