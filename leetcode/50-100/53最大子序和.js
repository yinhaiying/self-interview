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
    //子序列右端点
    var sums  = 0;
    for(var j = i;j< nums.length;j++){
      var subArr = nums.slice(i,j+1);
      if(subArr.length>0){
        sums = sum(subArr);
        if(sums>max){
         max = sums;
        }
      }
    }
  }
  return max;
};


function sum(arr){
  var num = 0;
  for(var i = 0;i<arr.length;i++){
    num+=arr[i]
  }
  return num;
}

console.log(maxSubArray(nums))
