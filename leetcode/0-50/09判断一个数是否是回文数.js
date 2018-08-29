/**
 * @param {number} x
 * @return {boolean}
 *输入: -121
 输出: false
 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 */
var isPalindrome = function(x) {
  var str = x.toString().split('').reverse().join('')
  if(str === x.toString()){
    return true
  }else {
    return false;
  }
};

var num = 121;
console.log(isPalindrome(num))