const array: Array<string> = ['a', 'b', 'c'];
const array2: Array<number> = [1, 2, 3];

const promise = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(42);
  });
});

promise.then((value) => value.toFixed());

/* Generic функции */

function double<T>(array: T[]): T[] {
  return array.concat(array);
}

function fill<T>(array: any[], value: T): T[] {
  return array.fill(value);
}

const res1 = double(['a', 'b', 'c']); // генерируемый тип string[]
const res2 = double([1, 2, 3]); // генерируемый тип number[]

const res3 = fill(['a', 'b', 'c'], 1); // генерируемый тип number[]
const res4 = fill([1, 2, 3], false); // генерируемый тип boolean[]

function merge<T, R>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}

const res5 = merge({ a: 1 }, { b: 2, c: { d: 3 } }); // теперь TS знает содержимое и типы нашего полученного объекта
res5.c.d.toFixed;

/* Ограничение Generics */

function log<T extends string | number>(data: T): T {
  console.log(data);
  return data;
}

const res6 = <string>log('i am string');
const res7 = log(42) as number;
// const res8 = log(false) // error

/* keyof для работы только с ключами принимаемых объектов*/

const obj = { a: 1, b: 2, c: '3', key: 42 };
const obj2 = { test: 100 };

function getValue<T extends object, R extends keyof T>(obj: T, key: R) {
  // привязка к ключам принимаемого объекта
  return obj[key];
}

const res9 = getValue(obj, 'a');
const res10 = getValue(obj2, 'test');

/* Классы */

class Collection<T extends number | string> {
  constructor(private _items: T[]) {}

  add(value: T) {
    this._items.push(value);
  }

  get items(): T[] {
    return this._items;
  }
}

const col1 = new Collection<number>([1, 2, 3]);
col1.add(4);

const col2 = new Collection<string>(['a', 'b']);
col2.add('c');

class List<R> extends Collection<string> {
  constructor(public type: R) {
    super(['a']);
  }
}

const list1 = new List('qwerty');
const list2 = new List(100);
