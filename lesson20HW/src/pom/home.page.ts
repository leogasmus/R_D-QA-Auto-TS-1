import { Locator, Page } from '@playwright/test';
import { HeaderElement } from '../elements/header.element.ts';
import { SidebarElement } from '../elements/sidebar.element.ts';

export class HomePage {
    private headerElement: HeaderElement;
    public sidebarElement: SidebarElement;

    private get productName(): Locator {
        return this.page.getByTestId('product_name');
    }

    public constructor(private page: Page) {
        this.headerElement = new HeaderElement(this.page.locator('[data-qaid="header"]'));
        this.sidebarElement = new SidebarElement(this.page.locator('[data-qaid="sidebar"]'));
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://prom.ua');
        await this.headerElement.searchInput.waitFor();
    }

    public async searchProduct(product: string): Promise<void> {
        await this.headerElement.fillSearchInputAndClick(product);
        await this.waitForSearchResult();
    }

    public async waitForSearchResult(): Promise<void> {
        await this.productName.first().waitFor({ state: 'visible', timeout: 5000 });
    }

    public async getProductNames(): Promise<string[]> {
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
