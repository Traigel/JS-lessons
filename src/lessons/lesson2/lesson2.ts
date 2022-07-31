console.group('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
const sum = (x: number) => {
    return function (y: number) {
        return x + y
    }
}

console.log('Task 01: ' + sum(3)(6))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3
const makeCounter = () => {
    let x = 0
    return function() {
        return x = x + 1
    }
}

console.group('Task 02')
const counter = makeCounter();
console.log(counter())
console.log(counter())
const counter2 = makeCounter();
console.log(counter2())
console.log(counter())
console.groupEnd();

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
const makeCounter2 = (num: number) => {
    let x = num
    return {
        increase() {
            return x = x + 1
        },
        decrease() {
            return x = x - 1
        },
        reset() {
            return x = 0
        },
        set() {
            return x = num
        }
    }
}

console.group('Task 03')
const counter3 = makeCounter2(5);
console.log(counter3.increase())
console.log(counter3.decrease())
console.log(counter3.reset())
console.log(counter3.set())
console.groupEnd();

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum (num: number) {
    if(num === 0) return  0
    if(num === 1) return function (num: number) {return num}

    let arr: number[] = []

    function helper (...args: number[]) {
        arr = [...arr, ...args]
        if(arr.length >= num) {
            arr.length = num
            return arr.reduce((acc,el)=>acc+el)
        } else {
            return helper
        }
    }
    return helper
}
// @ts-ignore
console.log('Task 04*: ' + superSum(3)(2,5)(3,9))

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
console.group('Task 05')

//Task 05.01 Вычислить сумму чисел до данного. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
const sumTo = (n: number): any => {
    if (n === 1) return 1
    else return n + sumTo(n - 1)
}

console.log('01: ' + sumTo(5))

//Task 05.02 Вычислить факториал. Написать функцию factorial(n), которая возвращает n!
const factorial = (n: number): any => {
    if (n === 1) return 1
    else return n * factorial(n - 1)
}

console.log('02: ' + factorial(5))

//Task 05.03 Числа Фибоначчи. Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
const fib = (n: number): any => {
    if (n <= 1) return n
    else return fib(n - 1) + fib(n - 2)
}

console.log('03: ' + fib(5))

//Task 05.04 вывод односвязного списка. Напишите функцию printList(list), которая выводит элементы списка по одному.
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printList = (list: any): any => {
    console.log(list.value)
    if (list.next) printList(list.next)
}

console.group('04')
printList(list)
console.groupEnd();

//Task 05.05 Вывод односвязного списка в обратном порядке
const printList2 = (list: any): any => {
    if (list.next) printList2(list.next)
    console.log(list.value)
}

console.group('05')
printList2(list)
console.groupEnd();

console.groupEnd();
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
const arr = [1, 2, [3, 4]];
// const muFlat = (): any => {
//     let x = 0
//     let newArr: any = []
//     return function task06(arr: any): any {
//         if (x === arr.length) return newArr
//         if (Array.isArray(arr[x])) {
//             newArr = newArr.concat(arr[x])
//             return
//         } else {
//             newArr[x] = arr[x]
//             x = x + 1
//             return task06(arr)
//         }
//     }
// }
const flatten = (arr: any) => {
    return arr.reduce((acc: any, cur: any) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};

console.log('Task 06: ' + flatten(arr))

// just a plug
export default () => {
};
console.groupEnd();