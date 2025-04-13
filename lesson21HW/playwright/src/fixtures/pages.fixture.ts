import { test as base } from './base.fixture';
import { HomePage } from '../pom/home.page';

export const test = base.extend<{ homePage: HomePage }>({
    homePage: ({ page }, use) => {
        const homePage = new HomePage(page);
        use(homePage);
    }
});
