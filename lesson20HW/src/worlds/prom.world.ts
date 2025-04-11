import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { HomePage } from '../pom/home.page.ts';

export class PromWorld extends World {
    public static globalContext: Map<string, unknown> = new Map<string, unknown>();

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    public get browser(): Browser {
        return PromWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return PromWorld.globalContext;
    }

    // pages getters
    public get homePage(): HomePage {
        if (!this._homePage) {
            this._homePage = new HomePage(this.page);
        }
        return this._homePage;
    }

    // pages
    private _homePage: HomePage;

    public constructor(options: IWorldOptions) {
        super(options);
    }
}
