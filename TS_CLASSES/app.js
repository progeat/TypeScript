"use strict";
class Human {
    constructor(date) {
        this.date = date !== null && date !== void 0 ? date : new Date();
    }
    isProgrammer() {
        return false;
    }
}
class User extends Human {
    constructor(name, date, birthYear) {
        super(date);
        this._hobbies = ['Photo'];
        this._name = name;
        this.birthYear = birthYear !== null && birthYear !== void 0 ? birthYear : new Date();
    }
    /* Обычный метод */
    // getHobbies(): string[] {
    //   return this.hobbies;
    // }
    /* Реализация геттера */
    get hobbies() {
        console.log('Getting hobbies....');
        return this._hobbies;
    }
    addHobby(hobby) {
        this._hobbies.push(hobby);
    }
    /* Обычный метод */
    // setName(newName: string): this {
    //   this.name = newName;
    //   return this; // возвращаем this для цепочки вызова
    // }
    /* Реализация сеттера */
    set name(name) {
        this._name = name;
    }
    isProgrammer() {
        // нужно в ts конфиге включить поле "noImplicitOverride"
        console.log(super.isProgrammer()); // для вызова родительского метода
        return true;
    }
}
const user = new User('Andrey', new Date());
user.addHobby('a');
user.addHobby('b');
user.name = 'Evgen';
// user.setName('Anton').addHobby('Train');
// console.log(user.getHobbies(), user.name);
console.log(user.hobbies);
console.log(user._name);
console.log(user.isProgrammer());
