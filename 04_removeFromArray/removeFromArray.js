// const removeFromArray = function(arr, ...targetArgs) {
//     for (let i = 0; i < arr.length; i++) {
//         if (targetArgs.includes(arr[i])) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     return arr;
// };

const removeFromArray = function(arr, ...targetArgs) {
    return arr.filter(item => !targetArgs.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
