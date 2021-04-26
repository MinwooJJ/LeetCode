class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        leftIdx = 0
        rightIdx = len(nums) - 1
        
        # O(log(n))
        # when len(nums) greater than 3
        while rightIdx - 1 > leftIdx:
            midIdx = (rightIdx + leftIdx) // 2
            
            if nums[midIdx] > nums[midIdx + 1] and nums[midIdx] > nums[midIdx - 1]:
                return midIdx
            
            if nums[midIdx] > nums[midIdx + 1]:
                rightIdx = midIdx
            else:
                leftIdx = midIdx + 1
                
        # when len(nums) less than 2
        return leftIdx if nums[leftIdx] >= nums[rightIdx] else rightIdx