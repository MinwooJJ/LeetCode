class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # sorted -> O(nlog(n))
        s_nums = sorted(nums)
        
        l_idx = 0
        r_idx = len(s_nums) - 1
        result = []
            
        # O(n)
        while l_idx < r_idx:
            if target == s_nums[l_idx] + s_nums[r_idx]:
                break              
            elif target > s_nums[l_idx] + s_nums[r_idx]:
                l_idx += 1
            else:
                r_idx -= 1
        
        # O(n)
        for i in range(len(nums)):
            if s_nums[l_idx] == nums[i]:
                result.append(i)
            elif s_nums[r_idx] == nums[i]:
                result.append(i)
                
        return result
    
        # O(n) + O(nlog(n)) + O(n) = O(nlog(n))            