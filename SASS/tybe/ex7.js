let prices = [29, 0, 149, 55, -10, 1200, 89, 300];

for (let price of prices) {

    if (price === 0) {
        continue;
    }
    
    if (price <= 0) {
        continue;
    }
   

    if (price > 1000) {
        break;
       
    }

    console.log(`Item: $${price} `);
}

console.log("⛔ Price too high! Stopping");