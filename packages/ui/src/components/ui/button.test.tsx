import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./button"
import { ArrowRight, ArrowLeft } from "lucide-react"

describe("Button", () => {
  describe("Rendering", () => {
    it("renders with children", () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
    })

    it("renders as child component when asChild is true", () => {
      render(
        <Button asChild>
          <a href="/test">Link Button</a>
        </Button>
      )
      const link = screen.getByRole("link", { name: "Link Button" })
      expect(link).toHaveAttribute("href", "/test")
    })
  })

  describe("Icons", () => {
    it("renders button with start icon and text", () => {
      render(<Button startIcon={<ArrowLeft aria-hidden />}>Previous</Button>)
      expect(screen.getByRole("button", { name: "Previous" })).toBeInTheDocument()
    })

    it("renders button with end icon and text", () => {
      render(<Button endIcon={<ArrowRight aria-hidden />}>Next</Button>)
      expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument()
    })

    it("renders button with both icons and text", () => {
      render(
        <Button startIcon={<ArrowLeft aria-hidden />} endIcon={<ArrowRight aria-hidden />}>
          Navigate
        </Button>
      )
      expect(screen.getByRole("button", { name: "Navigate" })).toBeInTheDocument()
    })
  })

  describe("States", () => {
    it("can be disabled", () => {
      render(<Button disabled>Disabled</Button>)
      expect(screen.getByRole("button", { name: "Disabled" })).toBeDisabled()
    })

    it("is disabled when loading", () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole("button", { name: "Loading" })).toBeDisabled()
    })

    it("is disabled when loading even if disabled prop is false", () => {
      render(
        <Button loading disabled={false}>
          Loading
        </Button>
      )
      expect(screen.getByRole("button", { name: "Loading" })).toBeDisabled()
    })
  })

  describe("Interactions", () => {
    it("calls onClick when clicked", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(<Button onClick={handleClick}>Click me</Button>)
      await user.click(screen.getByRole("button", { name: "Click me" }))

      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it("does not call onClick when disabled", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(
        <Button onClick={handleClick} disabled>
          Click me
        </Button>
      )
      await user.click(screen.getByRole("button", { name: "Click me" }))

      expect(handleClick).not.toHaveBeenCalled()
    })

    it("does not call onClick when loading", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(
        <Button onClick={handleClick} loading>
          Click me
        </Button>
      )
      await user.click(screen.getByRole("button", { name: "Click me" }))

      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe("Accessibility", () => {
    it("can be found by aria-label", () => {
      render(<Button aria-label="Close dialog">X</Button>)
      expect(screen.getByRole("button", { name: "Close dialog" })).toBeInTheDocument()
    })

    it("can be associated with a label using aria-labelledby", () => {
      render(
        <div>
          <span id="button-label">Submit form</span>
          <Button aria-labelledby="button-label">→</Button>
        </div>
      )
      expect(screen.getByRole("button", { name: "Submit form" })).toBeInTheDocument()
    })

    it("can be described using aria-describedby", () => {
      render(
        <div>
          <Button aria-describedby="help-text">Submit</Button>
          <span id="help-text">This will send your data</span>
        </div>
      )
      const button = screen.getByRole("button", { name: "Submit" })
      expect(button).toHaveAccessibleDescription("This will send your data")
    })
  })

  describe("Form integration", () => {
    it("can be a submit button", () => {
      render(<Button type="submit">Submit</Button>)
      expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute("type", "submit")
    })

    it("can be associated with a form", () => {
      render(
        <>
          <form id="my-form" />
          <Button form="my-form">Submit External Form</Button>
        </>
      )
      expect(screen.getByRole("button", { name: "Submit External Form" })).toHaveAttribute(
        "form",
        "my-form"
      )
    })
  })

  describe("Polymorphic behavior", () => {
    it("renders as a link when asChild is used with anchor", () => {
      render(
        <Button asChild>
          <a href="/dashboard">Go to Dashboard</a>
        </Button>
      )

      const link = screen.getByRole("link", { name: "Go to Dashboard" })
      expect(link).toHaveAttribute("href", "/dashboard")
      expect(screen.queryByRole("button")).not.toBeInTheDocument()
    })

    it("handles click events on polymorphic link", async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()

      render(
        <Button asChild onClick={handleClick}>
          <a href="/link">Link Button</a>
        </Button>
      )

      await user.click(screen.getByRole("link", { name: "Link Button" }))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
