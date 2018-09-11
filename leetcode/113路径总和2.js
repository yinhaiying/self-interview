/*
给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]
 */

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

var pathSum = function(root, sum) {
  //递归终止条件
  if(root === null){
    return [];
  }
  var result = [];
  var path = [];
  if(root.left === null && root.right ===null&&root.val === sum){
    path.push(root.val);
    result.push(path)
    return result;
  }
  //递归过程

  var leftRes = pathSum(root.left,sum-root.val);//[[2]]

  for(var i = 0;i < leftRes.length;i++){
    path = [];
    path = path.concat(root.val,leftRes[i]);
    result.push(path)
  };

  var rightRes = pathSum(root.right,sum-root.val);//[[2]]
  for(var i = 0;i < rightRes.length;i++){
    path =[];
    path = path.concat(root.val,rightRes[i]);
    result.push(path);
  };

  //递归返回值
  return result;
};



var nodes = [5,4,8,11,null,13,4,7,2,null,null,5,1];

