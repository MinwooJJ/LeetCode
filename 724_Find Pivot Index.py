class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        # O(n)
        sumNums = sum(nums)
        compNum = 0
        
        # O(n)
        for i in range(len(nums)):
            if compNum == (sumNums - nums[i]) / 2:
                return i
            compNum += nums[i]
            
        return -1