import { addons } from "storybook/manager-api"
import { lightTheme } from "./theme"

// Set the default theme for the Storybook UI
// The dark mode addon will override this when toggled
addons.setConfig({
  theme: lightTheme,
})
