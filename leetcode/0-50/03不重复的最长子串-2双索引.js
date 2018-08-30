/*
给定一个字符串，找出不含有重复字符的最长子串的长度。

示例 1:

输入: "abcabcbb"
输出: 3
解释: 无重复字符的最长子串是 "abc"，其长度为 3。
 */
var lengthOfLongestSubstring = function(s) {
  var l = 0,r = 0;  //[l,r]表示不重复的子串。一开始应该为空
  var str = '';
  var res = 0; //长度为0；
  if(!s.trim()){
    if(s.length > 0){
      return 1;
    }else{
      return 0;
    }
  }
    while(l < s.length){
      var item = str.indexOf(s[r])
      if(r+1<=s.length && item === -1){
        str += s[r];
        r++;
      }else {
        str = str.substring(1,r+1) //这里每一次是切割一个
        l++;
      }
      res = str.length>res?str.length:res;
    }
  return res;
};
var s = "a"


console.log(lengthOfLongestSubstring(s))