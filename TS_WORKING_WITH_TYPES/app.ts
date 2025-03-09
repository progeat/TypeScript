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
// Пересмотреть видео по интерфейсам
