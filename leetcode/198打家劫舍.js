/*
* 输入: [2,7,9,3,1]
*  输出: 12
*  分析思路：假设g[i]表示打劫到第i家时的最大收入，这些收入只能来自两个途径；
*  1：来自第i-1间房的总金额，因为i-1和i紧挨着，因此无法偷取第i间房的钱
*  2：来自第i-2间房的总金额+第i间房的金额。
*  因此最大的收入来自Math(dp[i-1],dp[i-2]+nums[i])
* */

//使用递归实现，找到状态转移方程。比如打算偷[x,...n-1]家的财物
//如果偷了x，那么只能偷[x+2...n-1]或者[x+2...n-1]一直到n-2,n-1

var rob1 = function(nums,index){
  var n = nums.length;
  if(index > n){
    return 0;
  }
  var result = 0;
  for(var i = index; i < n;i++){
    //在这里如果i+2大于n的话，rob1(nums,i+2)会直接返回result = 0。不影响结果。
    result = Math.max(result,nums[i] + rob1(nums,i+2));
  }
  return result;
}
var nums1 = [4,1,2,7,5,3,1];
console.log(rob1(nums1,0))


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