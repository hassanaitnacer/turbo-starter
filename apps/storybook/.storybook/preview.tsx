import type { Preview } from "@storybook/react-vite"

import "@nacercodes/ui/styles.css"
import "./preview.css"
import ThemedDocsContainer from "./ThemedDocsContainer"
import ThemeWrapper from "./ThemeWrapper"
import { lightTheme, darkTheme } from "./theme"

const preview: Preview = {
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      container: ThemedDocsContainer,
      story: {
        inline: true,
      },
    },

    a11y: {
      test: "todo",
    },

    // Configure dark mode addon
    darkMode: {
      current: "light",
      darkClass: "dark",
      lightClass: "light",
      classTarget: "body",
      stylePreview: true,
      // Apply custom themes to the Storybook UI
      dark: darkTheme,
      light: lightTheme,
    },

    // Disable default backgrounds toolbar and use theme-based backgrounds
    backgrounds: {
      disable: true,
    },
  },

  decorators: (renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
}

export default preview
