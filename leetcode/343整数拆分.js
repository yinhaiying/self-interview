/*
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

示例 1:

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 */

//使用递归实现，里面会出现重叠的子问题，求解多次
var integerBreak = function(n) {
  if(n === 1){
    return 1;
  }

  var res = -1;
  for(var i = 1;i < n;i++){
     res = Math.max(res,i*integerBreak(n-i),i*(n-i))
  }
  return res;
};

console.log(integerBreak(10))

//重叠子问题的解决，使用数组来解决。








//自下而上地实现
var integerBreak2 = function(n){
  // db[i]表示将数组至少分割成两部分之后得到的最大乘积
  var db = [];
  db[1] = 1;
  //一开始需要将db数组进行赋值
  for(var i = 0;i < n+1;i++){
    db[i] = -1;
  }
  for(var i = 2;i <= n;i++){
    //求解db[i]
    for(var j = 1; j <= i-1;j++){
    //尝试将i进行分割  i 分割成j + (i-j)
      db[i] = Math.max(db[i],j*(i-j),j*db[i-j])
    }
  }
  return db[n];
}
console.log(integerBreak2(10))