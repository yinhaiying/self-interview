/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 *
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 给定 nums = [3,2,2,3], val = 3,

 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

 你不需要考虑数组中超出新长度后面的元素。
 */
var removeElement = function(nums, val) {
  for(var i =0;i<nums.length;i++){
    if(nums[i] === val){
      //注意：每次删除掉一个元素以后，都需要将i的值减去1
      nums.splice(i,1);
      i--;
    }
  }
  return nums.length;
};
var ms = [0,1,2,2,3,0,4,2], val = 2;
console.log(removeElement(ms,val))
