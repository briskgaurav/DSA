function RotateByOne(arr){
    let last = arr[arr.length-1];
    for(i=arr.length-2;i>=0;i--){
        arr[i+1]=arr[i];
    };
    arr[0]=last;
    return arr;
   
}

const ans = RotateByOne([1,2,3,4,5])
console.log(ans);