class Solution {
public:
    bool isPalindrome(int x) {
        
    if(x<0){
        return 0;
    }
    int ans = 0;
    int check = x;
    while (check != 0) {
        int rem = check % 10;
        check = check / 10;
       if(ans>INT_MAX/10){
            return 0;
        }
        ans = ans * 10 + rem;
    }

    if (x == ans){
        return 1;
    }
    else return 0;
        
        
    }
};