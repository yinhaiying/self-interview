/*
归并排序：将数组不断地一分为二，知道最后只剩下一个。这个过程的算法复杂度是O(logn)。2^n = N。因此
需要经过log2(N)次进行划分，其复杂度为O(logn)。每一次都将其进行排序，复杂度为O(N).因此最终的复杂度是
O(NlogN)
 */


function mergeSort(arr){
  var n = arr.length;

   subMergeSort(arr,0,n-1);
}

//递归使用归并排序，对arr[l...r]的范围进行排序。
function subMergeSort(arr,l,r){

}

var arr = [8,2,0,4,5,1,9];

console.log(mergeSort(arr))
