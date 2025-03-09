"use strict";
// Union Types - объединение типов
const compute = (p1, p2) => {
    if (typeof p1 === 'number' && typeof p2 === 'number') {
        return p1 + p2;
    }
    return p1.toString() + ' ' + p2.toString();
};
console.log(compute(1, 2));
console.log(compute('Hello', 'World'));
const logError = (err) => {
    if (Array.isArray(err)) {
        return err.reduce((acc, cur) => (acc += ' ' + cur));
    }
    else {
        console.log(err);
    }
};
console.log(logError('hello'));
console.log(logError(['hello', 'world']));
const person = {
    age: 20,
    name: 'Eva',
};
const convert = (data, type) => {
    if (type === 'text') {
        return JSON.stringify(data);
    }
    else if (type === 'json') {
        return Object.assign({}, data);
    }
};
console.log(convert({ a: 1 }, 'text'));
// Interface(итерфейсы)
// Пересмотреть видео по интерфейсам
