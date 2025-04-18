import { Locator, Page } from '@playwright/test';

export class AppPage {
    public get currentBalance(): Locator {
        return this.page.locator('#balance');
    }

    public get incomeMoney(): Locator {
        return this.page.locator('.money.plus');
    }

    public get expenseMoney(): Locator {
        return this.page.locator('.money.minus');
    }

    public get transactionHistory(): Locator {
        return this.page.locator('.list');
    }

    public get descriptionInput(): Locator {
        return this.page.locator('#description');
    }

    public get transactionAmount(): Locator {
        return this.page.locator('#transactionamount');
    }

    public get addTransaction(): Locator {
        return this.page.locator('.btn');
    }
    public constructor(private page: Page) {}

    public async goto(): Promise<void> {
        await this.page.goto('http://172.18.0.2:3000/');
        await this.currentBalance.waitFor();
    }

    public async addNewTransaction(description: string, amount: string): Promise<void> {
        await this.descriptionInput.fill(description);
        await this.transactionAmount.fill(amount);
        await this.addTransaction.click();
    }
}
