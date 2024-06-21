const maxSatisfied0 = (
  customersOnMinute: number[],
  grumpyOwerOnMinute: number[],
  secretTechniqueMinutes: number
): number => {
  const unsatisfiedCustomersStartingFromMinute = new Array<number>(
    customersOnMinute.length - secretTechniqueMinutes
  ).fill(0);

  let unsatisfiedCustomersNumber = 0,
    i = 0;
  while (i < secretTechniqueMinutes) {
    if (grumpyOwerOnMinute[i]) {
      unsatisfiedCustomersNumber += customersOnMinute[i];
    }
    i++;
  }
  unsatisfiedCustomersStartingFromMinute[0] = unsatisfiedCustomersNumber;
  while (i < customersOnMinute.length) {
    if (grumpyOwerOnMinute[i - secretTechniqueMinutes]) {
      unsatisfiedCustomersNumber -=
        customersOnMinute[i - secretTechniqueMinutes];
    }
    if (grumpyOwerOnMinute[i]) {
      unsatisfiedCustomersNumber += customersOnMinute[i];
    }
    unsatisfiedCustomersStartingFromMinute[i - secretTechniqueMinutes + 1] =
      unsatisfiedCustomersNumber;
    i++;
  }

  let maxUnsatisfiedCustomers = 0,
    maxUnsatisfiedCustomersIndex = -1;
  for (let i = 0; i < unsatisfiedCustomersStartingFromMinute.length; i++) {
    if (unsatisfiedCustomersStartingFromMinute[i] > maxUnsatisfiedCustomers) {
      maxUnsatisfiedCustomers = unsatisfiedCustomersStartingFromMinute[i];
      maxUnsatisfiedCustomersIndex = i;
    }
  }

  if (maxUnsatisfiedCustomersIndex === -1) {
    return customersOnMinute.reduce(
      (accumulatedCustomers, currentNumberOfCustomers) =>
        accumulatedCustomers + currentNumberOfCustomers,
      0
    );
  }

  return customersOnMinute.reduce(
    (accumulatedCustomers, currentNumberOfCustomers, currentIndex) => {
      if (
        (currentIndex >= maxUnsatisfiedCustomersIndex &&
          currentIndex <
            maxUnsatisfiedCustomersIndex + secretTechniqueMinutes) ||
        !grumpyOwerOnMinute[currentIndex]
      ) {
        return accumulatedCustomers + currentNumberOfCustomers;
      }
      return accumulatedCustomers;
    },
    0
  );
};

const maxSatisfied1 = (
  customersOnMinute: number[],
  grumpyOwerOnMinute: number[],
  secretTechniqueMinutes: number
): number => {
  let initialSatisfaction = 0,
    maxExtraSatisfaction = 0,
    currentExtraSatisfaction = 0;

  for (let i = 0; i < customersOnMinute.length; i++) {
    if (!grumpyOwerOnMinute[i]) {
      initialSatisfaction += customersOnMinute[i];
    } else if (i < secretTechniqueMinutes) {
      currentExtraSatisfaction += customersOnMinute[i];
    }
  }

  maxExtraSatisfaction = currentExtraSatisfaction;

  for (let i = secretTechniqueMinutes; i < customersOnMinute.length; i++) {
    if (grumpyOwerOnMinute[i]) {
      currentExtraSatisfaction += customersOnMinute[i];
    }
    if (grumpyOwerOnMinute[i - secretTechniqueMinutes]) {
      currentExtraSatisfaction -= customersOnMinute[i - secretTechniqueMinutes];
    }
    maxExtraSatisfaction = Math.max(
      maxExtraSatisfaction,
      currentExtraSatisfaction
    );
  }

  return initialSatisfaction + maxExtraSatisfaction;
};

const maxSatisfied = (
  customersOnMinute: number[],
  grumpyOwerOnMinute: number[],
  secretTechniqueMinutes: number
): number => {
  let initialSatisfaction = 0,
    maxExtraSatisfaction = 0,
    currentExtraSatisfaction = 0;

  for (let i = 0; i < customersOnMinute.length; i++) {
    if (!grumpyOwerOnMinute[i]) {
      initialSatisfaction += customersOnMinute[i];
    }

    if (i < secretTechniqueMinutes) {
      if (grumpyOwerOnMinute[i]) {
        currentExtraSatisfaction += customersOnMinute[i];
        maxExtraSatisfaction = currentExtraSatisfaction;
      }
    } else {
      if (grumpyOwerOnMinute[i]) {
        currentExtraSatisfaction += customersOnMinute[i];
      }
      if (grumpyOwerOnMinute[i - secretTechniqueMinutes]) {
        currentExtraSatisfaction -=
          customersOnMinute[i - secretTechniqueMinutes];
      }
      maxExtraSatisfaction = Math.max(
        maxExtraSatisfaction,
        currentExtraSatisfaction
      );
    }
  }

  return initialSatisfaction + maxExtraSatisfaction;
};
