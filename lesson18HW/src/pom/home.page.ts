import { Locator, Page } from '@playwright/test';

export class HomePage {
    private readonly page: Page;
    private readonly searchInput: Locator;
    private readonly searchButton: Locator;
    private readonly productName: Locator;
    private readonly showSidebar: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByPlaceholder('Я шукаю...');
        this.searchButton = page.getByTestId('search_btn');
        this.productName = page.getByTestId('product_name');
        this.showSidebar = page.getByTestId('show_sidebar');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://prom.ua');
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
