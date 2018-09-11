/*

给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */


var binaryTreePaths = function(root) {

  var result = [];
  //递归终止条件
  if(root === null){
    return result;
  }
  if(root.left === null && root.right === null){
    result.push(root.val.toString());
    return result;
  }


  //递归过程
  var leftString = binaryTreePaths(root.left);

  for(var i = 0;i < leftString.length;i++){
    result.push(root.val+"->" + leftString[i])
  }

  var rightString = binaryTreePaths(root.right);
  for(var i = 0;i < rightString.length;i++){
    result.push(root.val+"->" + rightString[i])
  }
  return result;

};

var binaryTreePaths2 = function(root){

  //要返回的是一个数组，因此肯定需要先定义一个数组
  var result = [];

  //判断二叉树是否为空
  if(root === null){
    return []
  }
  //递归终止条件，最后一个节点为叶子节点
  if(root.left === null && root.right === null){
    //如果我们不知道最后要返回什么，我们假设只有一个节点。也就是只有根节点
    //那么它应该返回的是什么。比如这里如果只有一个根节点5，那么应该返回的是[5]
    //所以我们需要返回一个数组里面的值为5
    result.push(root.val.toString())
  }

  //递归过程
  //从后往前想，最后一个得到的是数组5.但是递归后得到的结果应该是root.value -> 5
  //因此需要遍历这个数组
  var leftString = binaryTreePaths(root.left)
  for(var i = 0;i < leftString.length;i++){
    result.push(root.val.toString()+"->"+leftString[i])
  }

  var rightString = binaryTreePaths(root.right)
  for(var i = 0;i < rightString.length;i++){
    result.push(root.val.toString()+"->"+rightString[i])
  }

  //最后的返回值是一个数组[]
  return result;
}
