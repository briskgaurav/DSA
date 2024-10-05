function LargestSum(arr,n){
    let max=0;
    for(i=0;i<arr.length-n+1; i++){
        let temp = 0;
        for(j=0;j<n; j++){
            temp=temp+arr[i+j]
        }
        if(temp>max){
            max=temp;
        }
        }
    return max;
}

const ans = LargestSum([1,2,3,4,5,6,7,8,9],4)
console.log(ans);