import { test, expect } from '@playwright/test';
import { AppPage } from '../page/app.page';

test.describe('User can', () => {
    let appPage: AppPage;

    test.beforeEach(async ({ page }) => {
        appPage = new AppPage(page);

        await appPage.goto();
    });

    test('add new income transaction', async () => {
        await appPage.addNewTransaction('For test income transaction', '20');
        await expect(appPage.currentBalance).toHaveText('$20.00');
    });

    test('add new expense transaction ', async () => {
        await appPage.addNewTransaction('For test expense transaction', '-15');
        await expect(appPage.currentBalance).toHaveText('$-15.00');
    });

    test('get current balance after few transaction', async () => {
        await appPage.addNewTransaction('For test expense transaction', '-55');
        await appPage.addNewTransaction('For test income transaction', '70');
        await expect(appPage.currentBalance).toHaveText('$15.00');
    });
});
