const minOperations = (nums: number[], k: number): number => {
  let finalXor = nums.reduce((acc, num) => acc ^ num, 0);

  let numberOfRequiredOperations = 0;
  while (k > 0 || finalXor > 0) {
    if (k % 2 !== finalXor % 2) {
      numberOfRequiredOperations++;
    }

    k = Math.floor(k / 2);
    finalXor = Math.floor(finalXor / 2);
  }

  return numberOfRequiredOperations;
};

/**
 * 
### 1. XOR Operation Basics

The XOR (exclusive OR) operation is a binary operation that operates on two bits. Here are its properties:
- `0 XOR 0 = 0`
- `1 XOR 0 = 1`
- `0 XOR 1 = 1`
- `1 XOR 1 = 0`

In terms of properties relevant to your problem:
- XOR is commutative and associative, i.e., `a XOR b = b XOR a` and `(a XOR b) XOR c = a XOR (b XOR c)`.
- XOR with zero leaves the number unchanged, i.e., `a XOR 0 = a`.
- XORing a number with itself results in zero, i.e., `a XOR a = 0`.

### 2. Applying XOR to the Array

The goal is to make the XOR of all array elements equal to `k`. Initially, the solution calculates the XOR of all elements in the array `nums`. Let's denote this as `finalXor`.

### 3. Strategy to Achieve Desired XOR

If the current XOR of the array (`finalXor`) is already equal to `k`, no operations are needed. If not, the task is to determine how many bit flips are needed to transform `finalXor` into `k`.

### 4. Checking Bits Individually

The solution proceeds by comparing the binary representation of `finalXor` and `k`, bit by bit:
- The expression `k % 2` and `finalXor % 2` extracts the least significant bit (rightmost bit) of `k` and `finalXor`, respectively.
- If these bits are different, it implies that a flip is needed in one bit of one of the numbers in `nums` to correct this mismatch. Each mismatch requires at least one bit flip somewhere in the array.
- The operation count increments each time a mismatch is found.

### 5. Moving to the Next Bit

After comparing the least significant bits:
- The code right-shifts `k` and `finalXor` by one bit using `Math.floor(k / 2)` and `Math.floor(finalXor / 2)`, respectively. This effectively moves to the next bit for comparison in the subsequent iteration of the loop.
  
### 6. Continue Until All Bits Processed

The loop continues until all bits in both `k` and `finalXor` have been processed (i.e., both are reduced to 0). The reason for checking `k > 0 || finalXor > 0` is that we need to ensure that all bits (even if one number has more bits than the other) are compared.

### Conclusion

The number of operations needed is exactly the number of bit mismatches between the current XOR of the array and the target XOR `k`. This method is efficient because it directly targets the bits that cause the discrepancy, ensuring a minimal number of operations.

This approach leverages the properties of the XOR operation to isolate and rectify discrepancies in the binary representations of numbers, making it a powerful technique for such bitwise manipulation problems.
 */
