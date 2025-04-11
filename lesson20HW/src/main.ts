import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { PromWorld } from './worlds/prom.world.ts';

setDefaultTimeout(999999999);
setWorldConstructor(PromWorld);
