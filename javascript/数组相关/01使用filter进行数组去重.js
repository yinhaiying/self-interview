

/*
使用数组的filter函数进行筛选，
 */
function removeDuplicates(arr){
  return arr.filter((item,index) => {
    var indexValue = arr.indexOf(item)
    return  indexValue === index;
  })
}
var arr = [1,4,1,'a','c','b','a','a']
console.log(removeDuplicates(arr)) //[1,4,'a','c','b']