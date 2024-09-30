var createCounter = function(n) {
    let sum = n;
    
    return function(n) {
        return sum++;
        
    };
};
