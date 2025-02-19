import { ICharacter } from './icharacter';

export abstract class BaseCharacter implements ICharacter {
    private health: number;
    private name: string;

    public constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }
    public getName(): string {
        return this.name;
    }
    public getHealth(): number {
        return this.health;
    }
    public setHealth(health: number): void {
        this.health = health;
    }

    public isAlive(): boolean {
        return this.getHealth() > 0;
    }
    public abstract introduce(): void;
    public abstract attack(): void;
    public abstract defend(): void;
    public abstract takeDamage(damage: number): void;
}
