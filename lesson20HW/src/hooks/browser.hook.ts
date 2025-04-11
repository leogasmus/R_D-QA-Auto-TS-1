import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { PromWorld } from '../worlds/prom.world.ts';

export function browserHook(): void {
    BeforeAll(async function () {
        PromWorld.browser = await chromium.launch({ headless: false });
    });

    AfterAll(async function () {
        await PromWorld.browser.close();
    });
}
