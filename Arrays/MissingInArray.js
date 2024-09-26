class Solution {

    // Note that the size of the array is n-1
    missingNumber(n, arr) {
    
      let sum2=(n*(n+1))/2;
      let sum=0;
      
      for(let i=0; i<arr.length; i++){
         sum=sum+arr[i];
      };
      
      let final=sum2-sum;
      return final;
    }
    
}