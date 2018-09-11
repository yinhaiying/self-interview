/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {

};

var letterMap = [' ',"","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
//digits是传入的数字字符串，比如'12'。index是字符串的每一个位置，
function findCombination(digits,index,s){
  var c = digits[index]; //获取每一个index对应的数字
  var letters = letterMap[index-0];//比如得到2对应的"abc"
  for(var i = 0; i < letters;i++){

  }
}
