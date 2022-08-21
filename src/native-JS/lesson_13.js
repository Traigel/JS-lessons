// prototype / __proto__


//__proto__ - есть у всех объектов и ссылается на prototype с помощью которого объект был создан.
// prototype - это объект, который есть у class, либо function (у стрелочных функций его нет),

// __proto__ - есть у всех объектов.
// Почти всегда это объект. При том разые __proto__ разных по 'типу' объектов - они равны, то есть это один и тот же объект.


//const man = {};   // new Object(...)
// const man2 = {};
// man.__proto__ === man2.__proto__   // true
//
// const users = [];   // new Array(...)
// const users2 = [];
// users.__proto__ === users2.__proto__   // true
//
// const str = "string";   // new String(...)
// const str2 = "string2";
// str.__proto__ === str2.__proto__   // true
//
// man.__proto__ === users.__proto__   //false
// users.__proto__ === str.__proto__   //false


//__proto__ любого объекта ссылается на prototype клвсса (функцию-конструктора), с помощью которой этот объект был создан (сконструирован)

// prototype - есть у class, либо function (у стрелочных функций его нет)

// Каждый prototype - это незавичимый объект, сам по себе, с определённым набором свойст и методов.


//const promise = new Promise(()=>{});
// promise.__proto__ === Promise.prototype   // true
//
// const man = {}; // new Object(...)
// man.__proto__ === Object.prototype   //true
//
// const users = []; // new Array(...)
// users.__proto__ === Array.prototype   //true
//
// const str = "string"; // new String(...)
// str.__proto__ === String.prototype   //true