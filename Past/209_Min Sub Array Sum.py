class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        # Sliding Window
        cnt, res = 0, len(nums) + 1
        
        # O(n)
        for i in range(len(nums)):
            target -= nums[i]
            while target <= 0:
                if res < i - cnt + 1:
                    res = res
                else:
                    res = i - cnt + 1
                target += nums[cnt]
                cnt += 1
                
        return res % (len(nums) + 1)