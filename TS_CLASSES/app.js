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
        console.log(super.isProgrammer() /* для вызова родительского метода */);
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
/* Модификаторы доступа */
class Figure {
    constructor() {
        this.size = 10;
        this.color = 'red';
        this.id = Math.random();
    }
    getId() {
        return this.id;
    }
}
Figure.BASE_TYPE = 'FIGURE';
class Box extends Figure {
    static logId() {
        console.log(Math.random());
    }
    getInfo() {
        return {
            size: this.size,
            color: this.color,
            id: this.getId(),
        };
    }
}
Box.TYPE = 'BOX';
const box = new Box();
Box.logId();
console.log(box.getInfo());
console.log(Box.TYPE);
console.log(Box.BASE_TYPE);
/* Сокращенный метод создания класса */
class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
}
const ford = new Car('Ford', 'Blue');
class Car2 {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
}
const honda = new Car2('Honda', 'White');
class Component {
    constructor() {
        this.hasChanged = false;
        // onDestroy?(abort: boolean): void {
        //   if (abort) {
        //     console.log('Component on destroy')
        //   }
        // }
    }
    onInit() {
        console.log('Component on init');
    }
    onChange(data) {
        if (data > 1) {
            return true;
        }
        return false;
    }
}
/* Абстрактные классы */
class Logger {
    table(data) {
        console.table(data);
    }
}
class MessageLogger extends Logger {
    log(message) {
        console.log(message);
    }
}
const logger = new MessageLogger();
logger.log('Hello');
logger.table({ a: 'Привет', b: 'Мир' });
