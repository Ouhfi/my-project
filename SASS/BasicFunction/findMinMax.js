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
function findMin(ar) {
    let min = ar[0];
    for (let index = 0; index < ar.length; index++) {
        if (ar[index] > min) {
            min = ar[index];
        }
    }
    return min;
}
function findMinMax(ar) {
    console.log(`{ min: ${findMax(ar)} ,max: ${findMin(ar)} }`);
}
findMinMax([3, 7, 2, 9, 1]);
