function largest(arr){
    // code here
    let max = arr[0];
     for(let i=0;i<arr.length; i++){
 
    
    if(max<arr[i]){
        max = arr[i];
    }
    
};
   return max;
};


const ans = largest([1,2,4,6,8]);
console.log(ans)
