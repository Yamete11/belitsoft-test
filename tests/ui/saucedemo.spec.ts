import { test } from '@playwright/test';
import { users } from "../../testData";
import { PageManager } from "../../pages/pageManager";

test.describe('SauceDemo Inventory and Cart tests', () => {
    let pageManager: PageManager;

    const expectedInventoryCount = 6;
    const expectedCartBadgeCount = 1;

    test.beforeEach(async ({ page }) => {
        pageManager = new PageManager(page);

        await pageManager.basePage.goto();
        await pageManager.loginPage.login(users.standardUser.username, users.standardUser.password);
    });

    test(`Verify inventory has exactly ${expectedInventoryCount} items`, async () => {
        await pageManager.homePage.expectInventoryCount(expectedInventoryCount);
    });

    test(`Add first item to cart and verify cart badge shows ${expectedCartBadgeCount}`, async () => {
        await pageManager.homePage.addFirstItemToCart();
        await pageManager.cartPage.expectCartBadgeCount(expectedCartBadgeCount);
    });
});
