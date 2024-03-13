class Solution:
    def pivotInteger(self, n: int) -> int:
        sum = n * (n + 1) / 2
        past_sum = 0
        i = 1
        while i <= n:
            past_sum += i
            if past_sum == sum:
                return i
            sum -= i
            i += 1
        return -1