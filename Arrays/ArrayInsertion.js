let arr =[20,4,32,53,89,100];
var elem=100;
var position=3;

for(var i=arr.length-1;i>=0;i--){
    if(i>=position){
        arr[i+1]=arr[i];
        if(i===position) arr[i]=elem;
    }
}
console.log(arr)


// MORE METHOD 

arr.splice(3,0,elem)
console.log(arr);
