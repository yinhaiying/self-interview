

/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
*
* */

var climbStairs = function(n) {
  if (!climbStairs.cache) {
    climbStairs.cache = {};
  }
  var cache = climbStairs.cache;
  if (cache[n]) {
    return cache[n];
  }
  if (n == 1 || n == 0) {
    return 1;
  }
  return cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
};

var climbStairs = function(n) {
  //0级楼梯和1级楼梯分别有1种方法
  var s = [1,1];
  //从第二级楼梯开始，到达最后一级楼梯的位置只能是在倒数第一级(n-1)和倒数第二级(n-2)
  //因此到达最后一级楼梯的方法是s(n-1)+s(n-2)
  for(var i = 2;i < n;i++){
    s[i] = s[i-1] +s[i-2]
  }
  return s[n];

};