import {Page, expect, Locator} from '@playwright/test';

export class HomePage {
    private readonly inventoryItems: Locator;
    private readonly firstAddToCartButton: Locator;
    private readonly cartBadge: Locator;

    constructor(private page: Page) {
        this.inventoryItems = page.locator('.inventory_item');
        this.firstAddToCartButton = page.locator('.inventory_item button').first();
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    async expectInventoryCount(expectedCount: number){
        await expect(this.inventoryItems).toHaveCount(expectedCount);
    }

    async addFirstItemToCart() {
        await this.firstAddToCartButton.click();
    }
}
