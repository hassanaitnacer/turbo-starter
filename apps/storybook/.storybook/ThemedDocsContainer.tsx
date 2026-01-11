import type { ReactRenderer } from "@storybook/react-vite"
import { DocsContainer, DocsContextProps } from "@storybook/addon-docs/blocks"
import { useEffect } from "react"
import { useIsDarkMode } from "./hooks"
import { lightTheme, darkTheme } from "./theme"

export default function ThemedDocsContainer(props: {
  context: DocsContextProps<ReactRenderer>
  children: React.ReactNode
}) {
  const isDarkMode = useIsDarkMode()

  useEffect(() => {
    // Default to light mode if isDarkMode is undefined
    const className = isDarkMode === true ? "dark" : "light"

    // Apply class to body element
    document.body.classList.remove("light", "dark")
    document.body.classList.add(className)

    // Apply background color from CSS variable
    document.body.style.backgroundColor = "var(--default-background-color)"
  }, [isDarkMode])

  return (
    <DocsContainer theme={isDarkMode ? darkTheme : lightTheme} context={props.context}>
      {props.children}
    </DocsContainer>
  )
}
