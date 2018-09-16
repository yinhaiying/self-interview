

/*
堆排序的核心是实现最大堆，也就是找出每一个堆的最大值
 */

function heap(arr,i,length){

    var left = 2*i+1;
    var right = 2*i+2;
    var maxIndex = i;//maxIndex表示最大值的序号，一开始默认为堆顶

    if(left < length && arr[left] > arr[i]){
      maxIndex = left;
    }
    if(right < length && arr[right] > arr[maxIndex]){
      maxIndex = right;
    }

    if(maxIndex !== i){
      var temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }

}


function heapSort(arr){
  var length = arr.length;
  while(length > 1){
    var size = Math.floor(length/2);
    for(var i = size-1;i >=0; i--){
      heap(arr,i,length);
    }
    //把最大的放到最后去，然后剔除掉这个最大的，再进行排序
    var temp = arr[0];
    arr[0] = arr[length-1];
    arr[length-1] = temp;
    length--;
  }

  return arr;
}
var arr = [1,44,8,222,90,86,45];

console.log(heapSort(arr))
