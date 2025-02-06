const character = {
    baseInfo: {
        race: 'Human',
        name: 'Bomber',
        health: 100
    },
    skills: {
        attack: {
            power: 25
        },
        defense: {
            power: 10
        }
    },
    get attack() {
        return this.skills.attack.power;
    },
    get defense() {
        return this.skills.defense.power;
    },
    set healing(healthPoint) {
        if (healthPoint < 0) {
            throw new Error('Healing amount cannot be negative');
        }
        this.baseInfo.health += healthPoint;
    },
    set damage(damage) {
        const netDamage = Math.max(damage - this.defense, 0);
        this.baseInfo.health -= netDamage;
    },
    getInfo() {
        return `${this.baseInfo.name} (${this.baseInfo.race}) | Рівень здоров’я: ${this.baseInfo.health} | Сила атаки: ${this.attack} | Сила захисту: ${this.defense}`;
    }
};

// Повна інформація про персонажа
console.log(character.getInfo());

// Лікування персонаєу
console.log('Поточний рівень здоров’я:', character.baseInfo.health);
character.healing = 20;
console.log('Рівень здоров’я після лікування:', character.baseInfo.health);

// Перевірка обробки помилки при від’ємному значенні лікування
try {
    character.healing = -10;
} catch (error) {
    console.error('Неможна вилікувати:', error.message);
}

// Атака на персонажа
character.damage = 30;
console.log('Рівень здоров’я після атаки:', character.baseInfo.health);

// Ще одна атака
character.damage = 60;
console.log('Рівень здоров’я після атаки:', character.baseInfo.health);
