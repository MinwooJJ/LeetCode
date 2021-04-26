class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        nums1 = list(num1)
        nums2 = list(num2)
        res, carry = [], 0
        
        while nums1 or nums2:
            n1, n2 = 0, 0
            if nums1: n1 = ord(nums1.pop()) - ord('0')
            if nums2: n2 = ord(nums2.pop()) - ord('0')
            
            # 이전 carry 값 유지    
            carry, num = divmod(n1 + n2 + carry, 10)
            res.append(num)
        
        # 1자리 숫자 일 경우
        if carry:
            res.append(carry)
        
        return ''.join(str(i) for i in res)[::-1]
