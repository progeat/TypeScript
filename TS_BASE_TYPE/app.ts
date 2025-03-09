// Пример числового типа
function sum(a: number, b: number): number {
  return a + b;
}

const n1: number = 40;
const n2: number = 2;

console.log(sum(n1, n2));

// Пример строкового типа
function transform(str: string): string {
  return str.toUpperCase();
}

let string = 'result';

console.log(transform(string));

// Пример строкового и булева типа
function transformWidthBoolean(str: string, uppercase: boolean): string {
  if (uppercase) {
    return str.toUpperCase();
  }
  return str.toLowerCase();
}

let string2 = 'ResUlt2';
let isUppercase = false;

console.log(transformWidthBoolean(string2, isUppercase));

// Пример строкового типа со стрелочной функцией
const arrowTransform = (str: string): string => {
  return str.toUpperCase();
};

let string3 = 'result';

console.log(arrowTransform(string3));

// Пример типизации объекта
const person: {
  name: string;
  age: number;
  surname: string;
  adress: { city: string; street?: string };
} = {
  name: 'Name',
  age: 23,
  surname: 'Family',
  adress: {
    city: 'Moscow',
  },
};

const fullname = (obj: { name: string; surname: string }): string => {
  return obj.name + ' ' + obj.surname;
};

console.log(fullname(person));

// Пример типизации массива
const names: string[] = ['andrey', 'artem', 'dima'];

names.push('eva');
// names.push(12) // error

for (let name of names) {
  console.log(name.length);
}

const result3 = names
  .filter((n) => n !== 'andrey')
  .map((n) => n.length)
  .reduce((acc, cur) => (acc += cur), 0);

console.log(result3);

// Пример типизаци кортежа tuple
const tuple: readonly [number, string] = [100, 'i am string'];

// Error
// tuple[0] = 'typescript'
// const temp = tuple[2]
// tuple.push('false')

const tuple2: [boolean, string, ...number[]] = [
  true,
  'typescript',
  1,
  2,
  3,
  4,
  5,
];

// Типизация функции Enums
enum Roles {
  admin = 'admin',
  user = 'user',
}

const person1 = {
  role: Roles.admin,
};

const person2 = {
  role: Roles.user,
};

const check = (person: { role: Roles }) => {
  if (person.role === Roles.admin) {
    console.log('user is admin');
  } else {
    console.log('user is user');
  }
};

check(person1);
check(person2);

// Типизация функции Simbol и Bigint
// не забыть указать в конфигураторе стандарт от es2020
const a: symbol = Symbol('key');
const b: symbol = Symbol('key2');

console.log(a === b);

const big1: bigint = 123n;
const big2: bigint = BigInt(200);

console.log(big1, big2);

// Специальный тип void(для пустого вывода из функции) и undefined
const log = (message: string): void => {
  console.log(message);
};

let temp: undefined; // если значение не заданно

// Типизация функций
const log2 = (data: any): void => {
  console.log(data);
};

const sum2 = (a: number, b: number, callback: (d: any) => void): number => {
  const result = a + b;
  callback(result);
  return result;
};

let fn: (n1: number, n2: number, cb: (d: any) => void) => number;

fn = sum2;
// fn = log2

fn(1, 2, log2);
