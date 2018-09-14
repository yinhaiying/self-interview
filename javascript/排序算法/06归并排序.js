/*
归并排序的思想就是把两个有序数组不断地递归成一个，最终得到一个有序数组
 */

var arr = [ 1,4,2,7,5,6,9,11];

function mergeSort(arr){
  var len = arr.length;
  if(len <= 1){
    return arr;
  }
  var middle = Math.floor(len/2);
  var left = arr.slice(0,middle);
  var right = arr.slice(middle,len);
  function merge(arr1,arr2){
    var res = [];//空的数组用来保存合并后的数组
    var i = 0;//i表示数组arr1中的位置
    var j = 0;//j表示数组arr2的位置
    while(i < arr1.length&& j<arr2.length){
      if(arr1[i] <= arr2[j]){
        res.push(arr1[i]);
        i++;
      }else if(arr1[i] > arr2[j]){
        res.push(arr2[j]);
        j++;
      }
    }
    while(i >= arr1.length){
      res = res.concat(arr2.slice(j,arr2.length))
      break;
    }
    while(j >= arr2.length){
      res = res.concat(arr1.slice(i,arr1.length));
      break;
    }
    return res;
  }
  return merge(mergeSort(left),mergeSort(right));

}

console.log(mergeSort(arr))




