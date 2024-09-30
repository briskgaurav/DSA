var expect = function(val) {
    const newval=val;
     return {
         toBe(val){
           if(newval===val){
             return true;
           }
           else{
             throw "Not Equal";
           }
         },
         notToBe(val){
           if(newval!==val){
             return true;
           }
           else{
             throw "Equal";
           }
         }
     }
 };