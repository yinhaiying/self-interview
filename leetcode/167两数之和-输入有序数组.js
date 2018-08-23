var twoSum = function(numbers, target) {
  for(var i = 0;i < numbers.length; i++){
    var index = numbers.lastIndexOf(target - numbers[i]);
    if(index > -1){
      return [].concat(i+1,index+1)
    }
  }
};
var numbers = [2,7,11,15];
var target = 9;

console.log(twoSum(numbers,target))