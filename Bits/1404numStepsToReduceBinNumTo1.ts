// Unoptimised for large number and is less efficient
const unoptimisedNumSteps = (s: string): number => {
  let numOfSteps = 0;
  let num = parseInt(s, 2);
  while (num !== 1) {
    if (num % 2) {
      num++;
    } else {
      num /= 2;
    }
    numOfSteps++;
  }
  return numOfSteps;
};

const numSteps = (s: string): number => {
  let numOfSteps = 0,
    carry = 0;

  for (let i = s.length - 1; i >= 1; i--) {
    const rightMostBit = s.charCodeAt(i) - "0".charCodeAt(0);
    if (rightMostBit + carry === 1) {
      carry = 1;
      numOfSteps += 2;
    } else {
      numOfSteps++;
    }
  }

  return numOfSteps + carry;
};

/**
Handling Even and Odd Numbers:
  - If the bit plus the carry (rightMostBit + carry) is 1, this means the number is odd (since carry can be 0 or 1).
    For odd numbers, the solution adds 1 (which effectively turns the current bit to 0 and causes a carry-over).
    Adding 1 requires 2 steps: one to add and one to handle the resultant even number in the next iteration.
  - If the bit plus the carry is 0 or 2, the number is effectively even.
    For even numbers, dividing by 2 requires just 1 step.
  - Final Adjustment
    After the loop, carry might still be 1 if there was a carry-over from the most significant bit operation. In this case, an additional step is required to handle the carry.
 */
