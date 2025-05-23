import { Page, expect, Locator } from '@playwright/test';
import { HomeLocators } from '../locator-modules/locators';
import {BasePage} from "./basePage";


export class HomePage extends BasePage{
    private readonly inventoryItems: Locator;
    private readonly firstAddToCartButton: Locator;

    constructor(page: Page) {
        super(page)
        this.inventoryItems = page.locator(HomeLocators.inventoryItems);
        this.firstAddToCartButton = page.locator(HomeLocators.firstAddToCartButton).first();
    }

    async expectInventoryCount(expectedCount: number) {
        await expect(this.inventoryItems).toHaveCount(expectedCount);
    }

    async addFirstItemToCart() {
        await this.firstAddToCartButton.click();
    }
}
