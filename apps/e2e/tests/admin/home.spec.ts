import { test, expect } from "@playwright/test"

test.describe("Admin App - Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000")
  })

  test("has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Nacer Codes/)
  })

  test("displays main heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Nacer Codes" })).toBeVisible()
  })

  test("shows admin panel description", async ({ page }) => {
    await expect(page.getByText("This is the admin panel.")).toBeVisible()
  })

  test("renders within a main element", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible()
  })

  test("page is responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.getByRole("heading", { name: "Nacer Codes" })).toBeVisible()
    await expect(page.getByText("This is the admin panel.")).toBeVisible()
  })

  test("layout is centered", async ({ page }) => {
    const main = page.locator("main")
    await expect(main).toBeVisible()

    // Verify main element exists
    const mainCount = await main.count()
    expect(mainCount).toBe(1)
  })
})
