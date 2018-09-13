/*
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(p!==null && q!==null){
    if(root ===null){
      return null;
    }
    // p, q都在左子树的位置,那么祖先节点肯定在root的左子树上
    if(p.val < root.val &&q.val < root.val){
      return lowestCommonAncestor(root.left,p,q);
    }
    // p, q都在右子树的位置,那么祖先节点肯定在root的右子树上
    if(p.val > root.val &&q.val > root.val){
      return lowestCommonAncestor(root.right,p,q);
    }
    //如果p,q在root的左右两侧，那么root肯定是最近的公共节点
    return root;

  }
};
