#include <bits/stdc++.h>
using namespace std;

int count(int n){
    int counter = 0;
    while(n!=0){
        counter++;
        n=n/10;
    }
    return counter;
}
int chechArmstrong(int totalDigit , int num){
    int ans=0, n = num;
    while(n!=0){
        int rem = n%10;
        ans = ans+ pow(rem, totalDigit);
        n=n/10;
        
    }
    return ans;
}

int main(){
 int num;
 cin>>num;
 int digits=count(num);
 cout<<chechArmstrong(digits, num);
}