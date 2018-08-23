var groupAnagrams = function(strs) {
  var obj = {};
  for (var i = 0; i < strs.length; i++) {
    var str = strs[i];
    var key = strs[i].split('').sort().join('');
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(str);
  }
  var res = [];
  for (var j in obj) {
    if (obj.hasOwnProperty(j)) {
      res.push(obj[j])
    }
  }
  return res;
};
var strs = ["eat", "tea", "tan", "ate", "nat",'abn'];
console.log(groupAnagrams(strs))