const getAncestors0 = (n: number, edges: number[][]): number[][] => {
  const nodesAncestors = new Array<number[]>(n);
  for (let i = 0; i < n; i++) {
    nodesAncestors[i] = new Array<number>();
  }

  const dfs = (node: number, pastNodes: number[]): void => {
    for (const [nodeFrom, nodeTo] of edges) {
      if (nodeTo !== node) {
        continue;
      }

      nodesAncestors[node].push(nodeFrom);
      for (const pastNode of pastNodes) {
        nodesAncestors[pastNode].push(nodeFrom);
      }
      dfs(nodeFrom, [...pastNodes, node]);
    }
  };

  for (let i = 0; i < n; i++) {
    dfs(i, []);
  }

  for (let i = 0; i < nodesAncestors.length; i++) {
    nodesAncestors[i] = [...new Set(nodesAncestors[i]).values()].sort(
      (a, b) => a - b
    );
  }

  return nodesAncestors;
};

const getAncestors = (n: number, edges: number[][]) => {
  const dfs = (
    graph: number[][],
    parentNode: number,
    currentNode: number,
    nodesAncestors: number[][],
    visitedNodes: boolean[]
  ): void => {
    visitedNodes[currentNode] = true;
    for (const dest of graph[currentNode]) {
      if (visitedNodes[dest]) {
        continue;
      }
      nodesAncestors[dest].push(parentNode);
      dfs(graph, parentNode, dest, nodesAncestors, visitedNodes);
    }
  };

  const nodesAncestors = new Array<number[]>(n);
  const graph = new Array<number[]>(n);
  for (let i = 0; i < n; i++) {
    nodesAncestors[i] = new Array<number>();
    graph[i] = new Array<number>();
  }
  for (const [nodeFrom, nodeTo] of edges) {
    graph[nodeFrom].push(nodeTo);
  }

  for (let i = 0; i < n; i++) {
    dfs(graph, i, i, nodesAncestors, Array<boolean>(n).fill(false));
  }

  return nodesAncestors.map((nodeAncestors) =>
    nodeAncestors.sort((a, b) => a - b)
  );
};
