import { Page, expect, Locator } from '@playwright/test';
import { HomeSelectors } from '../locators/locators';


export class HomePage {
    private readonly inventoryItems: Locator;
    private readonly firstAddToCartButton: Locator;

    constructor(private page: Page) {
        this.inventoryItems = page.locator(HomeSelectors.inventoryItems);
        this.firstAddToCartButton = page.locator(HomeSelectors.firstAddToCartButton).first();
    }

    async expectInventoryCount(expectedCount: number) {
        await expect(this.inventoryItems).toHaveCount(expectedCount);
    }

    async addFirstItemToCart() {
        await this.firstAddToCartButton.click();
    }
}
