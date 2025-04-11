import { After, Before } from '@cucumber/cucumber';
import * as fs from 'fs';
import { BrowserContextOptions } from 'playwright';
import { PromWorld } from '../worlds/prom.world.ts';

export function browserContextHook(): void {
    Before(async function (this: PromWorld, { pickle }) {
        const featureName = pickle.uri.replace('.feature', '').replace(':', '-').replace('\\', '/');
        const scenarioName = pickle.name.split(':').join('').replace('/', '-').replace('\\', '-');
        const path = 'videos/' + featureName + '/' + scenarioName;

        const browserOptions: BrowserContextOptions = {
            recordVideo: { dir: path },
            timezoneId: 'Europe/London',
            viewport: { width: 1280, height: 1024 }
        };

        if (fs.existsSync('browser-context.json')) {
            browserOptions.storageState = 'browser-context.json';
        }
        this.context = await PromWorld.browser.newContext(browserOptions);
    });

    After(async function (this: PromWorld) {
        await this.context.close();
    });
}
