// Promise
// Это объект у которого есть состояние ('fulfilled', 'pending', 'rejected')
// у промиса есть результат его работы.
// У экземпляра промиса есть методы для работы с результатом выполнения промисов (then, catch, finally)
// Все методы возвращают промисы и мы можем выстраивать их в цепочки
// Создаётся промис с помощью конструктора new Promise передать туда executor
// executor это функция которая принимае два оргумента resolve, reject
// Промисификация - из кода котрый не работае с промисами деаем код который возвращает нам промис


const p = { //объект промиса
    _state: 'fulfilled', // состояние ('fulfilled', 'pending', 'rejected')
    _result: {name: 'Vladimir'},
    then() {},      // попадаем при успешном выполнении промиса - resolve
    catch() {},     // попадаем в случае ошибки - reject
    finally() {}    // попадаем всегда
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'Vladimir'})      // успешное выполнение
        //reject('Some error')                 //не выполнено
    }, 2000)
})

promise.then(
    (data) => { console.log(data) }, //при успешном выполнении - resolve
    (err) => { console.log(err) }   //при ошибке - reject
)
promise.then(           //при передачи одного callBack выполняется результат resolve
    (data) => {console.log(data)}
)
promise.catch(          // используется только для получения отрицательного реультата
    (err) => { console.log(err) }
)
promise.finally(        // выполяется влюбом случае не зависимо от результата
    ()=> { console.log('Inside finally')} //нечего не передоётся в колбек
)
promise                  // чаще всего исмпользуется этот вариант
    .then((data) => {})
    .catch((err) => {})


//Цепочка промисов
//then всега возвращает промис

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(1)
        //rej('Some error')
    }, 2000)
})

promise2
    .then((date) => {
        console.log(date)

        return new Promise((res, rej) => {
            setTimeout(() => {
                res(2)
            }, 1000)
        })
    })
    .then((date) => {
        console.log(date)
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(3)
            }, 1000)
        })
    })
    .then(date => {
        console.log(date)
    })


promise2
    .then((date) => {
        console.log(date)
        return 2   // res(2)
    })
    .then((date) => {
        console.log(date)
        return 3   // res(3)
    })
    .then(date => {
        console.log(date)
    })


// Обработка ошибок

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        //res(1)
        rej('Some error')
    }, 2000)
})

promise3
    .then((date) => {
        console.log(date)
    })
    .catch(err => {
        console.log(err)
    })


//-----------------------

// const axios = {
//     get(url,callBack) {
//         if (url) callBack(null, 'Some Data')
//         else callBack({message: 'Invalid url'}, null)
//     }
// }
//
//
// axios.get('https://vk.com/users', (err, data) => {
//     if (err) console.log(err)
//     else console.log(data)
// })
//-----------------------


//async await
//async - делаю функцию осинхронной (промисом). Ставится только перед вызовом той функции что возвращает промис.
//await - пока не выполнется, код ниже не выполняется

const getUsersAsync = async() => {   //означает что функция осинхронная - async
    try {
        const users = await axios.get('https://vk.com/users')
        const user = await axios.get('https://vk.com/user')
        const books = await axios.get('https://vk.com/books')
    }
    catch (e) {
        console.log(e)
    }
    finally {

    }
}

getUsersAsync()
    .then( data => console.log(data))


// Статические методы не доступны экземплярам этого класса или этой функции конструктора
//Promise.all();
//Promise.race();
//Promise.allSettled();
//...

const p1 = new Promise(res => {setTimeout(()=> {res(3)}, 3000)})
const p2 = new Promise(res => {setTimeout(()=> {res(2)}, 2000)})
const p3 = new Promise((res, rej) => {setTimeout(()=> {rej(1)}, 1000)})

Promise
    .all([p1, p2, p3]) // ждёт пока все промисы буду выполнены, если ошибка нечего не вернёт
    .then(console.log)

Promise
    .race([p1, p2, p3]) // при выполнении первого промиса не выполняет остольные
    .then(console.log)

Promise
    .allSettled([p1, p2, p3]) // выполняет все промисы, независимо от их выполнения или нет
    .then(console.log)

const p4 = Promise.resolve() // вернёт сразу промис в котором есть resolve()

const p5 = Promise.reject() // вернёт сразу промис в котором есть reject()

//Промисификация

function get(url, callBack) {
    if (url) callBack(null, 'Some Data')
    else callBack({message: 'Invalid url'}, null)
}

//Пишим обёртку для обычного кода что бы он начал роботать с промисами
function promisifyGet(url) {
    return new Promise((res, rej) => {
        get(url, (err, data) => {
            if (err) rej(err)
            else res(data)
        })
    })
}
