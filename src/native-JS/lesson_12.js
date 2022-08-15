// this

// 1) Global context
// 2) this внутки функции
// 3) .bind .call .apply
// 4) поведение this внутри конструкторов

//======== 1)Global context ===========
// this в глобальном контексте - это всегда глабальный объект

console.log(this)


//======== 2) this внутки функции ===========
//Мы не знаем что это за переменная, нужно знать откуда она вызывается
// Важен момент вызова, там и определяется каким будет this

// Если this в обычной функции, всегда ищем место вызова этой функции, смотрим какой объект слава от точки, значит он и будет this. Если объекта нету то this будет глабальным объектом window
// Если this в стреочной функции, от он всегда будет выпригивать во внешнее окнружение и там будет его искать

const bar = function () {
    console.log(this)
}

const vladimir = {
    name: 'Vladimir',
    age: 28,

    showName() {
        console.log(this.name)
    },
    showAge: () => {
        console.log(this.age)
    }
}

const alexandra = {
    name: 'Alexandra',
    showName: vladimir.showName
}

vladimir.showName()     // this ---> vladimir

alexandra.showName()    // this ---> alexandra

const showeName = vladimir.showName
// В нестрогом режиме this будет undefined, но браузер дасть ему объект window
showeName()     // this ---> undefined ---> window


function foo(){
    return this
}

foo() // this --> undefined --> window

//Стелочная функция всегда ищет this из внешнего лексического значяения
//Поднимается в верх и ищет объект


//======== 3) .bind .call .apply ===========
// помогает не потерять контекст
// не использовать в стрелочных функция, методы отрабатываются но не привязываются к контексту
// если один метод сработал, то уже передеалть другим методом мы не сможет
function foo2(a, b , c) {
    console.log(this)
}

//call - вызывает функцию, с указанием this который мы хотим, и передаём аргументы которые нужны функции
foo2.call({name: 'Vladimir'}, 1, 2, 3)

//apply - тоже самое что и call, но методы передаются в массимве
foo2.apply({name: 'Vladimir'}, [1, 2, 3])

// bind - возвращает функцию в которой контекст уже привязан
const bindedF = foo2.bind({name: 'Vladimir'}, 1, 2, 3)
bindedF()
//можно написать два вызов
foo2.bind({name: 'Vladimir'}, 1, 2, 3)()


//======== 4) поведение this внутри конструкторов ===========
// this = {} это новый объект
// this внутри конструктора всегда новый экземпляр объекта
// если из конструктора нечего не ретёрнится, по у молчанию возвращается this
// если ретёрнится примитив, то конструктор всё ровно вернёт this
// естли ретёрнится объект то он же и вернётся
function User(name) {
    this.name = name
}

const vladimir1 = new User('Vladimir')

//=========================================================================

function MyFirstConstructorFunc (name, age) {
    this.name = name
    this.age = age
    this.greeting = function () {
        console.log(`My name is ${this.name}. I am ${this.age}`)
    }
}