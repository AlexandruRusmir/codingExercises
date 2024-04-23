const findMinHeightTrees = (n: number, edges: number[][]): number[] => {
  if (n === 1) {
    return [0];
  }

  const adjacencyList: Map<number, number[]> = new Map();
  const degree: number[] = new Array(n).fill(0);
  for (const [u, v] of edges) {
    if (!adjacencyList.has(u)) {
      adjacencyList.set(u, []);
    }
    if (!adjacencyList.has(v)) {
      adjacencyList.set(v, []);
    }
    adjacencyList.get(u)!.push(v);
    adjacencyList.get(v)!.push(u);
    degree[u]++;
    degree[v]++;
  }

  // leaves acts as a dequeue
  const leaves: number[] = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      leaves.push(i);
    }
  }

  // Trim leaves until 2 or fewer nodes remain, so we get the 'center' of the tree
  let remainingNodes = n;
  while (remainingNodes > 2) {
    const leavesCount = leaves.length;
    remainingNodes -= leavesCount;
    for (let i = 0; i < leavesCount; i++) {
      const leaf = leaves.shift()!;
      adjacencyList.get(leaf)!.forEach((neighbor) => {
        degree[neighbor]--;
        if (degree[neighbor] === 1) {
          leaves.push(neighbor);
        }
      });
    }
  }

  return leaves;
};
