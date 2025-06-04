const removeFromArray = function(a,...b) {
    for (i = a.length - 1; i>= 0; i--) 
        for( z = 0; z<b.length; z++){
        if (a[i] === b[z]){
            a.splice(i, 1);
    }
}
    return a;
}

// Do not edit below this line
module.exports = removeFromArray;
