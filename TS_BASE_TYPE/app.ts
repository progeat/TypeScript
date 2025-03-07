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
const person1 = {
  role: 'admin',
};

const person2 = {
  role: 'user',
};

const check = (person: { role: string }) => {
  if (person.role === 'admin') {
    console.log('user is admin');
  } else {
    console.log('user is user');
  }
};

check(person1);
check(person2);
// досмотреть урок про Enums
