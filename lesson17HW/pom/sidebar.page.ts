import { $ } from '@wdio/globals';
import Page from './page.js';
import type { ChainablePromiseElement } from 'webdriverio';

export class SideBar extends Page {
    public get sideBar(): ChainablePromiseElement {
        return $('[data-qaid="sidebar"]');
    }

    public get installAppBanner(): ChainablePromiseElement {
        return $('[data-qaid="install_app_menu"]');
    }

    public get qrCodeImage(): ChainablePromiseElement {
        return $('[data-qaid="app_qrcode"]');
    }

    public async waitForSidebarOpen(): Promise<void> {
        await this.sideBar.waitForDisplayed({ timeout: 5000 });
    }
}
