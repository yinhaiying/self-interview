/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 实现 strStr() 函数。
 输入: haystack = "hello", needle = "ll"
 输出: 2
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};
var haystack = 'hello';
var needle = 'm';
console.log(strStr( haystack, needle))