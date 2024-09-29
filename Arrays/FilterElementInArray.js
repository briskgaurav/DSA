var filter = function(arr, fn) {
   return arr.filter((elem,index)=>fn(elem,index))
    
};