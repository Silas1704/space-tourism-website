var compose = function(functions) {
    
    return function(x) {
        if(functions.length===0) return x;
        functions.reverse().forEach(fn => {
            x=fn(x)
        });
        return x;
    }
};