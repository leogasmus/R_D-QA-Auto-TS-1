import { Locator, Page } from '@playwright/test';
import { HeaderElement } from '../elements/header.element';

export class HomePage {
    private headerElement: HeaderElement;

    private get productName(): Locator {
        return this.page.getByTestId('product_name');
    }
    public constructor(private page: Page) {
        this.headerElement = new HeaderElement(this.page.locator('[data-qaid="header"]'));
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://prom.ua');
    }

    public async searchProduct(product: string): Promise<void> {
        await this.headerElement.fillSearchInputAndClick(product);
        await this.waitForSearchResult();
    }

    public async waitForSearchResult(): Promise<void> {
        await this.productName.first().waitFor({ state: 'visible', timeout: 5000 });
    }

    public async getProductName(): Promise<string[]> {
        const elements = await this.productName.all();
        const names: string[] = [];
        for (const el of elements) {
            names.push((await el.textContent()) as string);
        }
        return names;
    }

    public async openSideBar(): Promise<void> {
        await this.headerElement.clickOnSidebar();
    }
}
