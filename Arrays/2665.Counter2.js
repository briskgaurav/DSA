var createCounter = function(init) {
    let currentValue = init;
    return {
        increment(){
           return ++currentValue;

        },
       decrement() {
            return --currentValue; // Decrement and return the new value
        },
        reset(){
            currentValue = init;
            return currentValue;

        },
    }
    
};