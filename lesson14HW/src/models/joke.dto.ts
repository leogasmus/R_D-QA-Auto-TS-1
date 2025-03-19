export class JokeDto {
    public id: number;
    public type: string;
    public setup: string;
    public punchline: string;

    public constructor(id: number, type: string, setup: string, punchline: string) {
        this.id = id;
        this.type = type;
        this.setup = setup;
        this.punchline = punchline;
    }
}
