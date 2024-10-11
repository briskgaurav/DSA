var peakIndexInMountainArray = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
        if (arr[mid] < arr[mid - 1]) right = mid - 1;
        else left = mid + 1;
    }
};