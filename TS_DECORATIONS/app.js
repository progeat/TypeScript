"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Паттерн декоратор */
class User {
    constructor(name) {
        this.name = name;
    }
    sayMyName() {
        console.log(this.name);
    }
}
function makeProgrammer(user) {
    user.isProgrammer = true;
    return user;
}
const user = makeProgrammer(new User('Andrey'));
console.log(user.isProgrammer);
user.sayMyName();
/* Decorator в TS нужно включить поле в конфиге experimentalDecorators */
function ClassDecorator(target) {
    console.log('Class Decorator', target);
}
function ClassDecorator2(target) {
    console.log('Class Decorator2', target);
}
let User2 = class User2 {
    constructor(isProgrammer) {
        this.isProgrammer = isProgrammer;
        console.log('Constructor');
    }
};
User2 = __decorate([
    ClassDecorator,
    ClassDecorator2
], User2);
const user2 = new User2(true);
function Component(props) {
    return function (constructor) {
        const node = document.querySelector(props.selector);
        const instance = new constructor('Andrey');
        if (node) {
            node.insertAdjacentHTML('afterbegin', props.template);
            node.querySelector('span').textContent = instance.name;
        }
    };
}
let UserComponent = class UserComponent {
    constructor(name) {
        this.name = name;
        console.log('Constructor');
    }
};
UserComponent = __decorate([
    Component({
        selector: '#app',
        template: `
    <h1>This is user Component</h1>
    <h2>User name is <span></span></h2>
  `,
    })
], UserComponent);
/* Декоратор свойств */
function MaxChildren(limit) {
    return function (target, key) {
        let value;
        const get = () => value;
        const set = (newValue) => {
            if (newValue > limit) {
                value = limit;
                console.warn('Вы превысили лимит. Максимум детей: ', limit);
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, key, {
            get,
            set,
        });
    };
}
class User3 {
    constructor(children) {
        this.children = children;
    }
}
__decorate([
    MaxChildren(10)
], User3.prototype, "children", void 0);
const user3 = new User3(100);
console.log(user3.children);
const user4 = new User3(5);
console.log(user4.children);
