class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        sol_arr=[]
        start = -1
        end = -1
        for i in range(len(nums)):
            if nums[i] == target:
                if i == 0 or nums[i-1] != target:
                    start = i
                if i == len(nums)-1 or nums[i+1] != target:
                    end = i
        return sol_arr[start,end]