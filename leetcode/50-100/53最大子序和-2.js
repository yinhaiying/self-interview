/**
 * @param {number[]} nums
 * @return {number}
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
var maxSubArray = function (nums) {
  var max = nums[0];
  var sum = 0;
  var len = nums.length;
  if (len == 0) {
    return 0;
  }
  for (var i = 0; i < len; i++) {
    var item = nums[i];
    //如果和为负，下一个为正，那么要将前面的舍弃掉。
    if (sum < 0 && item >= 0) {
      sum = item;
      max = sum;
    } else {
      //其他情况下都是无法进行判断的。直接相加即可。
      sum += item;
    }
    //接下来判断最大值的情况
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

var nums = [-1, -2];
console.log(maxSubArray(nums))
