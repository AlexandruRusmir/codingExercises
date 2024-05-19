const maximumValueSum = (
  nums: number[],
  k: number,
  edges: number[][]
): number => {
  let maxSum = 0,
    numberOfToggles = 0,
    minSacrifice = Infinity;

  for (const num of nums) {
    const toggledValue = num ^ k;
    if (toggledValue > num) {
      maxSum += toggledValue;
      numberOfToggles++;
      minSacrifice = Math.min(minSacrifice, toggledValue - num);
    } else {
      maxSum += num;
      minSacrifice = Math.min(minSacrifice, num - toggledValue);
    }
  }
  if (numberOfToggles % 2) {
    maxSum -= minSacrifice;
  }

  return maxSum;
};

/**
At first, the problem seems to constrain us to picking nodes from the given edges and consider them pairwise. We need a few key observations to approach this problem:

1. XOR with k is like a toggle: Either the node value will increase, or it will decrease. Observe that (x ^ a) ^ a = x. We want the maximum value from these two.

2. XORing a bunch of nodes connected by a path is the same as toggling the first and last nodes:

    Consider a path a->b->c->d->e where we want to XOR each of the edges.

    If we XOR each edge in a->b, b->c, c->d, d->e, what happens? a is toggled once, b to d are flipped twice, d is toggled once.

    This means, we can effectively pick any pair of nodes in the tree and treat them as connected via a single edge, regardless of whether this edge is part of the edges list or not. The length of this path, how far they are does not matter either, as we are only concerned about the maximum sum and do not care about the number of toggles.

3. Even number of nodes in the final selection: As we see above, even though we have simplified the edge requirement, we at least one edge, ie, at least need a pair of nodes to choose at each turn. We need to find the best possible even number of such nodes.

4. One way to do this is by greedily picking either each node's value, or value ^ k - whichever is higher. And then, if we have an odd number of node toggles having a higher value, remove, or rather, sacrifice the smallest (toggled) value out of them to get the maximum possible XOR sum.
 */
