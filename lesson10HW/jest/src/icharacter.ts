export interface ICharacter {
    attack(): void;
    defend(): void;
    takeDamage(damage: number): void;
    getHealth(): number;
    isAlive(): boolean;
    introduce(): void;
}
