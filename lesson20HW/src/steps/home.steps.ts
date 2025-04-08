import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PromWorld } from '../worlds/prom.world.ts';

Given('the user opens the homepage', async function (this: PromWorld) {
    await this.homePage.goto();
});

When('the user searches for {string}', async function (this: PromWorld, product: string) {
    await this.homePage.searchProduct(product);
});

Then('the page displays a list of products matching {string}', async function (this: PromWorld, product: string) {
    const actualProducts = await this.homePage.getProductNames();

    expect(actualProducts.length).toBeGreaterThan(0);
    for (const actualProduct of actualProducts) {
        expect(actualProduct.toLowerCase()).toContain(product.toLowerCase());
    }
});

When('the user opens the sidebar menu', async function (this: PromWorld) {
    await this.homePage.openSideBar();
});

Then('the sidebar displays the app promotion banner', async function (this: PromWorld) {
    const expectedText = 'Агов! А в додатку зручніше';

    await expect(this.homePage.sidebarElement.qrCode).toBeVisible();
    await expect(this.homePage.sidebarElement.appPromoBanner).toContainText(expectedText);
});
