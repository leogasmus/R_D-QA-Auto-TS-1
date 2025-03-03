import { expect } from 'chai';
import { RecruitCharacter } from '../src/recruit';
import sinon from 'ts-sinon';
import { SinonStubbedInstance } from 'sinon';

describe('Recruit', () => {
    let stub: SinonStubbedInstance<RecruitCharacter>;

    before(() => {
        stub = sinon.createStubInstance(RecruitCharacter);
        stub.getName.returns('MockedName');
        stub.getHealth.returns(50);
        stub.introduce.returns('Привіт, я MockedName, і я Рекрут. Мое здоров\'я: 50.');
        stub.attack.returns('MockedName атакує мечем!');
        stub.defend.returns('MockedName блокує атаку!');
        stub.takeDamage.returns('MockedName отримує 10 шкоди. Поточне здоров\'я: 40');
    });

    it('stub should introduce', () => {
        expect(stub.introduce()).to.be.equal('Привіт, я MockedName, і я Рекрут. Мое здоров\'я: 50.');
    });

    it('stub should attack', () => {
        expect(stub.attack()).to.be.equal('MockedName атакує мечем!');
    });

    it('stub should defend', () => {
        expect(stub.defend()).to.be.equal('MockedName блокує атаку!');
    });

    it('stub should take damage', () => {
        expect(stub.takeDamage(10)).to.be.equal('MockedName отримує 10 шкоди. Поточне здоров\'я: 40');
    });

    it('stub return health', () => {
        expect(stub.getHealth()).to.be.equal(50);
    });
});
