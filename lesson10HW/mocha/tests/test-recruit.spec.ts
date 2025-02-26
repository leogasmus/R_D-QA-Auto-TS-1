import { expect } from 'chai';
import { BaseCharacter } from 'src/base-character';
import { RecruitCharacter } from 'src/recruit';

describe('Recruit', () => {
    const name = 'Mike';
    let recruit: RecruitCharacter;

    beforeEach(() => {
        recruit = new RecruitCharacter(name);
    });

    it('should be child of Base Class', () => {
        expect(recruit instanceof BaseCharacter).to.be.true;
    });

    it('should introduce', () => {
        expect(recruit.introduce()).to.be.equal(`Привіт, я ${name}, і я Рекрут. Мое здоров'я: ${recruit.getHealth()}.`);
    });

    it('should attack', () => {
        expect(recruit.attack()).to.be.equal(`${name} атакує мечем!`);
    });

    it('should defend', () => {
        expect(recruit.defend()).to.be.equal(`${name} блокує атаку!`);
    });

    it('should takeDamage', () => {
        const damage = 17;
        const newHealth: number = recruit.getHealth() - damage;
        expect(recruit.takeDamage(damage)).to.be.equal(`${name} отримує ${damage} шкоди. Поточне здоров'я: ${newHealth}`);
    });

    it('health cannot be below 0', () => {
        const damage = 101;
        recruit.takeDamage(damage);
        expect(recruit.getHealth()).not.be.lessThan(0);
    });
});
