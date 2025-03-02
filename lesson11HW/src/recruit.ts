import { BaseCharacter } from './base-character';

export class RecruitCharacter extends BaseCharacter {
    public constructor(name: string) {
        super(name, 100);
    }
    public introduce(): string {
        return `Привіт, я ${this.getName()}, і я Рекрут. Мое здоров'я: ${this.getHealth()}.`;
    }

    public attack(): string {
        return `${this.getName()} атакує мечем!`;
    }

    public defend(): string {
        return `${this.getName()} блокує атаку!`;
    }
    public takeDamage(damage: number): string {
        this.setHealthAfterDamage(damage);
        return `${this.getName()} отримує ${damage} шкоди. Поточне здоров'я: ${this.getHealth()}`;
    }
}
