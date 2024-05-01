/**
 * Calculates the number of non-empty wonderful substrings in a given string.
 * A wonderful substring is a substring where at most one character appears an odd number of times.
 *
 * @param {string} word - The input string, which only contains the first ten lowercase English letters ('a' to 'j').
 * @returns {number} - The count of wonderful substrings in the input string.
 */
const wonderfulSubstrings = (word: string): number => {
  // Initialize an array to track the counts of each bitmask encountered.
  const bitmaskCounts = new Array(2 ** 10).fill(0);
  bitmaskCounts[0] = 1; // Count the initial state where no characters have been encountered.

  let currentBitmask = 0; // Tracks the current state of character counts (odd/even) as a bitmask.
  let wonderfulCount = 0; // Store the total count of wonderful substrings.

  for (const letter of word) {
    // Update the current bitmask by toggling the bit corresponding to the current letter.
    currentBitmask ^= 1 << (letter.charCodeAt(0) - "a".charCodeAt(0));

    // Add to the result the number of times this bitmask has been encountered,
    // since it represents a substring where all characters have even counts.
    wonderfulCount += bitmaskCounts[currentBitmask];

    // Check all possible bitmasks that differ by exactly one bit (i.e., one character has an odd count).
    for (let i = 1; i <= 2 ** 9; i *= 2) {
      wonderfulCount += bitmaskCounts[currentBitmask ^ i];
    }

    // Increment the count for this bitmask state.
    bitmaskCounts[currentBitmask]++;
  }

  return wonderfulCount;
};

/**
### 1. **Bitmask**
A bitmask is a sequence of bits (zeros and ones) that can be used to efficiently store and manipulate data. Each bit in the mask can represent some binary property, like on/off, true/false, or in this case, even/odd.

In the context of this problem:
- Each bit in a bitmask corresponds to one of the 10 letters ('a' to 'j').
- The bit is `1` if the count of that character is odd, and `0` if the count is even.

### 2. **XOR Operator (`^`)**
The XOR (exclusive OR) operator is used in bit manipulation to toggle bits. For two bits, XOR yields `1` if the bits are different, and `0` if they are the same. It has properties that make it very useful in this problem:
- `x ^ x = 0`: XORing a number with itself results in zero.
- `x ^ 0 = x`: XORing a number with zero returns the original number.
- XOR is reversible: `x ^ y ^ y = x`.

In this solution:
- We use XOR to update the bitmask when a new character is processed. This toggles the corresponding bit in the current bitmask: if the count of that character becomes odd, the bit turns to `1`; if it becomes even, the bit turns back to `0`.

### 3. **Character Bit Calculation**
For a given character, the bit position in the bitmask is determined by subtracting the ASCII value of 'a' from the ASCII value of the character. This gives a unique index from `0` to `9` for 'a' to 'j'.
- For example, for 'c', `('c'.charCodeAt(0) - 'a'.charCodeAt(0))` results in `2`, which is the third position in the bitmask (counting from zero).

### 4. **Tracking Count of Bitmask Configurations**
The `bitmaskCounts` array tracks how many times each bitmask configuration has been seen:
- This helps determine how many substrings (up to the current character) have a certain configuration of character counts.
- When we encounter the same bitmask again, it indicates that the substring between these two occurrences has all characters with even counts, making it "wonderful".

### 5. **Wonderful Substring Calculation**
Every time we update the bitmask, we look at `bitmaskCounts` to see how many previous substrings resulted in the same bitmask. If we find matches:
- It indicates that from the start of the string to the current character (and at previous matching points), the substring has characters with counts that match the wonderful condition.

Additionally, by checking bitmasks that differ by exactly one bit (`mask ^ i` where `i` is a power of 2):
- We check for substrings where exactly one character can have an odd count, which still satisfies the condition for a wonderful substring.

### 6. **Result Accumulation**
As we progress through the string:
- We accumulate the number of substrings that meet the wonderful condition by adding counts from `bitmaskCounts` based on the current bitmask and those differing by one bit.

This approach is efficient and avoids the need to explicitly count characters for every possible substring, leveraging bit operations for quick checks and updates.
 */
