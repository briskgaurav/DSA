/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length-1;
    let ans = nums[0];

    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid]>=nums[0]){
            start=mid+1;
        }
        else{
            ans=nums[mid];
            end=mid-1;
        }
    }
    return ans;
    
};