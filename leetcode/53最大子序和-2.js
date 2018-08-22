/**
 * @param {number[]} nums
 * @return {number}
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
var maxSubArray = function(nums) {
  var max = nums[0];
  var sum = 0;
  var len = nums.length;

  for (var i = 0; i < len; i++) {
    var item = nums[i]; /*         针对的情况 [-3,-2,1,2,2,0,1,0]*/
    if (sum < 0 && item >= 0) {
      //如果当前的和为负数，而下一个值为正数，那么前面的值一定要舍弃掉。只有正数才会最大、
      sum = item;
      max = sum;
    } else {
      //其他情况下都无法确定和一定是最大 sum 为正，下一个为负,下下一个后面的值不确定。因此必须相加；
      //sum 为负 下一个也为负 同样不确定
      //sum为正，下一个也为正 必须相加
      sum += item;
    }
    if (sum > max) {
      max = sum;
    } else if (item > max) {
      max = item;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

var nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums))
