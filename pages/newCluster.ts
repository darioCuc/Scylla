import { Page, expect } from '@playwright/test';

export enum Regions {
    USWest = 'US West (N. California)',
    AsiaPacific = 'Asia Pacific (Osaka)',
    Europe = 'Europe (Paris)',
    Africa = 'Africa (Cape Town)',
    MiddleEast = 'Middle East (Bahrain)',
}

const regionPrices = {
    [Regions.USWest]: '$1.299',
    [Regions.AsiaPacific]: '$1.332',
    [Regions.Europe]: '$1.326',
    [Regions.Africa]: '$1.398',
    [Regions.MiddleEast]: '$1.35',
};

// ***************************** LOCATORS *****************************

export const newClusterButton = (page: Page) =>
    page.getByRole('link', { name: 'New Cluster' });

export const clusterNameInput = (page: Page) =>
    page.getByTestId('clusterNameInp').locator('input');

export const clusterNameErrorText = (page: Page) =>
    page.getByTestId('clusterNameInp').locator('p');;

export const nextNetworkSettingsButton = (page: Page) =>
    page.getByRole('button', { name: 'NEXT: NETWORK SETTINGS' });

export const displayedPricingPerHour = (page: Page) => 
    page.locator('#totalCostPerHour').getByText('$');

export const clusterDescriptionPanel = (page: Page) =>
    page.getByTestId('instanceDescriptionPanel');

export const regionSelect = (page: Page) =>
    page.getByTestId('CloudProviderRegionSelect');

// ***************************** ACTIONS *****************************


export async function clusterNameInputLengthCheck(page: Page) {
    await clusterNameInput(page).fill('A'.repeat(31)); 
    await expect(clusterNameErrorText(page)).toHaveText('Cluster name should contain a maximum of 30 characters');
}

export async function clusterNameInputCharCheck(page: Page) {
    const specialChars = ['@', '_', '&', '#', '-'];

    for (const char of specialChars) {
        // Invalid start
        await clusterNameInput(page).fill(`${char}ValidName`);
        await expect(clusterNameErrorText(page)).toHaveText('Cluster name should start and end with an alphanumeric character and can contain @ _ & # -');
        await clusterNameInput(page).clear();

        // Invalid end
        await clusterNameInput(page).fill(`ValidName${char}`);
        await expect(clusterNameErrorText(page)).toHaveText('Cluster name should start and end with an alphanumeric character and can contain @ _ & # -');
        await clusterNameInput(page).clear();

        // Valid usage (not at start or end)
        await clusterNameInput(page).fill(`Valid${char}Name`);
        await expect(clusterNameErrorText(page)).toBeHidden();
    }
}

export async function emptyClusterNameCheck(page: Page) {
    await expect(newClusterButton(page)).toBeVisible();
    await expect(clusterNameInput(page)).toBeVisible();
    await expect(nextNetworkSettingsButton(page)).toBeVisible();
    await nextNetworkSettingsButton(page).click();
    await expect(clusterNameErrorText(page)).toHaveText('This field is required');
}

export async function enterClusterName(page: Page, validClusterName: string) {
    await clusterNameInput(page).fill(validClusterName);
    await expect(clusterNameErrorText(page)).toBeHidden();
}

export async function clickOnNextNetworkSettings(page: Page) {
    await nextNetworkSettingsButton(page).waitFor();
    await nextNetworkSettingsButton(page).click();
    await clusterDescriptionPanel(page).waitFor();
    await expect(clusterDescriptionPanel(page)).toBeVisible();
}

export async function selectRegion(page: Page, region: Regions) {
    await regionSelect(page).waitFor();
    await regionSelect(page).click();
    await page.locator('ul').getByRole('option', { name: region }).click();
}

export async function regionPricingCheck(page: Page) {
    for (const region of Object.values(Regions)) {
        await selectRegion(page, region);
        const expectedPrice = regionPrices[region];
        await displayedPricingPerHour(page).waitFor();
        await expect(displayedPricingPerHour(page)).toHaveText(expectedPrice);
    }
}
