/*
typeof:Number,String,boolean,function,object,undefined

console.log(typeof(null)):object

console.log(typeof(undefined)):undefined

console.log(typeof(NAN))：undefined

console.log(NAN == undefined):NAN is not defined

console.log(1+2+‘3’+4)：334

var str = '12345f';

console.log(typeof(str++)):Number

console.log(‘str’== new String('str')):false
*/
//所有的内置函数的类型都是function
console.log(typeof Number) //function
console.log(typeof String) //function
console.log(typeof Boolean) //function
console.log(typeof Function) //function
console.log(typeof Number) //function
console.log(typeof Object) //function

console.log('使用typeof检测特殊的值')

//使用typeof 检测null 和undefined,NAN
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof (NAN)) //undefined
// console.log(NAN === undefined) //NAN is not defined


var str = '12345f';

console.log(typeof(str++)) //number

var x=1,y=0,z=0;
var add=function(x){
  return x = x+1;
}
y=add(x);
function add(x){
  return x=x+3;
}
z = add(x);
console.log(x,y,z);
//输出1,2,2 原因：通过var声明的函数的引用不会被后面的函数改变

console.log('var 和function 同名的优先级')
var b = 3;

function b(){
  console.log('b函数')
}
console.log(b)

// b(); 同名变量var 定义的变量高于function的定义的变量。
console.log('this指向问题')

var num=1;
var myObject ={
  num :2,
  add:function(){
    console.log(this)  //myObject
    this.num=3;
    (function(){
      console.log(this)  //window
      console.log(this.num);
      this.num=4;
    })();
    console.log(this.num);
  },
  sub:function(){
    console.log(this.num);
  }
}

myObject.add(); //1 3  window.num =4了

console.log(myObject.num); //3
console.log(num);  //4
var sub = myObject.sub;
sub();//这里的this变成window了。

