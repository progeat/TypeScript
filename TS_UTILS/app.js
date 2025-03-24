"use strict";
const key = 'name';
const str1 = 'hello';
const user = { name: 'andrey', age: 36 };
const key2 = 'name';
function createAndValidate(name, age) {
    const newUser = {};
    if (name.length !== 0) {
        newUser.name = name;
    }
    if (age > 18) {
        newUser.age = age;
    }
    return newUser;
}
// Readonly
const user2 = { name: 'Elena', age: 24 };
// user2.age = 33 // ошибка
console.log(user2);
const user3 = {
    id: 1,
    age: 2,
    name: 'Igor',
};
/* ReturnType Parameters ConstructorParameters */
function log(data, num) {
    console.log(data, num);
    return false;
}
class User5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
