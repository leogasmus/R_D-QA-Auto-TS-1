import { RandomUser } from './user';

export class UserInfo {
    private fullname: string;
    private city: string;
    private country: string;
    private email: string;

    public constructor(user: RandomUser) {
        this.fullname = `${user.results[0].name.first} ${user.results[0].name.last}`;
        this.city = user.results[0].location.city;
        this.country = user.results[0].location.country;
        this.email = user.results[0].email;
    }

    public inroduce(): string {
        return `Hi, my name is ${this.fullname}. I'm from ${this.city}, ${this.country}. My email is: ${this.email}`;
    }
}
