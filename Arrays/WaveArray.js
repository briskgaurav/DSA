class Solution {
  
    convertToWave(n, arr)
    {
      for(let i=0; i<n-1;i=i+2){
          let temp = arr[i];
          
          arr[i]=arr[i+1];
          arr[i+1]=temp;
      }
      return arr
    }
}