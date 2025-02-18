import { UserPromo } from './abstraction';
import { getRandomUser } from './api';
import { UserInfo } from './user-info';

(async () => {
    try {
        const data = await getRandomUser();
        const user1 = new UserInfo(data);
        console.log(user1.inroduce());
        const userAbs = new UserPromo(data);
        console.log(`Hello, ${userAbs.getLogin()}`);

        console.log(userAbs.discountOffer());
    } catch (error) {
        console.error(error);
    }
})();
