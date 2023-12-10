import { test, expect } from '@playwright/test';
import * as loginPage from '../pages/login';
import * as homePage from '../pages/home';
import * as newClusterPage from '../pages/newCluster';
import userData from '../userData.json';

test.describe('New Cluster verification', () => {
    test('Name input - Cluster name should start and end with an alphanumeric character', async ({ page }) => {
        await loginPage.login(
            page,
            userData.username,
            userData.password
        );

        await homePage.assertHomePage(page);
        await homePage.openDedicatedCluster(page);
        await newClusterPage.clusterNameInputLengthCheck(page);
        await newClusterPage.clusterNameInputCharCheck(page);
    });

    test('Missing name input - Verify cluster name is a prerequsite for continuing the cluster creation', async ({ page }) => {
        await loginPage.login(
            page,
            userData.username,
            userData.password
        );

        await homePage.assertHomePage(page);
        await homePage.openDedicatedCluster(page);
        await newClusterPage.emptyClusterNameCheck(page);
        await newClusterPage.enterClusterName(page, 'Valid-Cluster@Name123');
        await newClusterPage.clickOnNextNetworkSettings(page);
    });

    test('Region change - Verify pricing changes when a different region is selected than the default one.', async ({ page }) => {
        await loginPage.login(
            page,
            userData.username,
            userData.password
        );

        await homePage.assertHomePage(page);
        await homePage.openDedicatedCluster(page);
        await newClusterPage.regionPricingCheck(page);
    });
});