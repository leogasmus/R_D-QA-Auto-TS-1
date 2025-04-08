import { Locator } from '@playwright/test';

export class HeaderElement {
    public get searchInput(): Locator {
        return this.baseLocator.locator('input[placeholder="Я шукаю..."]');
    }

    private get searchButton(): Locator {
        return this.baseLocator.locator('[data-qaid="search_btn"]');
    }

    private get showSidebar(): Locator {
        return this.baseLocator.locator('[data-qaid="show_sidebar"]');
    }

    private get caption(): Locator {
        return this.baseLocator.locator('[data-qaid="caption"]');
    }

    public constructor(private baseLocator: Locator) {}

    public async clickOnSidebar(): Promise<void> {
        await this.showSidebar.click();
    }

    public async fillSearchInputAndClick(product: string): Promise<void> {
        await this.searchInput.fill(product);
        await this.searchButton.click();
    }
}
