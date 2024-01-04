class Solution:
    def minOperations(self, nums: list[int]) -> int:
        num_appearances = {}
        for num in nums:
            num_appearances[num] = num_appearances.get(num, 0) + 1
        
        min_number_of_operations = 0
        for num in num_appearances.keys():
            if num_appearances[num] == 1:
                return -1
            min_number_of_operations += num_appearances[num] // 3
            if num_appearances[num] % 3:
                min_number_of_operations += 1
            
        return min_number_of_operations