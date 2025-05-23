import { Page, expect, Locator } from '@playwright/test';
import { CartLocators } from '../locator-modules/locators';
import { BasePage } from "./basePage";

export class CartPage extends BasePage{
    private readonly cartBadge: Locator;

    constructor(page: Page) {
        super(page)
        this.cartBadge = page.locator(CartLocators.cartBadge);
    }

    async expectCartBadgeCount(expectedCount: number) {
        await expect(this.cartBadge).toHaveText(String(expectedCount));
    }
}
