/*
选择排序：每一次从待排序的数据元素中，选出最大(或者最小）的元素放在序列的终点位置(起点位置)
直到全部待排序的数据元素排完。
思路：
 */

let arr = [8,3,0,14,7,5,9,11,1,111,43,56];

function selectSort(arr){
  var len = arr.length;
  for (let i = 0;i < len;i++) {
    //定义初始的最大值的位置，一般设置为第一个位置
    let maxIndex = 0;

    //第二次的终点位置应该是除去上一步已经排完序的位置，因此终点是len-i
    for(let j = 1;j < len - i ;j++ ){
      if(arr[maxIndex] < arr[j]){
        maxIndex = j;
      }
    }

    //将最大的元素与最后一个元素进行交换
    let temp = arr[len-i-1];
        arr[len-i-1] = arr[maxIndex];
        arr[maxIndex] = temp;
  }
  return arr
}

 console.log(selectSort(arr))


