
/**
 * 输入: "babad"
 输出: "bab"
 注意: "aba"也是一个有效答案。
 * @param {string} s
 * @return {string}
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
 */
//  超出了时间限制
var longestPalindrome = function(s) {
  if(s.length <= 1)
    return s;
  for(var i = s.length;i>=0;i--){
    //  先从0到最后获取最长的子串，这些子串只要是回文数字，那么一定是最长的子串。
    for(var j = 0; j <= s.length-i;j++){
      var sub = s.substring(j, i+j)
      var count =0;  //计数，用来判断是否对称
      for(var k = 0;k<sub.length/2;k++){
        if(sub.charAt(k) === sub.charAt(sub.length-1-k)){
          count++;
        }
      }
      if(count === Math.ceil( sub.length/2)){
        return sub;
      }
    }
  }
  return '';//表示字符串中无回文子串
}

var str = 'babadada'
console.log(longestPalindrome(str))