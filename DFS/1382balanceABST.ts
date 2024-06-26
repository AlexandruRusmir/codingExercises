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

const balanceBST = (root: TreeNode | null): TreeNode | null => {
  const inorder = (
    node: TreeNode | null,
    sortedNodesValues: number[]
  ): void => {
    if (!node) {
      return;
    }
    inorder(node.left, sortedNodesValues);
    sortedNodesValues.push(node.val);
    inorder(node.right, sortedNodesValues);
  };

  const buildBalancedBST = (
    sortedNodesValues: number[],
    start: number,
    end: number
  ): TreeNode | null => {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(
      sortedNodesValues[mid],
      buildBalancedBST(sortedNodesValues, start, mid - 1),
      buildBalancedBST(sortedNodesValues, mid + 1, end)
    );

    return node;
  };

  const sortedNodesValues: number[] = [];
  inorder(root, sortedNodesValues);

  return buildBalancedBST(sortedNodesValues, 0, sortedNodesValues.length - 1);
};
