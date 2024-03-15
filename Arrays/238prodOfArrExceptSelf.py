class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        num_of_zeros = 0
        product_without_zeros  = 1
        for num in nums:
            if num == 0:
                num_of_zeros  += 1
            else:
                product_without_zeros *= num
        
        res = []
        if num_of_zeros > 1:
            return [0 for _ in range(len(nums))]
        
        for num in nums:
            if num == 0:
                res.append(product_without_zeros)
            else:
                if num_of_zeros:
                    res.append(0)
                else:
                    res.append(product_without_zeros // num)

        return res

"""
With no division:
"""
class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        length = len(nums)
        products = [1] * length

        prefixProduct = 1
        for i in range(length):
            products[i] = prefixProduct
            prefixProduct *= nums[i]

        suffixProduct = 1
        for i in range(length - 1, -1, -1):
            products[i] *= suffixProduct
            suffixProduct *= nums[i]

        return products