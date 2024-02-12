class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        letter_apperances = {}
        for num in nums:
            letter_apperances[num] = letter_apperances.get(num, 0) + 1
            if letter_apperances[num] > len(nums) // 2:
                return num
        return 0