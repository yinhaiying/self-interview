/*
插入排序：
第i个位置，需要与前面的已经按照顺序排列好的i-1个元素进行比较，同时找准位置
 */

let arr = [1,0,3,5,4,9,7,6]
function insertSort(arr){
  let length = arr.length;
  let temp;
  for(let i = 1;i < length;i++){
    let key = arr[i];
    temp = i;
    // i需要与前面的所i-1个元素，倒着往前面进行比较
    for(let j = i-1;j >= 0;j-- ){
      //注意：前面的i-1个元素已经排列好了，如果第j个元素小于key值，那么j之前的元素肯定都小于key

      if(key >= arr[j]){
        break;
      }
      //
      if(key < arr[j]){
        arr[temp] = arr[j];
        arr[j] = key;
        temp = j;
      }
    }
  }
  return arr;

}
console.log(insertSort(arr))