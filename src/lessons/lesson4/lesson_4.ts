console.group('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
const promise = new Promise((res, rej) => {
    console.log("Promise is created")
})
console.log('01:')
console.log(promise)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const promise2 = new Promise<{message: string}>((res, rej) => {
    res({message: '4.02: Promise Data'})

})
promise2.then(date => console.log(date.message))
console.log(promise2)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
const promise3 = new Promise<{message: string}>((res, rej) => {
    rej({message: '4.03: Promise Error'})

})
promise3.catch(date => console.log(date.message))
console.log(promise3)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
const promise4 = new Promise<{message: string}>((res, rej) => {
    setTimeout(()=>{
        res({message: '4.04: Promise Data'})
    },3000)
})
promise4.then(date => console.log(date.message))

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName: string) {console.log(`Promise is resolved with data: ${paramName}`)},
    onError(paramName: string) {console.log(`Promise is rejected with error: ${paramName}`)}
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const promise6 = new Promise<{message: string}>((res, rej) => {
    setTimeout(()=>{
        res({message: 'My name is'})
    },1000)
})

const onSuccess = (string: string) => {
    return string + ' Vladimir'
}

const print = (x: any) => {
    console.log(x)
}

promise6
    .then(date => onSuccess(date.message))
    .then(date => {
        print(date)
    })

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise7 = new Promise<any>((res,rej) => {
    setTimeout(()=>{
        res({ name: "Anna" })
    },2000)
})
const promise8 = new Promise<any>((res,rej) => {
    setTimeout(()=>{
        res({age: 16})
    },3000)
})
const promise9 = new Promise<any>((res,rej) => {
    setTimeout(()=>{
        res({city: 'Grodno'})
    },4000)
})

Promise
    .allSettled([
        promise7
            .then(date => date.name),
        promise8
            .then(date => date.age),
        promise9
            .then(date => date.city)
    ])
    .then(console.log)

console.groupEnd();
// just a plug
export default ()=>{};
