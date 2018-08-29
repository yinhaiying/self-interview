var twoSum = function(numbers, target) {
  for(var i = 0;i < numbers.length; i++){
    var index = numbers.lastIndexOf(target - numbers[i]);
    if(index > -1){
      return [].concat(i+1,index+1)
    }
  }
};

//对撞指针方法：设定两个指针，这两个指针在向中间对撞。
var twoSum2 = function(numbers,target){
  var l = 0,
      r = numbers.length - 1;//定义两个指针
  while(l < r){
    //如果l=r的话，就只剩下一个元素了，因此不可以相等
    if(numbers[l] + numbers[r] === target){
      return [l+1,r+1];
    }else if(numbers[l] + numbers[r] < target){
      l++;
    }else if(numbers[l] + numbers[r] > target) {
      r--;
    }
  }

}
var numbers = [2,7,11,15];
var target = 9;

console.log(twoSum2(numbers,target))