/* Паттерн декоратор */
class User {
  isProgrammer?: boolean;

  constructor(public name: string) {}

  sayMyName() {
    console.log(this.name);
  }
}

function makeProgrammer(user: User) {
  user.isProgrammer = true;
  return user;
}

const user = makeProgrammer(new User('Andrey'));

console.log(user.isProgrammer);
user.sayMyName();

/* Decorator в TS нужно включить поле в конфиге experimentalDecorators */

function ClassDecorator(target: Function) {
  console.log('Class Decorator', target);
}

function ClassDecorator2(target: Function) {
  console.log('Class Decorator2', target);
}

@ClassDecorator
@ClassDecorator2
class User2 {
  constructor(public isProgrammer: boolean) {
    console.log('Constructor');
  }
}

const user2 = new User2(true);

/* Практический пример декоратора */

interface ComponentProps {
  template: string;
  selector: string;
}

function Component(props: ComponentProps) {
  return function (constructor: any) {
    const node = document.querySelector(props.selector);
    const instance = new constructor('Andrey');

    if (node) {
      node.insertAdjacentHTML('afterbegin', props.template);
      node.querySelector('span')!.textContent = instance.name;
    }
  };
}

@Component({
  selector: '#app',
  template: `
    <h1>This is user Component</h1>
    <h2>User name is <span></span></h2>
  `,
})
class UserComponent {
  constructor(public name: string) {
    console.log('Constructor');
  }
}

/* Декоратор свойств */

function MaxChildren(limit: number) {
  return function (target: Object, key: string | symbol) {
    let value: number;

    const get = () => value;

    const set = (newValue: number) => {
      if (newValue > limit) {
        value = limit;
        console.warn('Вы превысили лимит. Максимум детей: ', limit);
      } else {
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
  @MaxChildren(10)
  children: number;

  constructor(children: number) {
    this.children = children;
  }
}

const user3 = new User3(100);
console.log(user3.children);

const user4 = new User3(5);
console.log(user4.children);

/* Декораторы методов */
