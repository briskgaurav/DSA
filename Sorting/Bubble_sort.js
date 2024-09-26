const arr=[25,65,8,89,65,58,8,399,2,5,98,2,9,-2];

for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            // SWAP
            var temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            // SWAP DONE!
            console.log(arr);
        }
    
    } 
}