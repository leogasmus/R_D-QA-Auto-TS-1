import { BaseCharacter } from './base-character';

export class DragonCharacter extends BaseCharacter {
    public constructor(name: string) {
        super(name, 500);
    }

    public introduce(): string {
        return `Я — ${this.getName()}, великий Дракон з ${this.getHealth()} здоров'ям. Я можу знищити все, що стоїть на моєму шляху!`;
    }

    public attack(): string {
        return `${this.getName()} дихає вогнем!`;
    }

    public defend(): string {
        return `${this.getName()} використовує броню з луски для захисту!`;
    }

    public takeDamage(damage: number): string {
        this.setHealthAfterDamage(damage);
        return `${this.getName()} отримує ${damage} шкоди. Поточне здоров'я: ${this.getHealth()}`;
    }
}
