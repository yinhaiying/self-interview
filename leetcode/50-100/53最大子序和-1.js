/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
// 方法1：暴力求解
var nums = [-2,1,-3,4,-1,2,1,-5,4];
var maxSubArray = function(nums) {

  var max = nums[0]
  //子序列左端点
  for(var i=0;i<nums.length;i++){
    //sums和必须放在里面，每一次都是重新计算和
    var sums  = 0;
    //子序列右端点
    for(var j = i;j< nums.length;j++){
      //实际上我们不需要得到具体的子序列的值
      sums += nums[j];
      if(sums>max){
        max = sums;
      }
    }
  }
  return max;
};


console.log(maxSubArray(nums))
