class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        set_nums = set(nums)
        longest = 0
        for num in nums:
            if num-1 not in set_nums:
                current = num
                current_length = 1
                while current -1 in set_nums:
                        current_length +=1
                        current +=1

        longest = max(longest,current_length)
        return longest
