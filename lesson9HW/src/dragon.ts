import { BaseCharacter } from './base-character';

export class DragonCharacter extends BaseCharacter {
    public constructor(name: string) {
        super(name, 500);
    }

    public introduce(): void {
        console.log(`Я — ${this.getName()}, великий Дракон з ${this.getHealth()} здоров'ям. Я можу знищити все, що стоїть на моєму шляху!`);
    }

    public attack(): void {
        console.log(`${this.getName()} дихає вогнем!`);
    }

    public defend(): void {
        console.log(`${this.getName()} використовує броню з луски для захисту!`);
    }

    public takeDamage(damage: number): void {
        this.setHealth(Math.max(this.getHealth() - damage, 0));
        console.log(`${this.getName()} отримує ${damage} шкоди. Поточне здоров'я: ${this.getHealth()}`);
    }
}
