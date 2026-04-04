"use strict";
function reverseString(str) {
    let s = "";
    let i = str.length - 1;
    //let j :number 
    while (i >= 0) {
        s += str[i];
        //console.log(str[i]);
        i--;
    }
    return s;
}
console.log(reverseString("abc"));
