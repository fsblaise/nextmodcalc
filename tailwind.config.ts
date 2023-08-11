import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

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
              '50': '#fff6ed',
              '100': '#ffead5',
              '200': '#fed5aa',
              '300': '#fdba74',
              '400': '#fb9e3c',
              '500': '#f98a16',
              '600': '#ea7d0c',
              '700': '#c2690c',
              '800': '#9a5712',
              '900': '#7c4812',
              '950': '#432607',
            },
            secondary: {
              foreground: "#DFE0DF",
              DEFAULT: "#00B0A6",
              '50': '#effefb',
              '100': '#c7fff6',
              '200': '#90ffed',
              '300': '#51f7e2',
              '400': '#1de4d1',
              '500': '#04c8b8',
              '600': '#00b0a6',
              '700': '#05807a',
              '800': '#0a6562',
              '900': '#0d5451',
              '950': '#003233',
            },
            tertiary: {
              foreground: "#DFE0DF",
              DEFAULT: "#AB7BE7",
              '50': '#f9f6fe',
              '100': '#f2ebfc',
              '200': '#e7dafa',
              '300': '#d4bdf5',
              '400': '#ba92ee',
              '500': '#ab7be7',
              '600': '#8949d4',
              '700': '#7437b9',
              '800': '#623198',
              '900': '#51297a',
              '950': '#351259',
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
              '50': '#fff6ed',
              '100': '#ffead5',
              '200': '#fed5aa',
              '300': '#fdba74',
              '400': '#fb9e3c',
              '500': '#f98a16',
              '600': '#ea7d0c',
              '700': '#c2690c',
              '800': '#9a5712',
              '900': '#7c4812',
              '950': '#432607',
            },
            secondary: {
              foreground: "#DFE0DF",
              DEFAULT: "#00B0A6",
              '50': '#effefb',
              '100': '#c7fff6',
              '200': '#90ffed',
              '300': '#51f7e2',
              '400': '#1de4d1',
              '500': '#04c8b8',
              '600': '#00b0a6',
              '700': '#05807a',
              '800': '#0a6562',
              '900': '#0d5451',
              '950': '#003233',
            },
            tertiary: {
              foreground: "#DFE0DF",
              DEFAULT: "#AB7BE7",
              '50': '#f9f6fe',
              '100': '#f2ebfc',
              '200': '#e7dafa',
              '300': '#d4bdf5',
              '400': '#ba92ee',
              '500': '#ab7be7',
              '600': '#8949d4',
              '700': '#7437b9',
              '800': '#623198',
              '900': '#51297a',
              '950': '#351259',
            },
          },

        },
      },
    }),
  ],
}
export default config
