class Human {
  date: Date;

  constructor(date: Date) {
    this.date = date ?? new Date();
  }

  isProgrammer(): boolean {
    return false;
  }
}

class User extends Human {
  _name: string;
  birthYear: Date;
  _hobbies: string[] = ['Photo'];

  constructor(name: string, date: Date, birthYear?: Date) {
    super(date);
    this._name = name;
    this.birthYear = birthYear ?? new Date();
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

  addHobby(hobby: string): void {
    this._hobbies.push(hobby);
  }

  /* Обычный метод */
  // setName(newName: string): this {
  //   this.name = newName;
  //   return this; // возвращаем this для цепочки вызова
  // }

  /* Реализация сеттера */
  set name(name: string) {
    this._name = name;
  }

  override isProgrammer(): boolean {
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
  static readonly BASE_TYPE = 'FIGURE';

  public size: number = 10;
  public color: string = 'red';
  public id: number;

  constructor() {
    this.id = Math.random();
  }

  protected getId(): number {
    return this.id;
  }
}

class Box extends Figure {
  static readonly TYPE = 'BOX';

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

const box = new Box();

Box.logId();

console.log(box.getInfo());
console.log(Box.TYPE);
console.log(Box.BASE_TYPE);

/* Сокращенный метод создания класса */

class Car {
  model: string;
  color: string;

  constructor(model: string, color: string) {
    this.model = model;
    this.color = color;
  }
}

const ford = new Car('Ford', 'Blue');

class Car2 {
  constructor(public model: string, private color: string) {}
}

const honda = new Car2('Honda', 'White');

/* Реализация интерфесов классами */

interface Lifecycle {
  onInit(): void;

  onDestroy?(abort: boolean): void;
}

interface ComponentOnChange {
  hasChanged: boolean;

  onChange(data: number): boolean;
}

class Component implements Lifecycle, ComponentOnChange {
  hasChanged: boolean = false;

  onInit(): void {
    console.log('Component on init');
  }

  onChange(data: number): boolean {
    if (data > 1) {
      return true;
    }
    return false;
  }

  // onDestroy?(abort: boolean): void {
  //   if (abort) {
  //     console.log('Component on destroy')
  //   }
  // }
}

/* Абстрактные классы */

abstract class Logger {
  abstract log(message: string): void;

  table(data: object) {
    console.table(data);
  }
}

class MessageLogger extends Logger {
  log(message: string): void {
    console.log(message);
  }
}
const logger = new MessageLogger();

logger.log('Hello');
logger.table({ a: 'Привет', b: 'Мир' });
