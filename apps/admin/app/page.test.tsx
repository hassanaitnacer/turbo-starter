import { describe, it, expect } from "vitest"
import { render, screen } from "@/__tests__/utils/test-utils"
import Home from "./page"

describe("Admin Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />)
    expect(screen.getByRole("heading", { name: "Nacer Codes" })).toBeInTheDocument()
  })

  it("displays admin panel text", () => {
    render(<Home />)
    expect(screen.getByText("This is the admin panel.")).toBeInTheDocument()
  })

  it("renders within a main element", () => {
    render(<Home />)
    expect(screen.getByRole("main")).toBeInTheDocument()
  })
})
