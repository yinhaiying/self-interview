/**
 * @param {number[]} nums
 * @return {number}
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
var maxSubArray = function(nums) {
  var current = nums[0];
  var sum = 0;
  var len = nums.length;
  if(nums.length===1){
    return nums[0]
  }
  //如果全是负数，那么应该返回最大的负数。如果最后的和为正，那么就使用扫描法

  //扫描法
  for (var i = 0; i < len; i++) {
    //如果当前的数小于0，那么它对于求和会带来消极影响，因此需要把它抛弃掉
    if(current < 0){
      current = nums[i]
    }else{
      current += nums[i];
    }
  }
  return sum;

};

var nums = [-1,-2];
console.log(maxSubArray(nums))
