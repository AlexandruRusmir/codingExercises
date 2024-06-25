class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const bstToGst = (root: TreeNode | null): TreeNode | null => {
  let cumulativeSum = 0;
  const reverseInorder = (node: TreeNode | null): void => {
    if (!node) {
      return;
    }
    reverseInorder(node.right);
    cumulativeSum += node.val;
    node.val = cumulativeSum;
    reverseInorder(node.left);
  };
  reverseInorder(root);

  return root;
};

/**
Reverse In-Order Traversal:
    - By performing a reverse in-order traversal (right-root-left), we visit nodes in descending order of their values. 
        - This is because, in an in-order traversal (left-root-right), nodes are visited in ascending order, and reversing this order gives us descending order.

Cumulative Sum:
    - As we traverse the nodes in descending order, we keep a running total (cumulativeSum) of all the nodes we've visited so far. 
        - This cumulative sum is the sum of all values greater than or equal to the current node's value.
    - For each node, we add its original value to cumulativeSum and then update the node's value to this new cumulative sum.

Recursive Function:
    - we first traverse the right subtree, then update the current node's value, and finally traverse the left subtree.
 */
