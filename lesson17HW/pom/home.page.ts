import { $, $$ } from '@wdio/globals';
import type { ChainablePromiseArray, ChainablePromiseElement } from 'webdriverio';
import Page from './page.js';

export class HomePage extends Page {
    public get inputSearch(): ChainablePromiseElement {
        return $('[name="search_term"]');
    }

    public get searchButton(): ChainablePromiseElement {
        return $('[data-qaid="search_btn"]');
    }

    private get productNamesElements(): ChainablePromiseArray {
        return $$('[data-qaid="product_name"]');
    }

    private get firstProductElement(): ChainablePromiseElement {
        return this.productNamesElements[0];
    }

    private get showSidebarButton(): ChainablePromiseElement {
        return $('[data-qaid="show_sidebar"]');
    }

    public async searchProduct(productName: string): Promise<void> {
        await this.inputSearch.waitForClickable({ timeout: 5000 });
        await this.inputSearch.setValue(productName);
        await this.searchButton.click();
        await this.waitForSearchResults();
    }

    public async getProductNames(): Promise<string[]> {
        const elements = await this.productNamesElements;
        const names: string[] = [];
        for (const element of elements) {
            names.push(await element.getText());
        }
        return names;
    }

    public async waitForSearchResults(): Promise<void> {
        await this.firstProductElement.waitForDisplayed({ timeout: 10000 });
    }

    public async openSidebar(): Promise<void> {
        this.showSidebarButton.click();
    }

    public open(): Promise<void | WebdriverIO.Request> {
        return super.open();
    }
}
