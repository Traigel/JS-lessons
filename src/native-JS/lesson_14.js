// class

// class SuperUser {


//     constructor(name) {
//         //[[IsClassConstructor]]
//         this.name = name
//     }

//     showName() {
//         console.log(this.name)
//     }

// }

// //[[IsClassConstructor]]
// //wihtout new we cann not call class
// //'use strict';
// //строковое представление
// //all class methods not enumerable


// const hanna = new SuperUser("Hanna")



// ================ BASIC SYNTAX ===========


// class User {

//     constructor(name) {
//         this.name = name
//     }

//     //inside instanse
//     age = 23

//     //inside prototype
//     showName() {
//         console.log(this.name)
//     }

//     //inside instanse
//     showAge = () => {
//         console.log(this.age)
//     }

// }



// const hanna = new User('Hanna')


// ================ STATIC ===========

// class User {

//     static NAME_LENGTH = 20

//     static validateName(name) {
//         if(name.length > this.NAME_LENGTH) {
//             throw new Error()
//         }
//     }

//     constructor(name) {
//        User.validateName(name)
//     }

// }


// class Api {

//     static getTodos() {
//         axios.post()
//     }
// }


// const api = {
//     getTodos() {
//         axios.post()
//     }
// }

// api.getTodos()
// Api.getTodos()

// const alex = new User()

// User.NAME_LENGTH







// ====================  PRIVATE FIELD ================

// class User {
//     #age = 23

//     #test() {
//         console.log('HELLO')
//     }

//     showTest() {
//         this.#test()
//     }
// }

// const user = new User()
// user.showTest()



// ====================  GET SET ================

// class User {
//     #age = 23
//
//     get age() {
//         console.log(this.#age)
//         return 'Hello ' + ' ' + this.#age
//     }
//
//     set age(value) {
//         //Some validation
//         this.#age = value
//     }
// }


// const user = new User()


// user.age = 21
// user.age



// ====================  EXTENDS  ================

// class Car {
//     static ENGINE = 'V6'
// }

// class Ford extends Car {
//     static ENGINE = 'V8'
// }


// class Opel extends Car { }

// Ford.ENGINE // V8
// Opel.ENGINE // V6


// class User {
//     showName() {
//         console.log(this.name)
//     }
// }

// //User.prototype -> { constructor: User, showName }

// class Admin extends User {

// }

// //Admin.prototype -> { constructor: Admin }.__proto__ -> User.prototype
// const admin = new Admin() // {}

// admin.showName()

// class Car {

//     constructor(model) {
//         this.model = model || "defaut model"
//     }

//     age() {

//     }

// }

// class Ford extends Car {

//     constructor() {
//         super()
//     }

//     showModel() {
//         console.log('Note: This ford already have autopilot')
//     }
// }

// const mondeo = new Ford('mondeo', true)
