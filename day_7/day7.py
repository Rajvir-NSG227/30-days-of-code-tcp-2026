class Solution:
    def sumOfEncryptedInt(self, nums: list[int]) -> int:
        total_sum = 0
        for x in nums:
            s = str(x)
            max_digits = max(s)
            total_sum += int(max_digits*len(s))
        return total_sum