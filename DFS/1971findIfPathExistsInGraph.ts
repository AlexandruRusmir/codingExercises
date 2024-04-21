const validPath = (
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean => {
  const graph = new Map<number, Set<number>>();
  for (const edge of edges) {
    graph.set(edge[0], (graph.get(edge[0]) ?? new Set<number>()).add(edge[1]));
    graph.set(edge[1], (graph.get(edge[1]) ?? new Set<number>()).add(edge[0]));
  }

  const dfs = (node: number, visited: Set<number>): boolean => {
    if (node === destination) {
      return true;
    }
    visited.add(node);
    for (const neighbour of (graph.get(node) ?? new Set<number>()).values()) {
      if (visited.has(neighbour)) {
        continue;
      }
      if (!dfs(neighbour, visited)) {
        continue;
      }
      return true;
    }

    return false;
  };

  const visited = new Set<number>();
  return dfs(source, visited);
};
