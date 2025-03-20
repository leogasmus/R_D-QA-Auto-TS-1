import { JokeDto } from 'models/joke.dto';
import { makeRequest } from 'requst';

export class JokeService {
    public async getOneRandomJoke(): Promise<JokeDto> {
        const response = await makeRequest('/random_joke');
        const data = await response.json();
        return data as JokeDto;
    }

    public async getTenRandomJoke(): Promise<JokeDto[]> {
        const response = await makeRequest('/random_ten');
        const data = await response.json();
        return data as JokeDto[];
    }

    public async getRandomJokeByProgramming(): Promise<JokeDto[]> {
        const response = await makeRequest('/jokes/programming/random');
        const data = await response.json();
        return data as JokeDto[];
    }
}
