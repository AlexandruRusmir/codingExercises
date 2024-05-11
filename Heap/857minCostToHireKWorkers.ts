import { MaxHeap } from "../../exercises/dataStructures/maxHeap";

const mincostToHireWorkers = (
  quality: number[],
  wage: number[],
  k: number
): number => {
  const workers = quality.map((q, i) => ({ ratio: wage[i] / q, q }));
  workers.sort((a, b) => a.ratio - b.ratio);

  const maxHeap = new MaxHeap();
  let qualitySum = 0;

  for (let i = 0; i < k; i++) {
    maxHeap.push(workers[i].q);
    qualitySum += workers[i].q;
  }

  let res = workers[k - 1].ratio * qualitySum;

  for (let i = k; i < workers.length; i++) {
    if (maxHeap.peek() > workers[i].q) {
      qualitySum += workers[i].q - maxHeap.pop();
      maxHeap.push(workers[i].q);
    }
    const cost = workers[i].ratio * qualitySum;
    res = Math.min(res, cost);
  }

  return res;
};

const quality = [10, 20, 5];
const wage = [70, 50, 30];
const k = 2;
console.log(mincostToHireWorkers(quality, wage, k));

/**
The problem at hand requires us to find the minimum cost to hire `k` workers out of a given set, with the constraint that every worker has a minimum wage proportional to their quality (i.e., wage-to-quality ratio). The challenge is to select `k` workers such that their combined hiring cost, determined by the worker with the highest wage-to-quality ratio among the selected, multiplied by the sum of their qualities, is minimized.

#### **Approach**:
1. **Calculate Wage-to-Quality Ratios**:
   - For each worker, calculate the ratio of their wage to their quality. This ratio represents the minimum cost per unit of quality that each worker demands.
   
2. **Sort Workers by Ratio**:
   - Sort workers based on their wage-to-quality ratios. This way, we first consider workers who are cheapest per unit of quality.
   
3. **Use a Max Heap for Quality Management**:
   - A max heap (also simulated by pushing negative values into a min heap) is used to maintain the `k` workers with the highest qualities that have been considered so far. We aim to keep our selection of `k` workers as cost-efficient as possible while satisfying the quality demands set by the worker with the highest ratio in our current selection.
   
4. **Iterate and Calculate Costs**:
   - As we iterate through the sorted list:
     - For the first `k` workers, we simply add them to our heap and calculate the initial cost.
     - For subsequent workers, we compare if adding a new worker (with a possibly higher ratio but lower quality) could decrease the overall cost. We do this by potentially replacing the worker with the highest quality in our current selection if the new worker has lower quality but forces a recalculation of the cost at a higher ratio.
     
5. **Track Minimum Cost**:
   - During iteration, continuously track and update the minimum possible cost as we make adjustments to our group of selected workers.

This approach efficiently finds the optimal combination of workers, balancing their quality and cost demands, using the min heap to manage and quickly adjust which workers are included in the cost calculation.
 */
