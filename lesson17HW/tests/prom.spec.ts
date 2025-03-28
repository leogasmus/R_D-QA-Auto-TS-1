import { browser, expect } from '@wdio/globals';
import { HomePage } from '../pom/home.page';
import { SideBar } from '../pom/sidebar.page';

describe('WDIO prom tests', () => {
    let homePage: HomePage;
    let sidebar: SideBar;

    before(async () => {
        homePage = new HomePage();
        sidebar = new SideBar();
        await browser.maximizeWindow();
    });

    beforeEach(async () => {
        await homePage.open();
    });

    const searchProductName = 'iPhone';

    it(`should find product by name: "${searchProductName}"`, async () => {
        await homePage.searchProduct(searchProductName);
        const productNames = await homePage.getProductNames();
        expect(productNames.length).toBeGreaterThan(0);
        for (const productName of productNames) {
            expect(productName.toLowerCase()).toContain(searchProductName.toLowerCase());
        }
    });

    it('should promote application', async () => {
        await homePage.openSidebar();
        await sidebar.waitForSidebarOpen();
        await expect(sidebar.qrCodeImage).toBeDisplayed();

        const expectedText = 'Агов! А в додатку зручніше';
        const actualText = await sidebar.installAppBanner.getText();
        await expect(actualText.toLowerCase()).toContain(expectedText.toLowerCase());
    });
});
