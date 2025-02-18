import { RandomUser } from './user';

export async function getRandomUser(): Promise<RandomUser> {
    const response = await fetch('https://randomuser.me/api/');
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Connection error');
    }
}
