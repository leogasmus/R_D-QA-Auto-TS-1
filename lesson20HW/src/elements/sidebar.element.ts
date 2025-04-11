import { Locator } from '@playwright/test';

export class SidebarElement {
    public get appPromoBanner(): Locator {
        return this.baseLocator.locator('[data-qaid="install_app_menu"]');
    }

    public get qrCode(): Locator {
        return this.baseLocator.locator('[data-qaid="app_qrcode"]');
    }

    public constructor(private baseLocator: Locator) {}
}
