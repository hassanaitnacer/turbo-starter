import { useEffect } from "react"
import { useIsDarkMode } from "./hooks"

export default function ThemeWrapper(props: { children: React.ReactNode }) {
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

  return <>{props.children}</>
}
