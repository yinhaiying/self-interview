/*

给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
 */
//  方法1：
var intersection = function(nums1, nums2) {
  var res = [];
  nums1 = nums1.filter((item,index) => {
    return nums1.indexOf(item) === index;
  })
  for(var i = 0;i < nums1.length;i++){
    if(nums2.indexOf(nums1[i]) > -1){
      res.push(nums1[i])
    }
  }
  return res;
};
//方法2：使用set
var intersection2 = function(nums1, nums2) {
  var mySet = new Set();
  for(var i = 0;i < nums1.length;i++){
    mySet.add(nums1[i]);
  }
  var resultSet = new Set();
  for(var i = 0;i < nums2.length;i++){
    if(mySet.has(nums2[i])){
      resultSet.add(nums2[i])
    }
  }
  return Array.from(resultSet);
}

var nums1 = [3,2,2,3], nums2 = [2,2,3];

console.log(intersection2(nums1,nums2))