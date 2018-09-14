


/*
首先知道它是O(nlogn)的算法，因此肯定是一分为二进行递归
 */

function quickSort(arr){

  if(arr.length <= 1){
    return arr;
  }

  var item = arr[0];
  var left = [];
  var right = [];

  for(var i = 1;i < arr.length;i++){
    if(arr[i] < item){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }

  return [].concat(quickSort(left),item,quickSort(right))

}

var arr = [ 1,3,2,8,4,7,5,6];
console.log(quickSort(arr))
