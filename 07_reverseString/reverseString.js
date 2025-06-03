const reverseString = function(ReverseMe) {
    let start = ReverseMe.length;
    let string = "";
    for (let i = start; i > 0; i--){
    string += ReverseMe[i - 1];
    }
    return string;
};



// Do not edit below this line
module.exports = reverseString;
