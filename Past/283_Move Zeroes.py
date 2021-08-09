class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        if nums != [0]:
            idx = 0
            temp = 0
            
            # O(n)
            for i in range(len(nums)):
                if nums[i] != 0:
                    nums[i], nums[idx] = nums[idx], nums[i]
                    idx += 1