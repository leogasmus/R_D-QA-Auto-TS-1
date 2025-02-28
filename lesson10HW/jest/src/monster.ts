import { BaseCharacter } from './base-character';

export class MonsterCharacter extends BaseCharacter {
    public constructor(name: string) {
        super(name, 150);
    }
    public introduce(): string {
        return `Я — ${this.getName()}, страшний Монстр з ${this.getHealth()} здоров'ям! Я готовий до бою!`;
    }

    public attack(): string {
        return `${this.getName()} атакує кігтями!`;
    }

    public defend(): string {
        return `${this.getName()} захищається від атаки!`;
    }

    public takeDamage(damage: number): string {
        this.setHealthAfterDamage(damage);
        return `${this.getName()} отримує ${damage} шкоди. Поточне здоров'я: ${this.getHealth()}`;
    }
}
