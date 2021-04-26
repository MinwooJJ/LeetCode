class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        s_nums = sorted(nums)
        
        # O(nlog(n))
        for i in range(len(s_nums) - 1):
            if s_nums[i] == s_nums[i + 1]:
                return s_nums[i]