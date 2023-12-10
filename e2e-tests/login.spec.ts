import { test } from '@playwright/test';
import * as loginPage from '../pages/login';
import * as homePage from '../pages/home';
import userData from '../userData.json';

test.describe('Login', () => {
    test('Existing User login', async ({ page }) => {
        await loginPage.login(
            page, 
            userData.username, 
            userData.password
            );
        
        await homePage.assertHomePage(page);
    });
});