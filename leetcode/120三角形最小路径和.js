/*
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 */

/*
分析：要建立而为数组来保存
minimus[i][j]=data[i][j]+min(minimums[i+1][j]+minimums[i+1][j+1])
 */
var minimumTotal = function(triangle) {
  var len = triangle.length;
  var minimus = new Array(len);
  for(var i = 0;i < len;i++){
    minimus[i] = [];
  }
  minimus[len-1] = triangle[len-1]

  for(var i = len-2;i>=0;i--){
    for(var j = 0;j <= i;j++){
      minimus[i][j] = Math.min(minimus[i+1][j],minimus[i+1][j+1])+triangle[i][j];
    }
  }
  return minimus[0][0]

};
var triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]

console.log(minimumTotal(triangle))

