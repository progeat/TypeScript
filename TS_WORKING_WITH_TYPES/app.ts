// Union Types - объединение типов
const compute = (p1: number | string, p2: number | string) => {
  if (typeof p1 === 'number' && typeof p2 === 'number') {
    return p1 + p2;
  }

  return p1.toString() + ' ' + p2.toString();
};

console.log(compute(1, 2));
console.log(compute('Hello', 'World'));

const logError = (err: string | string[]): string | void => {
  if (Array.isArray(err)) {
    return err.reduce((acc, cur) => (acc += ' ' + cur));
  } else {
    console.log(err);
  }
};

console.log(logError('hello'));
console.log(logError(['hello', 'world']));

// Literal Types и отдельный тип
type OutputeType = 'text' | 'json';

type Person = {
  age: number;
  name: string;
};

const person: Person = {
  age: 20,
  name: 'Eva',
};

const convert = (data: object, type: OutputeType) => {
  if (type === 'text') {
    return JSON.stringify(data);
  } else if (type === 'json') {
    return { ...data };
  }
};

console.log(convert({ a: 1 }, 'text'));

// Interface(итерфейсы)

// type User = {            // использовать type рекомендуется для
//   name: string           // однострочного описания типа
//   age: number            // для объекта нужно использовать
//   hobbies: string[]      // интерфес
// }

// type CallbackFn = (data: string[]) => void // пример правильного испол. type

interface User {
  name: string;
  age: number;
  hobbies: string[];
}

interface Adress {
  city: string;
  street: string;
}

interface FullUser extends User, Adress {
  date: Date;
}

const person2: FullUser = {
  name: 'Andrey',
  age: 35,
  city: 'Moscow',
  street: 'Perovskaya',
  hobbies: ['1', '2', '3'],
  date: new Date(),
};

interface UserMap {
  [key: number]: FullUser;
  date?: Date;
}

const UserMap = {
  1: person2,
  2: person2,
  3: person2,
} as UserMap;

UserMap[2].date;

// unknown отложенная типизация
let a: unknown = 42;

let b = a === 10; // == === || && ? !

//let c = a + 10 // error так как операции с неизвестным типом
// но с any сработает

if (typeof a === 'number') {
  let c = a + 10;
}

// never для функций которые никогда не завершатся
function throwError(message: string): never {
  throw new Error(message);
}

function loop(): never {
  while (true) {}
}

function rec(): never {
  return rec();
}

// Type Guard cоздание функций на проверку типа
// не только примитивных значений, но и собственных
// созданных типов TS
function isBoolean(val: string | boolean): val is boolean {
  return typeof val === 'boolean';
}

function isString(val: string | boolean): val is string {
  return typeof val === 'string';
}

function logFlag(flag: string | boolean) {
  if (isBoolean(flag)) {
    console.log('Hey this is boolean');
  } else if (isString(flag)) {
    console.log('Hey this is string');
  }
}

logFlag(true);
logFlag('test');
