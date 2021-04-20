class Solution:
    def findUnsortedSubarray(self, nums: List[int]) -> int:
        # O(n)
        if len(nums) < 2:
            return 0
        
        idxStart, idxEnd = 0, 0
                
        comp = nums[0]
        # Largest index not in place
        for i in range(len(nums)):
            if comp > nums[i]:
                idxEnd = i
            else:
                comp = nums[i]
        
        comp = nums[len(nums) - 1]
        # Smallest index not in place
        for i in range(len(nums) - 1, -1, -1):
            if comp < nums[i]:
                idxStart = i
            else:
                comp = nums[i]
        
        if idxEnd != 0:
            return idxEnd - idxStart + 1
        else:
            return 0