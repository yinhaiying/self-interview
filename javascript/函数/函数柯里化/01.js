//
// function sum(a,b,c){
//   return a+b+c;
// }
// console.log(sum(1,2,3))
// console.log(sum(1,2,4))
// console.log(sum(1,2,5))
//
// console.log('....函数柯里化')
// // 改写成sum(1)(2)(3)求和的形式
//
// function sum2(x){
//   return function(y){
//     return function(z){
//       return x+y+z;
//     }
//   }
// }
// var res = sum2(1)(2);
// console.log(res(3));
// console.log(res(4));
// console.log(res(5));

//函数柯里化应用之延迟求值
function sum3(...rest){
  return rest.reduce((a,b) =>{return a+b});
}
console.log(1,2,3,4,5)
//柯里化函数
function currying(fn){
  var arg = [];
  //返回的函数要根据参数的个数来确定
  return function x(...rest){
    if(rest.length){
      arg.push(...rest);
      return x;
    }else{
      return [fn(...arg),arg=[]][0];
    }
  }
}
// let sumCurrying = currying(sum3);
// sumCurrying(1,(2,3),4)  //每次接收参数不固定
// sumCurrying(5)  //每次接收参数不固定
// console.log( sumCurrying());//没有接收参数的时候就直接求值了
// sumCurrying(5);
// console.log( sumCurrying());//没有接收参数的时候就直接求值了

//柯里化固定+延迟求值
function currying(fn,...arg){
  let initArg = [...arg];
  //返回的函数要根据参数的个数来确定
  return function x(...rest){
    if(rest.length){
      arg.push(...rest);
      return x;
    }else{
      return [fn(...arg),arg=initArg][0];
    }
  }
}
let sumCurrying2 = currying(sum3,1,2);
sumCurrying2(3)
console.log( sumCurrying2() ); // 1+2+3 = 6;



