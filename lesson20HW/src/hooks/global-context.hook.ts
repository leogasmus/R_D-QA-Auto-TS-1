import { BeforeAll } from '@cucumber/cucumber';
import { PromWorld } from '../worlds/prom.world.ts';

export function globalContextHook(): void {
    BeforeAll(async function () {
        PromWorld.globalContext = new Map();
    });
}
