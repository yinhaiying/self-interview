/*
快速排序：将数组分割成两个部分来进行排序
 */
var arr = [1,3,0,9,6,11,5,4];

function quickSort(arr){
  if(arr.length <= 1 ){
    return arr
  }
  var left = [];
  var right = [];
  var midValue = arr.splice(Math.floor(arr.length/2),1)[0]
  for(var i = 0;i < arr.length;i++){
    if(arr[i] < midValue){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(midValue,quickSort(left))

}