import { describe, it, expect } from "vitest"
import { render, screen } from "../../__tests__/utils/test-utils"
import { Home } from "@/components/home"

describe("Home Route", () => {
  it("renders the main heading", () => {
    render(<Home />)
    expect(screen.getByRole("heading", { name: "Nacer Codes" })).toBeInTheDocument()
  })

  it("renders the description", () => {
    render(<Home />)
    expect(screen.getByText("This is the website.")).toBeInTheDocument()
  })

  it("renders within a main element", () => {
    render(<Home />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })

  it("renders one button enabled", () => {
    render(<Home />)
    const buttons = screen.getAllByRole("button")
    expect(buttons).toHaveLength(1)
    expect(buttons[0]).not.toBeDisabled()
    expect(buttons[0]).toHaveTextContent("Start learning")
  })
})
