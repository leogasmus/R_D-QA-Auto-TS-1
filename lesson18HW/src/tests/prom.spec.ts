import { test, expect } from '@playwright/test';
import { HomePage } from '../pom/home.page';
import { Sidebar } from '../pom/sidebar.page';

test.describe('Prom ', () => {
    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.goto();
        await expect(page).toHaveURL('https://prom.ua');
    });

    test('can search', async () => {
        const expectedProduct = 'iPhone';
        await homePage.searchProduct(expectedProduct);
        const actualProducts = await homePage.getProductName();
        expect(actualProducts.length).toBeGreaterThan(0);
        for (const actualProduct of actualProducts) {
            expect(actualProduct.toLowerCase()).toContain(expectedProduct.toLowerCase());
        }
    });

    test('should promote application', async ({ page }) => {
        const sidebar = new Sidebar(page);
        const expectedText = 'Агов! А в додатку зручніше';

        await homePage.goto();
        await expect(page).toHaveURL('https://prom.ua');
        await homePage.openSideBar();
        await sidebar.waitSideBarOpen();
        await expect((await sidebar.getQrCode()).isVisible).toBeTruthy();
        const actualText = (await sidebar.getAppPromoBanner()).textContent();
        await expect(await actualText).toContain(expectedText);
    });
});
