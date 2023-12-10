import { Page, expect } from '@playwright/test';


// ***************************** LOCATORS *****************************

export const newClusterButton = (page: Page) =>
    page.getByRole('link', { name: 'New Cluster' });

export const myClustersButton = (page: Page) =>
    page.getByRole('link', { name: 'My Clusters' });

export const supportMenuButton = (page: Page) =>
    page.getByRole('link', { name: 'Support' })

export const docsMenuButton = (page: Page) =>
    page.locator('#DocsNav');

export const scyllaUniversityButton = (page: Page) =>
    page.getByRole('link', { name: 'Scylla University' });

export const allClustersTab = (page: Page) =>
    page.getByRole('tab', { name: 'All Clusters' })

export const maintenanceWindowsTab = (page: Page) =>
    page.getByRole('tab', { name: 'Maintenance Windows' })

export const serverlesssFreeTrialButton = (page: Page) => 
    page.getByRole('link', { name: 'Serverless Free Trial' });

export const dedicatedClusterButton = (page: Page) => 
    page.getByRole('link', { name: 'Dedicated Cluster' });

export const whatsNewButton = (page: Page) => 
    page.getByRole('button', { name: 'What\'s new?' });

export const productOverviewLink = (page: Page) =>
    page.getByRole('link', { name: 'Product Overview' });

export const termsOfServiceLink = (page: Page) =>
    page.getByRole('link', { name: 'Terms of Service' });

export const privacyCompliancePolicyLink = (page: Page) =>
    page.getByRole('link', { name: 'Privacy and Compliance Policy' });

// ***************************** ACTIONS *****************************

export async function openDedicatedCluster(page: Page) {
    await dedicatedClusterButton(page).waitFor();
    await dedicatedClusterButton(page).click();
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('#pageTitle')).toHaveText('New Cluster');
    await expect(page).toHaveTitle('Create New Cluster | ScyllaDB Cloud')
}

// ***************************** ASSERTIONS *****************************

export async function assertHomePage(page: Page) {
    await Promise.all([
        expect(page.locator('#pageTitle')).toHaveText('My Clusters'),
        expect(page).toHaveTitle('My Clusters | ScyllaDB Cloud'),
        expect(newClusterButton(page)).toBeVisible(),
        expect(myClustersButton(page)).toBeVisible(),
        expect(supportMenuButton(page)).toBeVisible(),
        expect(docsMenuButton(page)).toBeVisible(),
        expect(scyllaUniversityButton(page)).toBeVisible(),
        expect(allClustersTab(page)).toBeVisible(),
        expect(maintenanceWindowsTab(page)).toBeVisible(),
        expect(serverlesssFreeTrialButton(page)).toBeVisible(),
        expect(dedicatedClusterButton(page)).toBeVisible(),
        expect(whatsNewButton(page)).toBeVisible(),
        expect(productOverviewLink(page)).toBeVisible(),
        expect(termsOfServiceLink(page)).toBeVisible(),
        expect(privacyCompliancePolicyLink(page)).toBeVisible(),
    ]);
}