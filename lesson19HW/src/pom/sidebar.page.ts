import { Locator, Page } from '@playwright/test';

export class Sidebar {
    private get sidebar(): Locator {
        return this.page.getByTestId('sidebar');
    }
    private get appPromoBanner(): Locator {
        return this.page.getByTestId('install_app_menu');
    }
    private get qrCode(): Locator {
        return this.page.getByTestId('app_qrcode');
    }

    public constructor(private page: Page) {}

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
