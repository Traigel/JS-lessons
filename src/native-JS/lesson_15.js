// descriptors, iterators, objects to primitives

//Object.getOwnPropertyDescriptor
//Object.getOwnPropertyDescriptors
//Object.create
//Object.defineProperty
//Object.defineProperties

//Object.preventExtensions
//Object.seal
//Object.freeze

// =================== descriptors ===================
// Настройки свойств объекта

const user = {
    name: 'Vova',
    age: 28
}

//--- Этот метод позволяет посмотреть настройки свойства конкретного свойства
console.log(Object.getOwnPropertyDescriptor(user, 'name'))
// {configurable: true, enumerable: true, value: "Vova", writable:true}

// Насстройки всего объекта (всех свойств)
console.log(Object.getOwnPropertyDescriptors(user))

//--- Позволяет определить какой прототип будет у объекта
// вторым аргументом передаются элементы объекта и их настройки
const user1 = Object.create(Object.prototype, {
    name: {
        value: 'Alex',
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 23,
        writable: true,
        enumerable: true,
        configurable: true
    }
})

//--- Определяем какое свойство и какие настройки будут у объекта
const user3 = {}

Object.defineProperty(user3, 'name', {
    value: 'Alex',
    writable: true,
    enumerable: true,
    configurable: true
})

// определяем несколько значений у объекта
Object.defineProperties(user3, {
    name: {
        value: 'Alex',
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 23,
        writable: true,
        enumerable: true,

    }
})

// ----- writable -------
// Могу ли я менять это свойство с помощью опреатора =

const user4 = Object.create(Object.prototype, {
    name: {
        value: 'Vova',
        writable: false, // не меняет значение с помощью =
        enumerable: true,
        configurable: true
    }
})

//При попытке изменить поле name, изменения не будет
// в строгом режиме ('use strict') выдаст ошибку, в обычном нечего не будет
user4.name = 'Alex'

// ----- enumerable -------
// Не видно свойство в циклах, скрывает свойства

const user5 = Object.create(Object.prototype, {
    name: {
        value: 'Vova',
        writable: true,
        enumerable: false, // видны ли свойства объека в циклах, скрывает свойство
        configurable: true
    }
})

// ----- configurable -------
// 1. Нельзя удалить свойство
// 2. Нельзя переопредеить свойства настройки enumerable и configurable
// 3. Нельзя поменять writable с false -> true

const user6 = Object.create(Object.prototype, {
    name: {
        value: 'Vova',
        writable: true,
        enumerable: true,
        configurable: false // Нельзя удалить свойство...
    }
})


// === Object.preventExtensions ===

const user7 = {
    name: 'Vova',
}
// не даёт добавлять объект, не создаёт новые ключи в объекте
Object.preventExtensions(user7)

// === Object.seal ===
// не даёт удалить значение у объекта
Object.seal(user7)

// === Object.seal ===
// не добавляет и не удаляет свойства в объектк, и не презаписывает их
Object.freeze(user7)


// =================== iterators ===================
// 56 min