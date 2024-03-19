/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  const tasksState = {};
  for (const task of tasks) {
    if (tasksState[task]) {
      tasksState[task].numberOfTasks++;
      continue;
    }
    tasksState[task] = {
      numberOfTasks: 1,
      currentCooldown: 0,
    };
  }

  const pickBestTaskToPick = (tasksState) => {
    let maxCurrentNumberOfTasks = -Infinity;
    let taskToTake = null;
    for (const [task, taskState] of Object.entries(tasksState)) {
      if (
        taskState.numberOfTasks > 0 &&
        taskState.numberOfTasks > maxCurrentNumberOfTasks &&
        taskState.currentCooldown === 0
      ) {
        maxCurrentNumberOfTasks = taskState.numberOfTasks;
        taskToTake = task;
      }
    }

    return taskToTake;
  };

  const decrementCooldownForAllTasks = (tasksState) => {
    for (const task of Object.keys(tasksState)) {
      tasksState[task].currentCooldown > 0 &&
        tasksState[task].currentCooldown--;
    }
  };

  let numberOfTasksCompleted = 0;
  let minimumIntervals = 0;
  while (numberOfTasksCompleted < tasks.length) {
    minimumIntervals++;
    const taskToTake = pickBestTaskToPick(tasksState);
    decrementCooldownForAllTasks(tasksState);
    if (!taskToTake) {
      continue;
    }
    numberOfTasksCompleted++;
    tasksState[taskToTake].numberOfTasks--;
    tasksState[taskToTake].currentCooldown = n;
  }

  return minimumIntervals;
};

/**
 * OPTIMISED VERSION
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastIntervalOptimised = (tasks, n) => {
  let freq = Array(26).fill(0);
  for (let task of tasks) {
    freq[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  }
  freq.sort((a, b) => b - a);
  let chunk = freq[0] - 1;
  let idle = chunk * n;

  for (let i = 1; i < 26; i++) {
    idle -= Math.min(chunk, freq[i]);
  }

  return idle < 0 ? tasks.length : tasks.length + idle;
};
