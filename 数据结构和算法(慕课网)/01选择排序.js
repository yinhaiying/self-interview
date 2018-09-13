/*
选择排序：每一次从未排序的算法中选出最大值或者最小值。
 */

function selectionSort(arr){
  var n = arr.length;

  for(var i = 0; i < n;i++){

    // 寻找[i,n)区间里的最小值
    var minIndex = i;//minIndex是当前这个范围内的最小值的位置

    for(var j = i+1;j < n;j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j; //找到最小值的位置
      }
    }
    //进行交换
    var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
  }
  return arr;
}

// var arr = [8,2,0,4,5,1,9];

console.log(selectionSort(arr))
