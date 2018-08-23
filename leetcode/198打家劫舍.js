/*
* 输入: [2,7,9,3,1]
*  输出: 12
*  分析思路：假设g[i]表示打劫到第i家时的最大收入，这些收入只能来自两个途径；
*  1：来自第i-1间房的总金额，因为i-1和i紧挨着，因此无法偷取第i间房的钱
*  2：来自第i-2间房的总金额+第i间房的金额。
*  因此最大的收入来自Math(dp[i-1],dp[i-2]+nums[i])
* */
var rob = function(nums) {
  if(nums.length < 1){
    return nums[0] ? nums[0]:0;
  }else if(nums.length === 2){
    return Math.max(nums[0],nums[1])
  }
  dp = [nums[0],Math.max(nums[0],nums[1])];
  for(var i = 2;i < nums.length;i++){
    dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
  }
  return dp[dp.length-1]
};
var nums = [4,1,2,7,5,3,1];
console.log(rob(nums))