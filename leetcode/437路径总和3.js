/*
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
//在以root为根节点的二叉树中，寻找和为sum的路径，返回路径数量
var pathSum = function(root, sum) {
  if(root === null){
    return 0;
  }
  var res = findPath(root,sum);//路径中包括根节点的二叉树的数量;

  res += pathSum(root.left,sum);//去除掉root这个节点的值
  res += pathSum(root.right,sum);//去除掉root这个节点的值

  return res;

};
//findPath是在以node为根节点的二叉树中，和为num.返回这样的路径个数
function findPath(node,num){
  if(node === null){
    return 0;
  }

  var res = 0;
  if(node.val === num){
    res+=1;
  }
  res += findPath(node.left,num-node.val);
  res += findPath(node.right,num-node.val);
  return res;
}
