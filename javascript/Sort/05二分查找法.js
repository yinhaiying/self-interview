

function binarySearch(arr,target){
  let left = 0,
      right = arr.length-1, // 在数组[left,right]范围内查找target
      middle;
  while(left <= right){  //当left = right时，区间[left,right]依然是有效的
      middle = Math.floor((left+right)/2);
      if(arr[middle] === target){
        return middle;
      }
      if(target > arr[middle]){
        left = middle +1;//target在[middle+1,right]区间中
      }
      if(target < arr[middle]){
        right = middle -1;
      }
  }
  return -1;
}

let arr = [1,3,5,7,9,11,13,15];
console.log(binarySearch(arr,9))