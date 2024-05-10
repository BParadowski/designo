import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/contact");
});

test.describe("Contact form", () => {
  test("Shows a descriptive error message when email has invalid format", async ({
    page,
  }) => {
    await page.getByPlaceholder(/email/i).fill("xyz@mo");
    await page.press("body", "Tab");

    const errorMessage = page.getByRole("alert").getByText(/format/);

    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText(/invalid format/i);
  });

  test("Shows an error when a required field is empty", async ({ page }) => {
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
    await page.getByPlaceholder("Name*").fill("John Doe");
    await page
      .getByPlaceholder("Your message*")
      .fill("I would love to work with you on project...");

    await page.getByRole("button", { name: "submit" }).click();

    await expect(page.getByPlaceholder("Email Address*")).toBeFocused();
  });

  test("Shows a confirmation modal after succesfully submitting", async ({
    page,
  }) => {
    await page.getByPlaceholder("Name*").fill("John Doe");
    await page.getByPlaceholder("Name*").press("Tab");
    await page
      .getByPlaceholder("Email Address*")
      .fill("email@someprovider.com");
    await page.getByPlaceholder("Email Address*").press("Tab");
    await page.getByPlaceholder("Phone").fill("354 987 902");
    await page.getByPlaceholder("Phone").press("Tab");
    await page
      .getByPlaceholder("Your message*")
      .fill("I want to colaborate on...");
    await page.getByPlaceholder("Your message*").press("Tab");
    await page.getByRole("button", { name: "submit" }).press("Enter");

    await expect(page.getByRole("alertdialog")).toBeVisible();
    await expect(page.getByRole("button", { name: "Got it" })).toBeFocused();
  });
});
