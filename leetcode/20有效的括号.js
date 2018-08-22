/**
 * @param {string} s
 * @return {boolean}
 *
 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

 有效字符串需满足：

 左括号必须用相同类型的右括号闭合。
 左括号必须以正确的顺序闭合。
 注意空字符串可被认为是有效字符串。
 */
var isValid = function(s) {
  //不断替换掉里面的(){}[],最后如果还有剩下的，说明不对。
  var splitReg = /(\(\))|(\[\])|(\{\})/g;
  //s.match(re)类似于indexOf只不过返回的是匹配的字符串，而不是下标
  while (s.match(splitReg)) {
    s = s.replace(splitReg, '')
  }
  return s === '';
};

var str = '()[[]{{}'
console.log(isValid(str))