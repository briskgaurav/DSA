function swapArray(arr) {
    let i = 0;
    let j = arr.length-1; 
    while (i < j) {
       
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

      
        i++;
        j--;
    }
    return arr;
}

const ans = swapArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(ans); 
