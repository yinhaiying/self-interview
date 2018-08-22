/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。你可以假设数组中无重复元素。
 *
 *
 * 输入: [1,3,5,6], 5
   输出: 2
 */
var searchInsert = function(nums, target) {
  var index = nums.indexOf(target);
  if(index > -1){
    return index;
  }else{
    for(var i = 0;i<nums.length;i++){
      if(nums[i] > target){
        return i;
      }else if(nums[nums.length-1] < target){
        return nums.length;
      }
      if( nums[i]<target && target < nums[i+1] ){
        return i+1;
      }
    }
  }
};
var nums = [1,3,5,6],target = 7;
console.log(searchInsert(nums,target))