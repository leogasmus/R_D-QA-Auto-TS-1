import { BaseCharacter } from './base-character';

export class MonsterCharacter extends BaseCharacter {
    public constructor(name: string) {
        super(name, 150);
    }
    public introduce(): void {
        console.log(`Я — ${this.getName()}, страшний Монстр з ${this.getHealth()} здоров'ям! Я готовий до бою!`);
    }

    public attack(): void {
        console.log(`${this.getName()} атакує кігтями!`);
    }

    public defend(): void {
        console.log(`${this.getName()} захищається від атаки!`);
    }

    public takeDamage(damage: number): void {
        this.setHealth(Math.max(this.getHealth() - damage, 0));
        console.log(`${this.getName()} отримує ${damage} шкоди. Поточне здоров'я: ${this.getHealth()}`);
    }
}
