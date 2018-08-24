
/*
将数组按照层次展开：
arr = [1, [2], [3, [[4]]]],展开为：[1, 2, 3, 4]
分析思路：首先要判断数组的元素是不是一个数组，如果是要将它拆开
 */

var arr =[[], 1, [2,'b'], [3, [[4,2,'a']]]];
function streamRoller(arr){
  var result = [];
  for(var i = 0;i < arr.length;i++){
    if(arr[i] instanceof Array){
      result.push(...streamRoller(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  return result
}
// console.log( streamRoller(arr) )
function _streamRoller (arr) {
  //toString()方法能够将数组扁平化处理，得到所有的包括,在内的值。
  var str = arr.toString();//',1,2,3,4,5'
  var re = /\,/g;
  str = str.replace(re,'')
  // var result = str.split('') //[",", "1", ",", "2", ",", "3", ",", "4", ",", "2"]

  var result = str.split('')
  return result;
}
console.log( _streamRoller(arr) )


