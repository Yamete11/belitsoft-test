import {Page, expect, Locator} from '@playwright/test';

export class CartPage {
    private readonly cartBadge: Locator;

    constructor(private page: Page) {
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async expectCartBadgeCount(expectedCount: number) {
        await expect(this.cartBadge).toHaveText(String(expectedCount));
    }
}
