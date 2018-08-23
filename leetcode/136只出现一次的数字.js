

var singleNumber = function(nums) {
  nums = nums.filter((item,index) => {
    return nums.indexOf(item) === nums.lastIndexOf(item)
  })
  return nums[0]
};
var nums = [0,1,0,1,0,1,99];
console.log(singleNumber(nums))