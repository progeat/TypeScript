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

// Пересмотреть урок Модификаторы доступа
