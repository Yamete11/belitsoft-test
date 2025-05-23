import { Page, Locator } from '@playwright/test';
import { urls } from '../testData';
import { LoginLocators } from '../locator-modules/locators';
import {BasePage} from "./basePage";

export class LoginPage extends BasePage{
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page)
        this.usernameInput = page.locator(LoginLocators.usernameInput);
        this.passwordInput = page.locator(LoginLocators.passwordInput);
        this.loginButton = page.locator(LoginLocators.loginButton);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
