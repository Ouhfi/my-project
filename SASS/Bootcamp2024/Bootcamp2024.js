"use strict";
const password = "Bootcamp2024!";
let attempts = ["hello", "pass123", "wrong", "Bootcamp2024!"];
let count = 0;
let i = 0;
let su = false;
do {
    if (attempts[i] === password) {
        su = true;
        console.log("✅ Access granted! You used X attempt(s).");
        break;
    }
    else if (count !== 3) {
        console.log(" ❌ Account locked. Too many failed attempts.s " + count + "/3");
    }
    count++;
    i++;
} while (i < attempts.length && count < 3);
if (!su && count === 3) {
    console.log("❌ Account locked. Too many failed attempts.");
}
