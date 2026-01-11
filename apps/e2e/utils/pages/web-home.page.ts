import { Page, Locator } from "@playwright/test"

export class WebHomePage {
  readonly page: Page
  readonly heading: Locator
  readonly description: Locator
  readonly loadingButton: Locator
  readonly activeButton: Locator

  constructor(page: Page) {
    this.page = page
    this.heading = page.getByRole("heading", { name: "Nacer Codes" })
    this.description = page.getByText("This is the website.")
    this.loadingButton = page.getByRole("button", { name: "Click" }).first()
    this.activeButton = page.getByRole("button", { name: "Click" }).last()
  }

  async goto() {
    await this.page.goto("http://localhost:5173")
  }

  async clickActiveButton() {
    await this.activeButton.click()
  }

  async verifyContent() {
    await this.heading.waitFor({ state: "visible" })
    await this.description.waitFor({ state: "visible" })
  }
}
