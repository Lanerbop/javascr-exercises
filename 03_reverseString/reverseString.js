const reverseString = function(myString) {
    let stringArray = myString.split("");
    stringArray.reverse();
    return stringArray.join("");

};

// Do not edit below this line
module.exports = reverseString;
