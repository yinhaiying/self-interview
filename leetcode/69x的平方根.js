/**
 *
 * 输入: 8
 输出: 2
 说明: 8 的平方根是 2.82842...,
 由于返回类型是整数，小数部分将被舍去。
 */
var mySqrt = function(x) {
  if(x === 0){
    return 0;
  }else if(x ===1 ){
    return 1;
  }
  for(var i = 0;i < x;i++){
    if(Math.pow(i,2) <= x &&Math.pow(i+1,2) > x){
      return i;
    }
  }
};
var x = 4;
console.log(mySqrt(x))