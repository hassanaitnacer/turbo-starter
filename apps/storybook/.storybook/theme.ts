import { create } from "storybook/theming/create"

const common = {
  brandTitle: "Nacer Codes UI",
  brandUrl: "http://nacercodes.local",
  brandTarget: "_self",

  // Typography
  fontBase: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
  fontCode: '"JetBrains Mono", "Consolas", monospace',
}

export const lightTheme = create({
  ...common,
  base: "light",
  brandImage: "/images/logo-dark.svg",
})

export const darkTheme = create({
  ...common,
  base: "dark",
  brandImage: "/images/logo-light.svg",
})
