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
    protected setHealthAfterDamage(damage: number): void {
        this.setHealth(Math.max(this.getHealth() - damage, 0));
    }
    public abstract introduce(): string;
    public abstract attack(): string;
    public abstract defend(): string;
    public abstract takeDamage(damage: number): string;
}
