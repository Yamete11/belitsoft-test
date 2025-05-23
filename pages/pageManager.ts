import {Page} from "@playwright/test";
import {HomePage} from "./homePage";
import {LoginPage} from "./loginPage";
import {CartPage} from "./cartPage";
import {BasePage} from "./basePage";

export class PageManager{
    page: Page;
    homePage
    loginPage
    cartPage
    basePage

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.cartPage = new CartPage(page);
        this.basePage = new BasePage(page);
    }
}