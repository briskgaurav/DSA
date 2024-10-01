// we have 2 strings , firstly have to check both length, then

var isAnagram = function(s, t) {

    if(s.length!==t.length){
        return false;
    }
    let obj1={};
    let obj2={};
    for(let char of s){
      obj1[char]=(obj1[char] ?? 0)+1;
    }
    for ( let char of t){
        obj2[char] = (obj2[char] ?? 0) +1;
    }

    for(let item in obj1){
        if (obj1[item]!==obj2[item]){
            return false;
        }
       
    }
     return true;
    
    
};

const check = checkAnagram("rat","car")
console.log(check)