/**
 *
 *所有的内置的对象都是function类型对象
 * */
console.log(typeof Function);  //function
console.log(typeof Object);   //function
console.log(typeof Array);  //function
console.log(typeof Date);  //function


/**
 *
 *所有的内置的函数对象都有一个prototype属性，这个属性指向函数的原型对象(也就是说这个属性是一个对象)
 * */

function Person(){}

Person.prototype.name = 'yin';
Person.prototype.age = '24';
Person.prototype.showName =function(){
  console.log(this.name)
}

let person1 = new Person();
person1.showName();  //'yin'

let person2 = new Person();
person2.showName(); // 'yin'
/**
 *原型对象
 * */
// 改写原型对象
Person.prototype = {
  name: 'yin',
  age: 24,
  showName: function () {
    console.log(this.name)
  }
}

/**
 *constructor构造器
 * */
console.log(Person.prototype.constructor == Person) //  false

/**
 *构造函数和实例
 * */
function Person1 (name,age) {
  this.name = name;
  this.age = age;
  this.showName = function () {console.log(this.name)}
}
let p1 = new Person1('yin',24);
console.log(p1.constructor === Person1);  // true
console.log(Person1.prototype.constructor === Person1) //true

/**
 *实例和原型对象之间的关系
 * */

console.log(p1 == Person1.prototype)

/**
 *prototype作用:继承
 * */
console.log('...........')
function Person2 (name,age) {
  this.name = name;
  this.age = age;
}
Person2.prototype.job = 'student'
let p2 = new Person2('yin1',24);
let p3 = new Person2('yin2',24);
console.log(p2.job);  //student
console.log(p3.job);  //student






