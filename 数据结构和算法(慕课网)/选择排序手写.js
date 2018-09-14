

function selectionSort(arr){
  var len = arr.length;
  for(var i = 0;i < len;i++){
    //查找[i,len)最小的值的位置
    var minIndex = i;
    for(var j = i;j < len;j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    //将最小值的位置与i的位置进行交换
    var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
  }
  return arr;
}

var arr = [0,4,2,5,6,3];
console.log(selectionSort(arr))
