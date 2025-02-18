import { RandomUser } from './user';

abstract class BaseUser {
    protected login: string;
    protected age: number;
    protected registeredAge: number;

    public constructor(login: string, age: number, registeredAge: number) {
        this.login = login;
        this.age = age;
        this.registeredAge = registeredAge;
    }

    public getLogin(): string {
        return this.login;
    }

    public abstract discountOffer(): string;
}

export class UserPromo extends BaseUser {
    private promo: boolean;

    private canProposePromo(): boolean {
        return this.age > 21 && this.registeredAge > 7;
    }

    public constructor(user: RandomUser) {
        super(user.results[0].login.username, user.results[0].dob.age, user.results[0].registered.age);
        this.promo = this.canProposePromo();
    }

    public discountOffer(): string {
        if (this.promo) {
            return `${this.login}, congratulations you have discount ${this.registeredAge <= 20 ? this.registeredAge : 20}%`;
        } else {
            return `${this.login} Sorry, but you have not discount.`;
        }
    }
}
