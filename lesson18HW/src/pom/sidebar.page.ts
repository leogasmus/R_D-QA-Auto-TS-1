import { Locator, Page } from '@playwright/test';

export class Sidebar {
    private readonly page: Page;
    private readonly sidebar: Locator;
    private readonly appPromoBanner: Locator;
    private readonly qrCode: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.sidebar = page.getByTestId('sidebar');
        this.appPromoBanner = page.getByTestId('install_app_menu');
        this.qrCode = page.getByTestId('app_qrcode');
    }

    public async waitSideBarOpen(): Promise<void> {
        await this.sidebar.waitFor({ state: 'visible', timeout: 5000 });
    }

    public async getQrCode(): Promise<Locator> {
        return this.qrCode;
    }
    public async getAppPromoBanner(): Promise<Locator> {
        return this.appPromoBanner;
    }
}
