const maximumImportance0 = (n: number, roads: number[][]): number => {
  const numberOfRoadsStartingFromNode = new Array<[number, number]>(n);
  for (let i = 0; i < numberOfRoadsStartingFromNode.length; i++) {
    numberOfRoadsStartingFromNode[i] = [i, 0];
  }
  const nodeNeighbours = new Map<number, number[]>();
  for (const [node1, node2] of roads) {
    numberOfRoadsStartingFromNode[node1][1]++;
    const node1Neighbours: number[] = nodeNeighbours.get(node1) ?? [];
    node1Neighbours.push(node2);
    nodeNeighbours.set(node1, node1Neighbours);
    numberOfRoadsStartingFromNode[node2][1]++;
    const node2Neighbours: number[] = nodeNeighbours.get(node2) ?? [];
    node2Neighbours.push(node1);
    nodeNeighbours.set(node2, node2Neighbours);
  }

  numberOfRoadsStartingFromNode.sort((a, b) => a[1] - b[1]);
  let maxImportance = 0;
  for (let i = 0; i < numberOfRoadsStartingFromNode.length; i++) {
    for (const neighbourNode of nodeNeighbours.get(
      numberOfRoadsStartingFromNode[i][0]
    ) ?? []) {
      maxImportance +=
        i +
        1 +
        numberOfRoadsStartingFromNode.findIndex(
          (nodeWithNeigbours) => nodeWithNeigbours[0] === neighbourNode
        )! +
        1;
    }
  }

  return maxImportance / 2;
};

const maximumImportance = (n: number, roads: number[][]): number => {
  const degree = new Array<number>(n).fill(0);
  for (const [city1, city2] of roads) {
    degree[city1]++;
    degree[city2]++;
  }

  const citiesOrderedByDegree = new Array<number>(n);
  for (let i = 0; i < citiesOrderedByDegree.length; i++) {
    citiesOrderedByDegree[i] = i;
  }
  citiesOrderedByDegree.sort((a, b) => degree[a] - degree[b]);

  return citiesOrderedByDegree.reduce(
    (accumulatedImportance, city, importance) =>
      accumulatedImportance + (importance + 1) * degree[city],
    0
  );
};
