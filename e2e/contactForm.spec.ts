import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test("Shows a descriptive error message when email has invalid format", async ({
    page,
  }) => {
    await page.goto("/contact");
    await page.getByPlaceholder(/email/i).fill("xyz@mo");
    await page.press("body", "Tab");

    const errorMessage = page.getByRole("alert").getByText(/format/);

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(/invalid format/i);
  });

  test("Shows an error when a required field is empty", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "submit" }).click();

    const errorMessageName = page.getByRole("alert").first();
    const errorMessageEmail = page.getByRole("alert").nth(1);
    const errorMessageMessage = page.getByRole("alert").nth(2);

    await expect(errorMessageName).toBeVisible();
    await expect(errorMessageName).toContainText(/can.t be empty/i);

    await expect(errorMessageEmail).toBeVisible();
    await expect(errorMessageEmail).toContainText(/can.t be empty/i);

    await expect(errorMessageMessage).toBeVisible();
    await expect(errorMessageMessage).toContainText(/can.t be empty/i);
  });

  test("Auto-focuses an invalid field", async ({ page }) => {
    await page.goto("/contact");
    await page.getByPlaceholder("Name*").fill("John Doe");
    await page
      .getByPlaceholder("Your message*")
      .fill("I would love to work with you on project...");

    await page.getByRole("button", { name: "submit" }).click();

    await expect(page.getByPlaceholder("Email Address*")).toBeFocused();
  });
});
