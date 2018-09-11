

function insertSort(arr){
  var len = arr.length;


  //这里的i是排序时，需要进行插入的元素。由于第一个位置不需要发生变化。因此直接从i = 1开始。
  for(var i = 1;i < len;i++){

    //寻找arr[i]合适的插入位置。需要插入的位置是在[0,i)
    for(var j = i;j > 0;j--){

      //位置比它小就进行交换
      if(arr[j] < arr[j-1]){
        var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
      }else{
        break;
      }

    }




  }

}

var arr = [8,2,0,4,5,1,9];

console.log(selectionSort(arr))
