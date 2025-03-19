import { expect } from 'chai';
import { JokeService } from 'services/joke.service';

describe('Can get', () => {
    const jokeService = new JokeService();
    let firstJokeId: number;

    it('first random joke', async () => {
        try {
            const joke = await jokeService.getOneRandomJoke();
            expect(joke).to.have.property('id');
            expect(joke).to.have.property('type');
            expect(joke).to.have.property('setup');
            expect(joke).to.have.property('punchline');
            firstJokeId = joke.id;
        } catch (error) {
            console.error(error);
            expect.fail('Помилка отримання жарту');
        }
    });

    it('second random joke id not equal first', async () => {
        try {
            const joke = await jokeService.getOneRandomJoke();
            expect(firstJokeId).not.equal(joke.id);
        } catch (error) {
            console.error(error);
            expect.fail('Помилка отримання жарту');
        }
    });

    it('ten uniq random jokes', async () => {
        try {
            const jokes = await jokeService.getTenRandomJoke();
            const jokeIds = jokes.map((joke) => joke.id);
            const uniqIds = new Set(jokeIds);
            expect(jokes.length).to.be.equal(10);
            expect(uniqIds.size).to.be.equal(jokes.length);
        } catch (error) {
            console.error(error);
            expect.fail('Помилка отримання жарту');
        }
    });

    it('random jokes by category Programming', async () => {
        try {
            const joke = await jokeService.getRandomJokeByProgramming();
            expect(joke.type).to.be.equal('programming');
        } catch (error) {
            console.error(error);
            expect.fail('Помилка отримання жарту');
        }
    });
});
