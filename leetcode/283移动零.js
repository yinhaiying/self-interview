/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */
var moveZeroes = function(nums) {
  var index = 0;  // index的意义是[0,index)的元素都是非0元素
  for(var i = 0;i < nums.length;i++){
    if(nums[i] !== 0){
      nums[index] = nums[i];
      index++ ;
    }
  }
  //将nums剩余位置都设置为0
  for(var i = index;i<nums.length;i++){
    nums[i] = 0;
  }
  return nums
};

//进一步优化，减少剩余为0的元素的for循环
var moveZeroes2 = function(nums) {
  var index = 0;
  var temp;
  for(var i = 0;i < nums.length;i++){
    if(nums[i]){
      temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      index++;
    }
  }
  return nums;
}



var nums = [0,1,0,3,12];
console.log(moveZeroes2(nums))