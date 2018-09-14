


function insertSort(arr){
  var len = arr.length;
  for(var i = 1; i < len;i++){
    //将每一个值与(0,i-1]的值进行比较，如果比他小就直接插入进去
    for(var j = i;j > 0;j--){
      if(arr[j] > arr[j-1]){
        break;
      }
      var temp = arr[i];
          arr[i] = arr[j-1];
          arr[j-1] = temp;
    }
  }
  return arr;
}

var arr = [ 0,3,1,6,4,5];
console.log(insertSort(arr))
