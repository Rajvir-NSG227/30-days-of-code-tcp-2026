class Solution:
    def sumOfEncryptedInt(self, nums: List[int]) -> int:
        total_sum = 0
        for x in nums:
            max_digits = max(s)
            total_sum += int(max_digits*len(s))
        return total_sum