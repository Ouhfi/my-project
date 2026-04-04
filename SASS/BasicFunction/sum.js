"use strict";
let total = 0;
function sum() {
    let ar = [1, 2, 3, 4, 5];
    for (const ary of ar) {
        total += ary;
    }
    return total;
}
console.log(sum());
