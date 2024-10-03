class Solution {
public:
    int bitwiseComplement(int n) {
        if(n==0){
            return 1;
        }
           int ans=0,mul=1;
        while(n!=0){
            int rem = n%2;
            n=n/2;
            if(rem==1){
                rem=0;
                ans = ans + rem * mul;
               mul= mul*2;
            }
            else{
                rem=1;
                ans = ans +rem * mul;
                mul=mul*2;
            }
        }
        return ans;
        
    }
};