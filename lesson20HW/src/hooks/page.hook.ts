import { After, Before } from '@cucumber/cucumber';
import { PromWorld } from '../worlds/prom.world.ts';

export function pageHook(): void {
    Before(async function (this: PromWorld) {
        this.page = await this.context.newPage();
    });

    After(async function (this: PromWorld) {
        await this.page.close();
    });
}
