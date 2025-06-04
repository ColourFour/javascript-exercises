const sumAll = function(a, b) {
    let sum;
    if (a < 0 || b < 0){
    return 'ERROR';
    }

    if (a%1 != 0 || b%1 !=0)
    {
        return 'ERROR';
    }

    if (a.length > 1 || b.length >1)
    {
        return 'ERROR';
    }
    
    if (a > b){
    let arraySize = a-b +1;
    let sum = arraySize/2*(2*b + arraySize-1);
    return sum;
    }
    
    else 
    {
    let arraySize = b-a +1;
    let sum = arraySize/2*(2*a + arraySize-1);
    return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
