/**
 * @param {string[]} strs
 * @return {string}
 *
 *
 编写一个函数来查找字符串数组中的最长公共前缀。
 如果不存在公共前缀，返回空字符串 ""。
 示例 1:

 输入: ["flower","flow","flight"]
 输出: "fl"
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return '';
  }
  // 先把第一个全都看成是前缀
  var pre = strs[0].split('');
  strs.forEach(function(v, i) {
    if (i == 0) {
      return;
    }
    var j = 0;
    var vArr = v.split('');
    while (j <= vArr.length && j <= pre.length) {
    // 再让第一个和其他的逐个逐个单词进行比较，如果不相同就把后面的切割掉
      if (vArr[j] != pre[j]) {
        //两个两个进行比较，pre一直代表着前面公共部分
        pre = pre.slice(0, j);
        break;
      }
      j++;
    }
  });
  return pre.join('');
};

var arr = ['abca','abc','ab'];
console.log(longestCommonPrefix(arr))
