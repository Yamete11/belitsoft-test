import { Page, Locator, expect } from '@playwright/test';
import {urls} from "../testData";

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(urls.sauceUrl);
    }

}