

var arr = [4,2,6,5,3,9];

//
// function partition(items, left, right) {
//   //选择一个值作为基准点，可以选择任意值，这里选择中间值
//   var pivot   = items[Math.floor((right + left) / 2)],// pivot是基准值
//     i       = left,//i是左指针
//     j       = right;//j是右指针
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j);
//       i++;
//       j--;
//     }
//   }
//   return i;
// }


// function partition2(arr,left,right){
//   //找一个基准点。这里选择中间位置。因为习惯使用中间进行判断。感觉容易理解一些
//   var  pivot = arr[Math.floor((left+right)/2)];
//   var i = left; //i表示左指针。用来代表小于pivot的值的位置
//   var j = right; //用来表示大于pivot的值的位置
//
//   while(i <= j){
//     while(arr[i] < pivot){
//       i++;
//     }
//
//     while(arr[j] > pivot){
//       j--;
//     }
//     //如果i 和j不在基准位置。表明左边出现了大于pivot的数，右边出现了小于pivot的数。
//     //比如[4,2,1]左边4大于2，右边1小于2了。这时候我们就需要将4,和 2进行交换。交换完成
//     //之后还要进行循环比较
//     if(i <= j){
//       var item = arr[i];
//       arr[i] = arr[j];
//       arr[j] = item;
//       //交换顺序以后要i++,j--继续进行比较
//       i++;
//       j--;
//     }
//   }
//   return i;
// }

function quickSort(arr,left,right){
    if(left >= right){
      return arr;
    }
    var index = partition2(arr,left,right);
    //递归地分割左序列
    if(left < index - 1){
      quickSort(arr,left,index-1)
    }
    //递归地分割右序列
    if(index < right){
      quickSort(arr,index,right)
    }
    return arr;
}


function partition2(arr,left,right){
  //找一个基准点。这里选择中间位置。因为习惯使用中间进行判断。感觉容易理解一些
  var  pivot = arr[Math.floor((left+right)/2)];
  var i = left; //i表示左指针。用来代表小于pivot的值的位置
  var j = right; //用来表示大于pivot的值的位置

  while(i <= j){
    while(arr[i] < pivot){
      i++;
    }
    while(arr[j] > pivot){
      j--;
    }
    //如果i 和j不在基准位置。表明左边出现了大于pivot的数，右边出现了小于pivot的数。
    //比如[4,2,1]左边4大于2，右边1小于2了。这时候我们就需要将4,和 2进行交换。交换完成
    //之后还要进行循环比较
    if(i <= j){
      var item = arr[i];
      arr[i] = arr[j];
      arr[j] = item;
      //交换顺序以后要i++,j--继续进行比较
      i++;
      j--;
    }
  }
  return i;
}

var arr = [4, 2, 6, 5, 3, 9];
console.log( quickSort(arr,0,5))
