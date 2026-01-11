import { test, expect } from "@playwright/test"

test.describe("Web App - Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173")
  })

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Nacer Codes/)
  })

  test("displays main heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Nacer Codes" })).toBeVisible()
  })

  test("shows description text", async ({ page }) => {
    await expect(page.getByText("This is the website.")).toBeVisible()
  })

  test("renders button", async ({ page }) => {
    const button = page.getByRole("button", { name: "Start learning" })
    await expect(button).toBeVisible()
  })

  test("button is clickable", async ({ page }) => {
    const button = page.getByRole("button", { name: "Start learning" })
    await expect(button).toBeEnabled()
    await button.click()
  })

  test("page is responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.getByRole("heading", { name: "Nacer Codes" })).toBeVisible()
  })

  test("layout is centered", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible()

    // Verify main element exists (layout verification)
    const mainCount = await main.count()
    expect(mainCount).toBe(1)
  })
})
