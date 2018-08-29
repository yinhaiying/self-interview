/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var re = /\b[a-zA-Z]+\b/g
  if(re.test(s)){
    var arr = s.match(re)
    return arr[arr.length-1].length;
  }else{
    return 0
  }

};
var s = 'Hello world'
console.log( lengthOfLastWord(s) )