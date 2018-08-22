/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length == 0) {
    return '';
  }
  var sArr = s.split('');
  var res = '';
  var item;
  for (var i = 0; i < s.length; i++) {
    item = sArr[i];
    var subS = item;
    var beforeIndex = 1;
    while (true) {
      if (sArr[i - beforeIndex] == item) {
        beforeIndex++;
        subS += item;
      } else {
        break;
      }
    }
    var afterIndex = 1;
    while (true) {
      if (sArr[i + afterIndex] == item) {
        afterIndex++;
        subS += item;
      } else {
        break;
      }
    }
    var inteval = 1;
    while (true) {
      var before = sArr[i - beforeIndex + 1 - inteval];
      var after = sArr[i + afterIndex - 1 + inteval];
      if (before && after && before == after) {
        inteval++;
        subS = before + subS + after;
      } else {
        break;
      }
    }
    if (subS.length > res.length) {
      res = subS;
    }
  }
  return res;
};

var str = 'babadada'
console.log(longestPalindrome(str))