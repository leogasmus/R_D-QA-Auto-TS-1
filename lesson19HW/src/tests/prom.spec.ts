import { test, expect } from '@playwright/test';
import { HomePage } from '../pom/home.page';

test.describe('Prom ', () => {
    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);

        await homePage.goto();
    });

    test('can search', async () => {
        const expectedProduct = 'iPhone';

        await homePage.searchProduct(expectedProduct);
        const actualProducts = await homePage.getProductNames();

        expect(actualProducts.length).toBeGreaterThan(0);
        for (const actualProduct of actualProducts) {
            expect(actualProduct.toLowerCase()).toContain(expectedProduct.toLowerCase());
        }
    });

    test('should promote application', async () => {
        // const sidebar = new Sidebar(page);
        const expectedText = 'Агов! А в додатку зручніше';

        await homePage.goto();
        await homePage.openSideBar();
        await expect((await homePage.sidebarElement.qrCode).isVisible).toBeTruthy();
        await expect(homePage.sidebarElement.appPromoBanner).toContainText(expectedText);
    });
});
