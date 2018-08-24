


/*
arr = [1, 2, [3, 4], [5, 6, [7, 8], 9], 10, 11];
depth = 1: [1, 2, 3, 4, 5, 6, [7, 8], 9, 10, 11]
depth = 2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 */
//方法1：无论你最后是什么形式。都可以先进行扁平化处理得到一个数组，然后再按照
//要求得到想要的数组
var arr = [1, 2, [3, 4], [5, 6, [7, 8], 9], 10, 11];
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
var res = streamRoller(arr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(res)