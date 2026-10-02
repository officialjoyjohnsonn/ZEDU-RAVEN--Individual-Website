import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0E14",
        panel: "#111623",
        volt: "#D4FF3F",
        mist: "#E8ECF3",
      },
      fontFamily: { display: ["Inter","system-ui","sans-serif"] },
      boxShadow: { glow: "0 0 40px rgba(212,255,63,.25)" },
    },
  },
  plugins: [],
};
export default config;
