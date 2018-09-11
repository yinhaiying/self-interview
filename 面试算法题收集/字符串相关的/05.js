
/*

 */

var arr = [1,2,0,-1,4];

function fn(arr,k){
  arr.sort(function(a,b){return a-b}) //进行排序

  for(var i = 0;i < arr.length;i++){
    var sum = 0;
    for(var j = i+1;j < arr.length;j++){
      sum += arr[j];
      if(sum === k){
        return true;
      }
      if(sum > k){
        return false;
      }
    }
  }
  return false;
}


// console.log(fn(arr,5))
arr.shift()
console.log(arr)

