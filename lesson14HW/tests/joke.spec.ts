import { expect } from 'chai';
import { JokeService } from 'services/joke.service';

describe('Can get', () => {
    const jokeService = new JokeService();
    let firstJokeId: number;

    it('first random joke', async () => {
        const joke = await jokeService.getOneRandomJoke();
        expect(joke).to.have.property('id');
        expect(joke).to.have.property('type');
        expect(joke).to.have.property('setup');
        expect(joke).to.have.property('punchline');
        firstJokeId = joke.id;
    });

    it('second random joke id not equal first', async () => {
        const joke = await jokeService.getOneRandomJoke();
        expect(firstJokeId).not.equal(joke.id);
    });

    it('ten uniq random jokes', async () => {
        const jokes = await jokeService.getTenRandomJoke();
        const jokeIds = jokes.map((joke) => joke.id);
        const uniqIds = new Set(jokeIds);
        expect(jokes.length).to.be.equal(10);
        expect(uniqIds.size).to.be.equal(jokes.length);
    });

    it('random jokes by category Programming', async () => {
        const joke = await jokeService.getRandomJokeByProgramming();
        expect(joke[0].type).to.be.equal('programming');
    });
});
