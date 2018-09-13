/*
给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
 */
var isSameTree = function(p, q) {
  //二叉树问题首先需要判断是否存在空二叉树
  if(p === null && q!==null){
    return false;
  }
  if(p!==null && q===null){
    return false;
  }

  //递归终止条件
  if(p === null &&q === null){
    return true;
  }

  //递归过程
  //先判断节点的值是否相同。如果值不相同就肯定不相同。不需要再往下判断左右结构了
  if(p.val !==q.val){
    return false;
  }

  if(isSameTree(p.left,q.left) && isSameTree(p.right,q.right)){
    return true;
  }

  return false;

};
