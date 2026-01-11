import * as RTL from "@testing-library/react"
import type { ReactElement } from "react"

// Custom render that wraps with providers if needed
function customRender(ui: ReactElement, options?: Omit<RTL.RenderOptions, "wrapper">) {
  return RTL.render(ui, { ...options })
}

// Re-export everything from @testing-library/react
export const {
  screen,
  waitFor,
  within,
  fireEvent,
  cleanup,
  act,
  renderHook,
  waitForElementToBeRemoved,
} = RTL

export { customRender as render }
