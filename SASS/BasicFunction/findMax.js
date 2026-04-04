"use strict";
function findMax(ar) {
    let max = ar[0];
    for (let index = 0; index < ar.length; index++) {
        if (ar[index] < max) {
            max = ar[index];
        }
    }
    return max;
}
console.log(findMax([3, 7, 2, 9, 1]));
