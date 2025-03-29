import { Locator, Page } from '@playwright/test';

export class HomePage {
    private get searchInput(): Locator {
        return this.page.getByPlaceholder('Я шукаю...');
    }

    private get searchButton(): Locator {
        return this.page.getByTestId('search_btn');
    }

    private get productName(): Locator {
        return this.page.getByTestId('product_name');
    }

    private get showSidebar(): Locator {
        return this.page.getByTestId('show_sidebar');
    }

    public constructor(private page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto('https://prom.ua');
        await this.searchInput.waitFor();
    }

    public async searchProduct(product: string): Promise<void> {
        await this.searchInput.fill(product);
        await this.searchButton.click();
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
        await this.showSidebar.click();
    }
}
