const findCenter0 = (edges: number[][]): number => {
  const nodeEdges = new Map<number, number>();
  for (const [node1, node2] of edges) {
    nodeEdges.set(node1, (nodeEdges.get(node1) ?? 0) + 1);
    nodeEdges.set(node2, (nodeEdges.get(node2) ?? 0) + 1);
  }
  for (const [node, edgesNumber] of nodeEdges.entries()) {
    if (edgesNumber === nodeEdges.size - 1) {
      return node;
    }
  }

  return -1;
};

const findCenter = (edges: number[][]): number => {
  if (edges[1].includes(edges[0][0])) {
    return edges[0][0];
  }
  return edges[0][1];
};
