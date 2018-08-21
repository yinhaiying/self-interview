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

function Person1(){}

Person1.prototype.name = 'yin';
Person1.prototype.age = '24';
Person1.prototype.showName =function(){
  console.log(this.name)
}

let person11 = new Person1();
person11.showName();  //'yin'

let person12 = new Person1();
person12.showName(); // 'yin'
/**
 *原型对象
 * */
// 改写原型对象
Person1.prototype = {
  name: 'yin',
  age: 24,
  showName: function () {
    console.log(this.name)
  }
}

/**
 *constructor构造器
 * */
console.log(Person1.prototype.constructor == Person1) //  false

/**
 *构造函数和实例
 * */
function Person11 (name,age) {
  this.name = name;
  this.age = age;
  this.showName = function () {console.log(this.name)}
}
let p1 = new Person11('yin',24);
console.log(p1.constructor === Person11);  // true
console.log(Person11.prototype.constructor === Person11) //true

/**
 *实例和原型对象之间的关系
 * */

console.log(p1 == Person11.prototype)

/**
 *prototype作用:继承
 * */
console.log('...........')
function Person12 (name,age) {
  this.name = name;
  this.age = age;
}
Person12.prototype.job = 'student'
let p2 = new Person12('yin1',24);
let p3 = new Person12('yin2',24);
console.log(p2.job);  //student
console.log(p3.job);  //student

/**
 * 继承:原型链继承
 *
 */
function Father1 () {
  this.money = '1000';
//  如果父类中有引用类型的属性会产生问题
  this.colors = ['red','green']
}
Father1.prototype.getMoney = function (){
  console.log(this.money)
}


function Son (s) {
  this.s = s;
}

//实现继承
  Son.prototype = new Father1()
  Son.prototype.constructor = Son

//  调用父类的方法和属性
 let son1 = new Son()
 console.log(son1.money)  //1000
 son1.getMoney()  //1000


/**
 * 继承:构造函数继承
 *
 */
function Father2 () {
  this.money = '1000';
//  如果父类中有引用类型的属性会产生问题
  this.colors = ['red','green'];
  this.getMoney = function () {
    console.log(this.money)
  };
  this.getColors = function () {
    console.log(this.colors)
  }
}



function Son2 (s) {
  //  通过在子类构造函数中调用父类构造函数
  Father2.call(this)
  this.s = s;
}

let son2 = new Son2()
son2.colors.push('black')
console.log(son2.colors) // ['red','green','black']

let son21 = new Son2()
console.log(son21.colors)// ['red','green']
son2.getMoney()

/**
 * 继承:组合继承
 *
 */

function Super () {
  this.name = 'hello';
  this.color = ['red']
}
Super.prototype.showName = function () {
  console.log(this.name)
}

function Sub (age) {
  this.age = age;
  //  构造函数继承： 继承属性
  Super.call(this)
}
//  原型链的继承：继承方法
Sub.prototype = new Super ()
Sub.prototype.constructor = Sub

let sub1 = new Sub();
sub1.color.push('green')
console.log(sub1.color) // ['red', 'green']
sub1.showName()  // hello

let sub2 = new Sub();
console.log(sub2.color)// ['red']

/**
 * 继承:原型式继承
 *
 */
function obj (o) {
  function F (){}
  //  通过原型继承方法
  F.prototype = o;
  //  通过实例继承属性
  return new F();
}

let obj1 = {
  name: 'Bob',
  age: 24,
  colors:['red','green'],
  showName:function(){console.log(this.name)}
};
let obj2 = obj(obj1)
console.log(obj2.name)
obj2.colors.push('black')
console.log(obj2.colors)  //['red','green','black']

let obj3 = obj(obj1)
console.log(obj3.colors)  //['red','green','black']

/**
 * 继承:Object.create()实现原型式继承
 *
 */
console.log('...............')
let obj4 = Object.create(obj1)
console.log(obj4.name) // Bob
obj4.showName()  //Bob




/**
 * 继承:寄生式继承
 *
 */
console.log('寄生式继承')
function basisFn (o) {
  function F (){}
  //  通过原型继承方法
  F.prototype = o;
  //  通过实例继承属性
  return new F();
}

function createObject (obj) {
  //在函数内部克隆对象
  let clone = basisFn(obj)
  //给克隆出来的对象添加方法
  clone.showName = function () {console.log(this.name)}
  //返回添加了方法的对象
  return clone
}

//寄生式继承的使用
let obj5 = {
  name:'hello'
}

let obj6 = createObject(obj5)
obj6.showName()  //hello