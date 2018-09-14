/*
解题思路
输入一个整数n，统计从1到n有多少符合二进制形式的数。想法很简单，
n包含的个数和小于n最大的二进制形式的整数包含个数是一样的。包含的二进制整数为 1 10

而二进制形式的数包含的个数其实就是对应二进制数的值。  这里的二进制10包含的个数就是对应的二进制的数的值2
也就是说十进制的10 包含的二进制的个数就是 2。

这样，求解过程就是将n化为小于它的最大整数二进制形式，再计算对应二进制的值。
 */


//
// var re = /^1[0-1]*$/;
//
// var str2 = '11';
// var arr2 = [];
//
//
//
//
//
// var count = 1;
//
// for(var i = 1;i < 50;i++){
//   if(re.test(i)){
//     count++;
//     arr2.push(i);
//   }
// }
//
//
// var num = '11';
// console.log(re.test(num));
//
//
// console.log(count)
// console.log(arr2)
//
// var input;
var input = 20;

  var n = +input;
  var i = 1;

  while(i.toString(2) <= n){
    var item = i.toString(2)
    i++;
  }
  console.log(i-1)








