/*

翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */



  function TreeNode(val) {

      this.val = val;

      this.left = null;

      this.right = null
  }



/*
分析思路：所有二叉树的问题都是使用递归来解决，对于递归问题需要考虑两个条件：
    递归终止条件和递归过程：
    二叉树的递归终止条件就是根节点为空。(递归会把每一个节点当做根节点)
 */




var invertTree = function(root) {

    //递归终止条件
    if(root == null){
      return root;
    }

    //递归的过程
    var left = root.left;
    var right = root.right;

    //进行翻转，将根节点的左子树等于右子树
    root.left = invertTree(right);
    root.right = invertTree(left);

    return root;

};
