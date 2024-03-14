class Solution:
    def numSubarraysWithSum(self, nums: list[int], goal: int) -> int:
        # Initialize a dictionary to store prefix sums encountered so far
        # Initialize it with 0:1 because initially, the prefix sum is 0 and has been encountered once.
        prefix_sums = {0: 1}
        
        # Initialize variables to keep track of the result and the current prefix sum
        result = 0
        current_sum = 0
        
        # Iterate through the elements of the input array
        for num in nums:
            # Update the current prefix sum
            current_sum += num
            
            # Check if there exists a prefix sum such that (current_sum - goal) is equal to that prefix sum
            # If it exists, then it means there is a subarray from some index j to the current index k
            # where the sum of elements is equal to the goal
            if current_sum - goal in prefix_sums:
                # Increment the result by the number of such subarrays found
                result += prefix_sums[current_sum - goal]
            
            # Update the prefix_sums dictionary with the current prefix sum
            # Increase its frequency by 1 if it already exists, otherwise, initialize it with 1
            prefix_sums[current_sum] = prefix_sums.get(current_sum, 0) + 1
        
        # Return the final result
        return result
