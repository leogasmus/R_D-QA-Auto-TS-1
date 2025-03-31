import { browser } from '@wdio/globals';

export default class Page {
    public open(path?: string): Promise<WebdriverIO.Request | void> {
        return path !== undefined ? browser.url(`https://prom.ua/${path}`) : browser.url('https://prom.ua/');
    }
}
