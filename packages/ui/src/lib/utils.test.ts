import { describe, it, expect } from "vitest"
import { cn } from "./utils"

describe("cn utility", () => {
  it("merges multiple class strings", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("handles undefined and null values", () => {
    expect(cn("foo", undefined, "bar", null)).toBe("foo bar")
  })

  it("handles boolean conditional classes", () => {
    const isActive = true
    const isDisabled = false
    expect(cn("foo", isActive && "bar", isDisabled && "baz")).toBe("foo bar")
  })

  it("merges class objects", () => {
    expect(cn({ foo: true, bar: false, baz: true })).toBe("foo baz")
  })

  it("merges arrays of classes", () => {
    expect(cn(["foo", "bar"], "baz")).toBe("foo bar baz")
  })

  it("merges tailwind classes correctly (tailwind-merge)", () => {
    // tailwind-merge should keep the last occurrence of conflicting utilities
    expect(cn("ui:p-4", "ui:p-8")).toBe("ui:p-8")
    expect(cn("ui:px-2", "ui:px-4")).toBe("ui:px-4")
  })

  it("merges regular tailwind classes correctly", () => {
    // Without ui: prefix
    expect(cn("p-4", "p-8")).toBe("p-8")
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500")
  })

  it("preserves non-conflicting classes", () => {
    expect(cn("ui:p-4", "ui:m-2", "ui:text-center")).toBe("ui:p-4 ui:m-2 ui:text-center")
  })

  it("handles complex merging scenarios", () => {
    expect(cn("ui:px-2 ui:py-1", "ui:px-4")).toBe("ui:py-1 ui:px-4")
  })

  it("handles empty inputs", () => {
    expect(cn()).toBe("")
    expect(cn("", undefined, null, false)).toBe("")
  })

  it("handles mixed tailwind and custom classes", () => {
    expect(cn("custom-class", "ui:p-4", "another-custom")).toBe(
      "custom-class ui:p-4 another-custom"
    )
  })

  it("handles duplicate classes (tailwind-merge only deduplicates conflicting utilities)", () => {
    // Non-conflicting classes are not deduplicated
    expect(cn("foo", "foo", "bar")).toBe("foo foo bar")
    // But conflicting Tailwind utilities are merged correctly
    expect(cn("ui:p-4", "ui:p-4", "ui:m-2")).toBe("ui:p-4 ui:m-2")
  })

  it("handles complex conditional logic", () => {
    const isActive = true
    const hasError = false
    const variant = "primary"

    expect(
      cn(
        "base-class",
        isActive && "active",
        hasError && "error",
        variant === "primary" && "primary-variant"
      )
    ).toBe("base-class active primary-variant")
  })
})
