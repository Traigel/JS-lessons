console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal {
    constructor(name: string = 'Animal') {
        this.name = name;
    };
    name: string
    walk() {
        console.log(`${this.name} walking`)
    };
    eat() {
        console.log(`${this.name} eating`)
    };
    sleep() {
        console.log(`${this.name} sleeping`)
    }
}

const dog = new Animal('Pet')
console.log(dog.walk())

//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают

class Monkey extends Animal {

    roar() {
        console.log(`${this.name} roaring`)
    }
    climb() {
        console.log(`${this.name} climbing`)
    }
}

const monk = new Monkey('Monk')
const monk2 = new Monkey()
console.log(monk.roar())


//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают

class Human extends Monkey {
    speak() {
        console.log(`${this.name} speaking`)
    }
    think() {
        console.log(`${this.name} thinking`)
    }
}

const alex = new Human('Alex')
console.log(alex.think())

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование

//========== task 1 =========
function AnimalFun(name: string = 'Animal') {
    // @ts-ignore
    this.name = name;
}

AnimalFun.prototype.walk = function () {
    console.log(`${this.name} walking`)
};
AnimalFun.prototype.eat = function () {
    console.log(`${this.name} eating`)
};
AnimalFun.prototype.sleep = function () {
    console.log(`${this.name} sleeping`)
};

console.log(AnimalFun)

//=========== task 2 ==========
function MonkeyFun(name ='Monkey') {
    // @ts-ignore
    this.name = name;
}

MonkeyFun.prototype.__proto__ = AnimalFun.prototype

MonkeyFun.prototype.roar = function() {
    console.log(`${this.name} roaring`)
}

MonkeyFun.prototype.climb = function() {
    console.log(`${this.name} climbing`)
}

console.log(MonkeyFun)

//=========== task 3 ==========

function HumanFun(name ='Human') {
    // @ts-ignore
    this.name = name;
}

HumanFun.prototype.__proto__ = MonkeyFun.prototype

HumanFun.prototype.speak = function() {
    console.log(`${this.name} speaking`)
}
HumanFun.prototype.think = function() {
    console.log(`${this.name} thinking`)
}

console.log(HumanFun)

// Task 05
// Используя метод Apply реализовать свой собственный метод bind

// just a plug
export default () => {};