



let arr = [ 0,2,1,6,4,5]
function insertSort(arr){
  let key;
  for(let i = 0;i < arr.length;i++){
    //key是每一次从乱序中取出的比较元素的值，比较元素的位置可能发生变化，但是值始终不变的
    key = arr[i];
    temp = i;// temp 是比较元素的位置
    //需要将比较元素与前面有序区的每一个元素进行比较
    for(let j = i-1;j >= 0;j--){
      //如果比较元素直接大于有序区的最后一个元素，那么不需要交换顺序
      if(key > arr[j]){
        break;
      }
      //如果比较元素小于有序区元素，需要交换顺序
      if(key <= arr[j]){
        arr[temp] = arr[j];  //  arr[temp]是比较元素在乱序区的位置的值
        arr[j] = key;  //  有序区中的最后一个位置的值变化为比较元素的值
        temp = j;  //  比较元素的位置发生变化
      }
    }
  }
  return arr
}
console.log(insertSort(arr))