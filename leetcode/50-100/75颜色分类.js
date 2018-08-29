/*
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。

示例:

输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
 */
//方法一：使用代码库中的排序函数(题目不允许)
var sortColors = function(nums) {
  return nums.sort((a,b) => a-b)
};
//方法二：使用计数排序，也就是对于小范围的数，计算他们的个数，然后替换原来的数组
//缺点是数组扫描了两遍

var sortColors1 = function(nums) {
  var arr = [0,0,0,0]; // 0 ,1,2分别代表0，1，2的个数

  //  扫描第一遍 统计长度
  for(var i = 0;i < nums.length;i++){
    arr[nums[i]]++;
  }
  // var index = 0;
  // for(var i = 0;i < arr[0];i++){
  //   nums[index++] = 0;
  // }
  // for(var i = 0;i < arr[1];i++){
  //   nums[index++] = 1;
  // }
  // for(var i = 0;i < arr[2];i++){
  //   nums[index++] = 2;
  // }
  //  扫描第二遍 ，重写当前数组
  var index = 0;
  for(var i = 0;i < arr.length;i++){
    for(var j = 0;j < arr[i];j++){
      nums[index++] = i;
    }
  }
  return nums
}
// 方法3：三路快排  找出一个基准点，对小于这个基准点和大于这个基准点进行排序
var sortColors2 = function(nums){
  var len = nums.length;
  var zero = -1;   //zero表示从[0...zero] ==0
  var two = len; //two表示从[two...nums.length-1] ==2; num =len表示一开始区间是无效的，不应该有值为2
  //这里的i必须是小于two。只需要到2的位置就不许哟啊再往下排序了
  for(var i = 0;i < two;){
    if(nums[i] === 1){
      i++;
    }else if(nums[i] === 2){
      var temp = nums[--two];
          nums[two] = nums[i];
          nums[i] = temp;//注意此时的i不需要进行++操作，仍然判断交换后的i位置的值
    }else if(nums[i] === 0){
      var temp = nums[i];
          nums[i] = nums[++zero];
          nums[zero] = temp;
          i++;
    }
  }
  return nums

}




var nums = [2,0,2,1,1,0];
console.log(sortColors2(nums))