import { browserContextHook } from './browser-context.hook.ts';
import { browserHook } from './browser.hook.ts';
import { pageHook } from './page.hook.ts';
import { globalContextHook } from './global-context.hook.ts';

globalContextHook();
browserHook();
browserContextHook();
pageHook();
