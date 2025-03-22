import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

describe('Puppeteer prom tests', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        await page.goto('https://prom.ua/');
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('should find iPhone', async () => {
        const inputSearch = '[name="search_term"]';
        await page.waitForSelector(inputSearch);
        await page.type(inputSearch, 'iPhone');
        await page.click('[data-qaid="search_btn"]');
        const productName = '[data-qaid="product_name"]';
        await page.waitForSelector(productName);
        const items = await page.$$(productName);
        for (const item of items) {
            const text = await item.evaluate((el) => el.textContent);
            expect(text?.toLowerCase()).contains('iphone');
        }
    });

    it('should promote application', async () => {
        await page.click('[data-qaid="show_sidebar"]');

        const qrCode = await page.waitForSelector('[data-qaid="app_qrcode"]', { visible: true });
        expect(qrCode).to.exist;

        const elements = await page.$$('[data-qaid="install_app_menu"]');
        let hasMatchingElement = false;

        for (const element of elements) {
            const text = await page.evaluate((el) => el.textContent, element);
            if (text?.includes('Агов! А в додатку зручніше')) {
                hasMatchingElement = true;
                break;
            }
        }

        expect(hasMatchingElement).to.be.true;
    });
});
