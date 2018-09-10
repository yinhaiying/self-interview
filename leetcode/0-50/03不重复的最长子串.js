 正确答案
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) {
    return 0;
  }
  var sArr = s.split('');
  var resArr = [sArr[0]];
  var res = 1; //  res表示返回的子串的长度
  var item;
  for (var i = 0; i < s.length; i++) {
    item = sArr[i];
    var indexOf = resArr.indexOf(item); /*如果下一个字符包含在目前的字符串中，就截取已有字符串中，从该字符串后面的*/
    if (indexOf > -1) {
      resArr = resArr.splice(indexOf + 1); //  只有一个参数则表示截取到最后
    }
    resArr.push(item);
    res = resArr.length > res ? resArr.length : res;
  }
  return res;
};
var str = 'bbbb';
function lengthOfLongestSubstring (s) {
  if(s.length ==0){
    return 0;
  }
  var arr = s.split('');
  var resArr = [arr[0]]; // 先获取第一个字符，来与下一个字符进行比较
  var result = 1; // 第一个字符组成的子串长度为1
  for(var i=0;i<arr.length;i++) {
    var index = resArr.indexOf(arr[i]); // 判断子串中是否有下一个字符
    if(index>-1){
      //如果有重复的子串，那么需要删除从该索引之前的所有的部分，只保留后面的子串
      //splice()返回删除后的元素。同时要把下一个元素添加到剩下的子列中
      resArr = resArr.splice(index+1)
      resArr.push(arr[i])
    }else{
      //没有与下一个字符重复的字符，就把下一个字符添加到当前数组中
      resArr.push(arr[i])
    }
    result = resArr.length>result?resArr.length:result;
  }

  return result;
}
console.log( lengthOfLongestSubstring(str));
