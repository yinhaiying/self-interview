/**
 * @param {number[]} nums
 * @return {number}
 *
 * 给定数组 nums = [1,1,2],
 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 你不需要考虑数组中超出新长度后面的元素。
 */
var removeDuplicates = function(nums) {
  //先获取所有排序后的数组
  var mySet = new Set(nums);
  var arr = Array.from(mySet);
  //再把排序后的数组的值赋值给原来的数组
  arr.forEach((item,index) => {
    nums[index] = item;
  })
  console.log(nums)
  return arr.length;
};
var ms = [1,1,2];
console.log(removeDuplicates(ms))