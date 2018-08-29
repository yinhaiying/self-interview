/**
 *
 给定一个 32 位有符号整数，将整数中的数字进行反转。

 示例 1:
 输入: 123
 输出: 321

 示例 2:
 输入: -123
 输出: -321

 示例 3:
 输入: 120
 输出: 21
 */
var num = -12300
var reverse = function(x) {
  var str = x.toString().split('').reverse().join('')
  var re = /^(0+)/g
  str = str.replace(re,'')
  if(str.indexOf('-') > -1){
    str = '-'+str.substring(0,str.length-1)
  }
  if( parseInt(s) < -Math.pow(2,31)|| parseInt(s)> Math.pow(2,31)-1){
    return 0;
  }
  return Number(str)
}
console.log(reverse(num))