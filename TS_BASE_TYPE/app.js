"use strict";
// Пример числового типа
function sum(a, b) {
    return a + b;
}
const n1 = 40;
const n2 = 2;
console.log(sum(n1, n2));
// Пример строкового типа
function transform(str) {
    return str.toUpperCase();
}
let string = 'result';
console.log(transform(string));
// Пример строкового и булева типа
function transformWidthBoolean(str, uppercase) {
    if (uppercase) {
        return str.toUpperCase();
    }
    return str.toLowerCase();
}
let string2 = 'ResUlt2';
let isUppercase = false;
console.log(transformWidthBoolean(string2, isUppercase));
// Пример строкового типа со стрелочной функцией
const arrowTransform = (str) => {
    return str.toUpperCase();
};
let string3 = 'result';
console.log(arrowTransform(string3));
// Пример типизации объекта
const person = {
    name: 'Name',
    age: 23,
    surname: 'Family',
    adress: {
        city: 'Moscow',
    },
};
const fullname = (obj) => {
    return obj.name + ' ' + obj.surname;
};
console.log(fullname(person));
// Пример типизации массива
const names = ['andrey', 'artem', 'dima'];
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
const tuple = [100, 'i am string'];
// Error
// tuple[0] = 'typescript'
// const temp = tuple[2]
// tuple.push('false')
const tuple2 = [
    true,
    'typescript',
    1,
    2,
    3,
    4,
    5,
];
// Типизация функции Enums
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
})(Roles || (Roles = {}));
const person1 = {
    role: Roles.admin,
};
const person2 = {
    role: Roles.user,
};
const check = (person) => {
    if (person.role === Roles.admin) {
        console.log('user is admin');
    }
    else {
        console.log('user is user');
    }
};
check(person1);
check(person2);
// Типизация функции Simbol и Bigint
// не забыть указать в конфигураторе стандарт от es2020
const a = Symbol('key');
const b = Symbol('key2');
console.log(a === b);
const big1 = 123n;
const big2 = BigInt(200);
console.log(big1, big2);
// Специальный тип void(для пустого вывода из функции) и undefined
const log = (message) => {
    console.log(message);
};
let temp; // если значение не заданно
// Типизация функций
const log2 = (data) => {
    console.log(data);
};
const sum2 = (a, b, callback) => {
    const result = a + b;
    callback(result);
    return result;
};
let fn;
fn = sum2;
// fn = log2
fn(1, 2, log2);
