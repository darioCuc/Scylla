import { Page, expect } from '@playwright/test';

// ***************************** LOCATORS *****************************

export const inputEmail = (page: Page) => page.getByLabel('Email');

export const inputPassword = (page: Page) => page.locator('[data-test-id="input-password"]')

export const submitButton = (page: Page) => page.locator('[data-test-id="submit-btn"]')

export const signUpLink = (page: Page) => page.getByTestId('redirect-to-signup');

export const signInLink = (page: Page) => page.getByTestId('redirect-to-login');

export const companyEmailInput = (page: Page) => page.getByTestId('email-box');

export const firstNameInput = (page: Page) => page.getByTestId('first-name-box');

export const lastNameInput = (page: Page) => page.getByTestId('last-name-box');

export const companyNameInput = (page: Page) => page.getByTestId('companyName-box');

// ***************************** ACTIONS *****************************

async function navigateTo(page: Page) {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveText('Get Started with ScyllaDB Cloud');
    await expect(page.getByText('Sign-in')).toBeVisible();
}

export async function login(page: Page, username: string, password: string) {
    await navigateTo(page);
    await inputEmail(page).fill(username);
    await submitButton(page).click();
    await inputPassword(page).waitFor();
    await inputPassword(page).fill(password);
    await submitButton(page).click();
    await page.waitForLoadState('domcontentloaded');
}


// ***************************** ASSERTIONS *****************************
