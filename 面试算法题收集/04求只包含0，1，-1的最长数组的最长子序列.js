var arr = [1,-1,1,-1,1,-1,1,-1]; //8
var arr2 = [1,1,-1,1,1,-1,-1];  //6
var arr3 =[0,-1,0,1,-1,0,1,-1,-1,1]//8


//分析思路，一旦两个位置出的和相同，说明这两个位置之间的和为0
//比如初始位置dp[0] = 0  在i处dp[i]的和也为0  那么0 和i 之间的和一定为0。
//值相等的可能有很多个，找出间隔最大的就是正确答案。如果直接为0，那么所有的就是最长。

function longestArr(arr){
  var dp = [arr[0]];
  var len = 0;
  var obj = {};
  obj[dp[0]] = [];
  obj[dp[0]].push(0);
 for(var i = 1;i < arr.length;i++){
   dp[i] = dp[i-1]+arr[i];
   if(!obj[dp[i]]){
     obj[dp[i]] =[]
   }
   if(dp[i] === 0){
     len = i+1;
   }
   obj[dp[i]].push(i)
 }
 var result = [];
 for(var attr in obj){
   result.push(obj[attr][obj[attr].length-1]-obj[attr][0])
 }

 var res = Math.max(...result)
 len = res > len?res:len;
 return len;
}
console.log(longestArr(arr3))