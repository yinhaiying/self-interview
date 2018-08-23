
var majorityElement = function(nums) {
  var len = nums.length/2;
  var obj = {}
  for(var i = 0;i < nums.length;i++){
    if(!obj[nums[i]]){
      obj[nums[i]] = [];
    }
    obj[nums[i]].push(nums[i])
  }
  var resultArr = Object.values(obj).filter((item) => {
   return item.length > len
  })
  return resultArr[0]

};
var nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))