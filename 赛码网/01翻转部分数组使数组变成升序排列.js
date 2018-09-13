/*
给定一个长度为n的整数数组a，元素均不相同，问数组是否存在这样一个片段，只将该片段翻转就可以使整个数组升序排列。其中数组片段[l,r]表示序列a[l], a[l+1], ..., a[r]。原始数组为

a[1], a[2], ..., a[l-2], a[l-1], a[l], a[l+1], ..., a[r-1], a[r], a[r+1], a[r+2], ..., a[n-1], a[n]，

将片段[l,r]反序后的数组是

a[1], a[2], ..., a[l-2], a[l-1], a[r], a[r-1], ..., a[l+1], a[l], a[r+1], a[r+2], ..., a[n-1], a[n]。
 */

/*
思路：先找出非升序排列的片段，也就是找出start和end值
start的值是数组开始出现降序的值
end的值是数组反过来开始出现升序的值
比如：[1,2,9,4,3,10]中start的值是9，end的值是3.
 */

function reverse(n,arr){
  var init = arr;
  if(n === 2 && arr[0] > arr[1]){
    return 'yes'
  }
  var start,end;
  //从前往后遍历找到start值
  for(var i = 1;i < n;i++){
    if(parseInt(arr[i]) < parseInt(arr[i-1])){
      start = i-1;
      break;
    }
  }
  //从后往前遍历找到end值
  for(var i = n-1;i >=0;i--){
    if(parseInt(arr[i])< parseInt(arr[i-1])){
      end = i;
      break;
    }
  }
   debugger
  //end处的值是不是比start-1的值大，start的值是不是比end+1小
  //这里需要注意越界问题，比如start=0 那么start-1就为负了。如果end为0 end-1也为负了
  if((parseInt(arr[end]) < parseInt(arr[start-1]) && start>=1) || (parseInt(arr[start]) > parseInt(arr[end+1])) ||(start ===end)){
  return 'no'
  }

  //翻转后得到新的数组
  var slice = arr.slice(start,end+1).reverse();
  //判断新的数组是不是严格递减,只需要判断这一部分数组。因为前面的数组和后面的数组在遍历时已经判断过了
  var isInc = true;
  for(var i = 1;i < slice.length;i++){
    if(parseInt(slice[i]) < parseInt(slice[i-1])){
      isInc = false;
    }
  }
  return isInc?"yes":"no"

}

var num = 5;
// var arr = [10,12,17,19,20,21,22,24,25,26,27,28,29,30,32,37,42,43,47,48,50,51,52,56,87,86,81,79,74,71,69,67,66,65,60,59,57,89,91,92,94,96,97,98,99,100]
var arr = [75531609,242194958,437796493,433259361,942142185]
console.log(reverse(num,arr))
