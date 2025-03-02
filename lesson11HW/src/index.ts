import { BaseCharacter } from './base-character';
import { DragonCharacter } from './dragon';
import { MonsterCharacter } from './monster';
import { RecruitCharacter } from './recruit';

const recruit = new RecruitCharacter('Артур');
const monster = new MonsterCharacter('Ветрарх');
const dragon = new DragonCharacter('Аркон');

function demoAllSkills(character: BaseCharacter): void {
    character.introduce();
    character.attack();
    character.defend();
    character.takeDamage(Math.floor(Math.random() * 500) + 1);
    console.log(character.isAlive() ? 'Я доci живий' : 'Вiчна йому пам\'ять');
}

demoAllSkills(recruit);
demoAllSkills(monster);
demoAllSkills(dragon);
