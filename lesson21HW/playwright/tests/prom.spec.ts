import { expect } from '@playwright/test';
import { test } from 'fixtures/pages.fixture';

test.describe('Prom ', () => {
    test.beforeEach(async ({ homePage }) => {
        await homePage.goto();
    });

    const testProduct = ['iPhone', 'AirPods', 'Samsung', 'ключ'];

    testProduct.forEach((product) =>
        test(`user can find ${product}`, async ({ homePage }) => {
            const expectedProduct = product;

            await homePage.searchProduct(expectedProduct);
            const actualProducts = await homePage.getProductNames();

            expect(actualProducts.length).toBeGreaterThan(0);
            for (const actualProduct of actualProducts) {
                expect(actualProduct.toLowerCase()).toContain(expectedProduct.toLowerCase());
            }
        })
    );

    test('should promote application', async ({ homePage }) => {
        const expectedText = 'Агов! А в додатку зручніше';

        await homePage.openSideBar();

        await expect(homePage.sidebarElement.qrCode).toBeVisible();
        await expect(homePage.sidebarElement.appPromoBanner).toContainText(expectedText);
    });
});
