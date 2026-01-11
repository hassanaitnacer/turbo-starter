import { useState, useEffect } from "react"
import { addons } from "storybook/preview-api"
import { DARK_MODE_EVENT_NAME } from "@vueless/storybook-dark-mode"
import { Listener } from "storybook/internal/channels"

const channel = addons.getChannel()

/**
 * Use this hook if you want to pass in your own callback, e.g. Mantine's `setColorScheme`
 **/
export function useOnDarkModeEvent(callback: Listener) {
  useEffect(function () {
    channel.on(DARK_MODE_EVENT_NAME, callback)
    return () => channel.off(DARK_MODE_EVENT_NAME, callback)
  })
}

/**
 * Use this hook if you only need to know whether dark mode is toggled on
 **/
export function useIsDarkMode() {
  // Initialize state by reading the current body class
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return document.body.classList.contains("dark")
  })

  useOnDarkModeEvent(setIsDarkMode)
  return isDarkMode
}
