var SumZero = function(arr) {
   for(let number of arr){
    for(let j=1; j<arr.length;j++){
        if(number+arr[j]===0){
            return [number, arr[j]];
        }
    }
   }
    
};

const ans=SumZero([-4,-3,-2,-1,0,1,2,3,4])
console.log(ans)