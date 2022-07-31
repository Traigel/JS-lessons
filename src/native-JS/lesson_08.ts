// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return nums.reduce((acc, el) => acc + el, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
export function getTriangleType(a: number, b: number, c: number): string {
    if (a === b && b === c) return '10'
    if (a === b || b === c || c === a) {
        if (a > b + c || b > c + a || c > a + b) return '00'
        else return '01'
    }
    if (a < b + c || b < c + a || c < a + b) return '11'
    return "00"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа
export function getSum(number: number): number {
    const str = number + ''
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        let x = +str[i]
        sum = sum + x
    }
    return sum
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    const even = arr.filter((el, i) => i % 2 === 0)
    const notEven = arr.filter((el, i) => i % 2 !== 0)
    const x = even.reduce((acc, el) => acc + el, 0)
    const y = notEven.reduce((acc, el) => acc + el, 0)
    return x > y
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.
export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.filter(el => el > 0 && el % 2 === 0).map(el => el ** 2)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.
export function sumFirstNumbers(N: number): number {
    if (N === 0) {
        return 0
    } else {
        return N + sumFirstNumbers(N - 1)
    }
}
sumFirstNumbers(5)
// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено
export function getBanknoteList(amountOfMoney: number): number[] {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let arr = [];
    let x = amountOfMoney;
    for (let i = 0; i < banknotes.length; i++) {
        if (x === 0) return arr
        while (x >= banknotes[i]) {
            arr.push(banknotes[i])
            x = x - banknotes[i]
        }
    }
    return arr
}