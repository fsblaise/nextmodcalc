import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#DFE0DF",
            foreground: "#1a1c1d",
            primary: {
              foreground: "#DFE0DF",
              DEFAULT: "#FDBA74",
            },
            secondary: {
              foreground: "#DFE0DF",
              DEFAULT: "#00B0A6",
            },
            tertiary: {
              foreground: "#DFE0DF",
              DEFAULT: "#AB7BE7",
            },
          },
        },
        dark: {
          colors: {
            background: "#1a1c1d",
            foreground: "#DFE0DF",
            primary: {
              foreground: "#DFE0DF",
              DEFAULT: "#FDBA74",
            },
            secondary: {
              foreground: "#DFE0DF",
              DEFAULT: "#00B0A6",
            },
            tertiary: {
              foreground: "#DFE0DF",
              DEFAULT: "#AB7BE7",
            },
          },
          
        },
      },
    }),
  ],
}
export default config
