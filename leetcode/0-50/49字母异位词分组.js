/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 *
 输出:
 [
   ["ate","eat","tea"],
   ["nat","tan"],
   ["bat"]
 ]
 */
var groupAnagrams = function(strs) {
 var obj = {};
//  找出数组中重复元素的下表
  for(var i = 0;i < strs.length;i++){
    var str = strs[i]; // 先保存排序前的这个字符
    //排序后的值如果相同，说明是同一个对象的属性值
    var keys = str.split('').sort().join('');
    if(!obj[keys]){
      obj[keys] = [];
    }
    obj[keys].push(str); //相同属性的值添加到同一个数组中
  }

  var resArr = new Array(Object.keys(obj).length);
  for(var i =0;i<resArr.length;i++){
    resArr[i] = Object.values(obj)[i]
  }
  return resArr;
};
var strs = ["eat", "tea", "tan", "ate", "nat",'abn'];
console.log(groupAnagrams(strs))