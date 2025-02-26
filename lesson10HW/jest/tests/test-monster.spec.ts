import { expect } from '@jest/globals';
import { BaseCharacter } from '../src/base-character';
import { MonsterCharacter } from '../src/monster';

describe('Monster', () => {
    const name = 'Undead Mike';
    let monster: MonsterCharacter;

    beforeEach(() => {
        monster = new MonsterCharacter(name);
    });

    it('should be child of Base Class', () => {
        expect(monster instanceof BaseCharacter).toBeTruthy();
    });

    it('should introduce', () => {
        expect(monster.introduce()).toEqual(`Я — ${name}, страшний Монстр з ${monster.getHealth()} здоров'ям! Я готовий до бою!`);
    });

    it('should attack', () => {
        expect(monster.attack()).toEqual(`${name} атакує кігтями!`);
    });

    it('should defend', () => {
        expect(monster.defend()).toEqual(`${name} захищається від атаки!`);
    });

    it('should takeDamage', () => {
        const damage = 17;
        const newHealth: number = monster.getHealth() - damage;
        expect(monster.takeDamage(damage)).toEqual(`${name} отримує ${damage} шкоди. Поточне здоров'я: ${newHealth}`);
    });

    it('health cannot be below 0', () => {
        const damage: number = monster.getHealth() + 40;
        monster.takeDamage(damage);
        expect(monster.getHealth()).not.toBeLessThan(0);
    });
});
