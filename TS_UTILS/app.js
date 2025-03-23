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
user.age = 33;
console.log(user2);
// Required
