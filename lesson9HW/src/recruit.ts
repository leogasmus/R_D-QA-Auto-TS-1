import { BaseCharacter } from './base-character';

export class RecruitCharacter extends BaseCharacter {
    public constructor(name: string) {
        super(name, 100);
    }
    public introduce(): void {
        console.log(`Привіт, я ${this.getName()}, і я Рекрут. Мое здоров'я: ${this.getHealth()}.`);
    }
    public attack(): void {
        console.log(`${this.getName()} атакує мечем!`);
    }

    public defend(): void {
        console.log(`${this.getName()} блокує атаку!`);
    }
    public takeDamage(damage: number): void {
        this.setHealth(Math.max(this.getHealth() - damage, 0));
        console.log(`${this.getName()} отримує ${damage} шкоди. Поточне здоров'я: ${this.getHealth()}`);
    }
}
