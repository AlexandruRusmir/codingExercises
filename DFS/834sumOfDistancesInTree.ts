const sumOfDistancesInTree = (n: number, edges: number[][]): number[] => {
  const adjacencyList: number[][] = new Array(n).fill(null).map(() => []);
  const numberOfNodesInSubtree = new Array(n).fill(0);
  const result = new Array(n).fill(0);

  for (const [u, v] of edges) {
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  }

  const preorder = (current: number, parent: number) => {
    numberOfNodesInSubtree[current] = 1;
    for (const child of adjacencyList[current]) {
      if (child === parent) {
        continue;
      }
      preorder(child, current);
      numberOfNodesInSubtree[current] += numberOfNodesInSubtree[child];
      result[current] += result[child] + numberOfNodesInSubtree[child];
    }
  };

  const postorder = (current: number, parent: number) => {
    for (const child of adjacencyList[current]) {
      if (child === parent) {
        continue;
      }
      result[child] =
        result[current] -
        numberOfNodesInSubtree[child] +
        n -
        numberOfNodesInSubtree[child];
      postorder(child, current);
    }
  };

  preorder(0, -1);
  postorder(0, -1);

  return result;
};

/**
 * The solution employs a two-pass approach using depth-first search (DFS) to efficiently calculate the sum of distances from each node to all other nodes in the tree. This approach utilizes a combination of subtree properties and clever redistribution of results from the tree's root to all nodes. Let's break down the concepts and the code:

### 1. Representation and Initialization
The tree is represented as an adjacency list, which is a common way to represent graphs. Each node has a list of its neighbors:
```typescript
const adjacencyList: number[][] = new Array(n).fill(null).map(() => []);
```
This setup is followed by initialization of arrays to hold the number of nodes in each subtree (`numberOfNodesInSubtree`) and the result array (`result`) to store the sum of distances for each node:
```typescript
const numberOfNodesInSubtree = new Array(n).fill(0);
const result = new Array(n).fill(0);
```

### 2. Building the Adjacency List
The edges array is processed to build a two-way connection between nodes (since the tree is undirected):
```typescript
for (const [u, v] of edges) {
  adjacencyList[u].push(v);
  adjacencyList[v].push(u);
}
```

### 3. Preorder Traversal to Compute Subtree Properties
The `preorder` function computes two things for each node:
- The size of the subtree rooted at this node (`numberOfNodesInSubtree`).
- The sum of distances from this node to all other nodes within its subtree (`result`).

This is achieved by traversing the tree starting from an arbitrary root (usually node `0`):
```typescript
preorder(0, -1);
```
Inside `preorder`, we recursively visit each child (ignoring the parent to avoid cycling back), compute its subtree properties, and use these to update the current node's properties:
```typescript
numberOfNodesInSubtree[current] = 1;
for (const child of adjacencyList[current]) {
  if (child === parent) continue;
  preorder(child, current);
  numberOfNodesInSubtree[current] += numberOfNodesInSubtree[child];
  result[current] += result[child] + numberOfNodesInSubtree[child];
}
```
- `numberOfNodesInSubtree[current] += numberOfNodesInSubtree[child]` updates the size of the current subtree.
- `result[current] += result[child] + numberOfNodesInSubtree[child]` accumulates the distances: the `result[child]` part adds all the subtree distances previously calculated for `child`, and `numberOfNodesInSubtree[child]` adds the direct distances from `current` to all nodes in the `child`'s subtree.

### 4. Postorder Traversal to Distribute Results
After establishing the initial results based on the subtree rooted at node `0`, we need to adjust the results for nodes based on their positions relative to the rest of the tree:
```typescript
postorder(0, -1);
```
Here, we modify the results calculated for the parent node to apply correctly to each child node:
```typescript
result[child] = result[current] - numberOfNodesInSubtree[child] + n - numberOfNodesInSubtree[child];
```
This line rebalances the distances:
- `result[current] - numberOfNodesInSubtree[child]` removes the contribution of the subtree distances of `child` that were included in `current`.
- `+ n - numberOfNodesInSubtree[child]` adds the distances for the nodes outside of `child`'s subtree to `child`.
Formulas
The critical update step in dfs2:
    - result[child] = result[current] - numberOfNodesInSubtree[child] + n - numberOfNodesInSubtree[child];
        - n - 2 * numberOfNodesInSubtree[child] corrects the distance counts by considering:
            - +n: Every node, including those outside the subtree rooted at child, is initially considered one step further when moving from current to child.
            - -2 * numberOfNodesInSubtree[child]: Corrects for the overcounted distances within the subtree rooted at child (as they are actually one step closer).

### 5. Return the Result
Finally, the `result` array contains the sum of distances from each node to every other node.

This solution leverages subtree properties and a shift in perspective between parent and child nodes to compute the desired distances efficiently, avoiding the naive O(n^2) complexity that would arise from calculating distances independently for each node.
 */
