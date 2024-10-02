class Solution {

    searchInSorted(arr, N, K) {
        // your code here
        for(let i=0; i<N;i++){
            if(arr[i]===K){
                return 1;
            }
        }
        return -1;
    }
}