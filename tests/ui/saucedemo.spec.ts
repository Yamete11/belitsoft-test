import { test } from '@playwright/test';
import { users } from "../../testData";
import {PageManager} from "../../pages/pageManager";

test.describe('SauceDemo Inventory and Cart tests', () => {
    let pageManager: PageManager

    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);

        await pageManager.loginPage.goto();
        await pageManager.loginPage.login(users.standardUser.username, users.standardUser.password);
    });

    test('Verify inventory has exactly 6 items', async () => {
        await pageManager.homePage.expectInventoryCount(6);
    });

    test('Add first item to cart and verify cart badge', async () => {
        await pageManager.homePage.addFirstItemToCart();
        await pageManager.cartPage.expectCartBadgeCount(1);
    });
});
