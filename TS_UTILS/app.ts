/* Typeof и keyof */
interface User {
  name: string;
  age: number;
}

type UserKey = keyof User;

const key: UserKey = 'name';

const str1: string = 'hello';

type MyString = typeof str1;

const user: User = { name: 'andrey', age: 36 };

type UserKey2 = keyof typeof user;

const key2: UserKey2 = 'name';

/* Partial Required Readonly */

// Partial
interface User2 {
  id?: number;
  age: number;
  name: string;
}

function createAndValidate(name: string, age: number): User2 {
  const newUser: Partial<User2> = {};

  if (name.length !== 0) {
    newUser.name = name;
  }

  if (age > 18) {
    newUser.age = age;
  }

  return newUser as User2;
}

// Readonly
const user2: Readonly<User2> = { name: 'Elena', age: 24 };

// user2.age = 33 // ошибка

console.log(user2);

// Required
type RequiredUser = Required<User2>;

const user3: RequiredUser = {
  id: 1,
  age: 2,
  name: 'Igor',
};

/* Pick Omit */

interface User3 {
  name: string;
  age: number;
  hobbies: string[];
}

type UserData = Omit<User3, 'hobbies'>; // исключаем свойства переданные во втрором параметре
type UserData2 = Pick<User3, 'name' | 'age'>; // включаем свойства переданные во втрором параметре

/* Extract Exclude */
interface User4 {
  name: string;
  age: number;
  hobbies: string[];
}

type UserStringFields = Extract<'age' | 'name' | 'some' | User4, string>; // попадут только строковой тип значений

type UserKeysFields = Extract<'age' | 'hobbies' | 'some', keyof User4>; // попадут только совпадающие ключи объекта

type UserExcludeFields = Exclude<'age' | 'hobbies' | 'some' | User4, string>; // исключает все строковые значения

type UserExcludeUser = Exclude<'age' | 'hobbies' | 'some' | User4, User4>; // исключает тип User4

/* ReturnType Parameters ConstructorParameters */

function log(data: string[], num: number): boolean {
  console.log(data, num);
  return false;
}

type LogRetun = ReturnType<typeof log>;
type LogParams = Parameters<typeof log>[0];

class User5 {
  constructor(public name: string, public age?: number) {}
}

type UserParams = Required<ConstructorParameters<typeof User5>>[1];
