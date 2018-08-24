
/*
冒泡排序的时间复杂度是O(n^2)
 */
var arr = [1,3,0,9,6,11,5,4];

function quickSort(arr){

  for(var i = 0;i < arr.length;i++){
    for(var j = i+1;j < arr.length;j++){
      if(arr[j] < arr[i]){
        var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
      }
    }
  }
  return arr;
}
console.log(quickSort(arr))