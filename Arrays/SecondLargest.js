class Solution {
    getSecondLargest(arr) {
        // Code Here
        let max = -Infinity;
        let secMax=-Infinity;
        for ( let i=0;i<arr.length; i++){
            if(arr[i]>max){
                secMax=max;
                max=arr[i];
                
            }
            else if(arr[i]>secMax && arr[i]< max){
                secMax=arr[i];
            }
        }
        
        return secMax === -Infinity ? -1 : secMax;
    }
}