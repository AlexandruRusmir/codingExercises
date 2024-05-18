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

const distributeCoins = (root: TreeNode | null): number => {
  let numberOfMoves = 0;

  const dfs = (node: TreeNode | null): number => {
    if (!node) {
      return 0;
    }

    const leftExcess = dfs(node.left);
    const rightExcess = dfs(node.right);

    numberOfMoves += Math.abs(leftExcess) + Math.abs(rightExcess);

    return leftExcess + rightExcess + node.val - 1;
  };

  dfs(root);
  return numberOfMoves;
};

/**
### Key Concepts:

1. **Excess Coins**: This solution revolves around calculating the 'excess' of coins at each node. Excess is defined as how many coins a node has over or under one (since each node should ideally have one coin). Positive excess indicates surplus coins, while negative excess indicates a deficiency.

2. **Movement of Coins**: Moving coins between nodes involves transferring excess coins from one node to another. This action can only occur between directly connected nodes (i.e., parent and child).

### Implementation Details:

1. **TreeNode Class**: Each node in the tree is represented as an instance of the `TreeNode` class, which stores the number of coins (`val`) and references to its left and right child nodes.

2. **DistributeCoins Method**:
   - `self.moves` is used to count the total number of moves required across the entire tree.
   - `dfs(node)` is a recursive function that calculates and returns the excess coins for each node.

3. **Depth-First Search (DFS) Function**:
   - **Base Case**: If the current node is `None`, return an excess of 0. This means there's nothing to do at a non-existent node.
   - **Recursive Step**: Recursively call `dfs()` for both the left and right children of the current node. The results are stored in `left_excess` and `right_excess`, respectively, representing the net coin excess (or deficit) of each subtree.
   - **Adjusting Moves**: For any node, the total moves needed to balance its left and right children's excesses are `abs(left_excess) + abs(right_excess)`. This is because each unit of excess (positive or negative) must be moved to or from this node to balance the coins, and the absolute value is used because moving coins addresses the magnitude, regardless of the direction.
   - **Returning Excess**: After accounting for the moves, the function returns the excess at the current node. This is calculated as `node.val + left_excess + right_excess - 1`. The subtraction of 1 accounts for the fact that the node itself should ideally hold one coin, so any remaining coins (positive or negative) are the excess that needs to be balanced with its parent.
 */
