/*
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。
如果不存在符合条件的连续子数组，返回 0。

示例:

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
 */

//方法1：
var minSubArrayLen = function(s, nums) {
  var arr =[], //arr用来保存连续子串
  sum = 0, //sum表示和
  minLen = 0;  //minLen 表示最小长度
  var item;
  for(var i = 0;i < nums.length;i++){
    item = nums[i];
    sum +=item;
    arr.push(item)
    while(sum >= s){
      if(minLen!==0){
        minLen = arr.length < minLen ?arr.length:minLen;
      }else{
        minLen = arr.length;
      }
      sum = sum - arr.splice(0,1);
    }
  }
  return minLen;
};

//方法2：双索引滑动窗口
var minSubArrayLen2 = function(s, nums) {
  var l = 0, r = -1; //nums[l..r]为我们的滑动窗口。初始窗口中不应该有值。
  var sum = 0;
  var res = nums.length +1; //最小的长度值，初始时取不到这个值。

  while(l<nums.length){
    if(r+1 < nums.length&&sum < s){
      r++;
      sum+=nums[r];
    }else{
      sum -=nums[l];
      l++;
    }
    if(sum >= s){
      res = Math.min(res,r-l+1);
    }

  }
  if(res === nums.length+1){
    return 0;
  }
  return res;

}
var nums = [5,1,3,5,10,7,4,9,2,8];
var s = 15;
console.log(minSubArrayLen2(s,nums))