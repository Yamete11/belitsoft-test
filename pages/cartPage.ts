import { Page, expect, Locator } from '@playwright/test';
import { CartSelectors } from '../locators/locators';
import { BasePage } from "./basePage";

export class CartPage extends BasePage{
    private readonly cartBadge: Locator;

    constructor(private page: Page) {
        super(page)
        this.cartBadge = page.locator(CartSelectors.cartBadge);
    }

    async expectCartBadgeCount(expectedCount: number) {
        await expect(this.cartBadge).toHaveText(String(expectedCount));
    }
}
