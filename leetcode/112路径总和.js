/*

给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
 */

// var hasPathSum = function(root, sum) {
//  /*
//  错误的递归终止条件：root为null时它不一定是叶子节点
//   if(root === null){
//     return sum = 0;
//   }
//   */
//   //先判断二叉树是否为空
//   if(root == null){
//     return false;
//   }
//   //递归终止条件
//   //在这里直接去判断root的左子树和右子树表明默认了root根节点不为空
//   //但是谁能保证传入的二叉树不是一个空的二叉树。因此还需要判断二叉树是否为空
//   if(root.left === null && root.right === null){
//     return  root.val == sum;
//   }
//   var val = root.val;
//   var left = root.left;
//   var right = root.right;
//
//   if(hasPathSum(left,sum-val)){
//     return true;
//   }
//   if(hasPathSum(right,sum-val)){
//     return true;
//   }
//   return false;
// };

function hasPathSum(root,sum){

  if(root === null){
    return false;
  }
  if(root.left === null &&root.right === null &&root.val === sum){
    return true;
  }

  if(hasPathSum(root.left,sum-root.val)){
    return true;
  }

  if(hasPathSum(root.right,sum-root.val)){
    return true;
  }
  return false;
}
