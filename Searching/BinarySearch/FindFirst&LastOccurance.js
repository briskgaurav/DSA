/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let start = 0;
    let end = nums.length - 1;
    let first = -1;


    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            first = mid;
            end = mid - 1;
        }
        else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    };

    //Last
    let last = -1;
     start = 0; 
    end = nums.length - 1; 
  
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if(nums[mid]===target){
            last = mid;
            start = mid+1;
        }
        else if(nums[mid]<target){
            start = mid+1;
        }
        else{
            end = mid-1;
        };
    };



    return [first, last];
};