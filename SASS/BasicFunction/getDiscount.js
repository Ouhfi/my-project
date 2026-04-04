"use strict";
function HasCard(Card) {
    return Card === true;
}
function getDiscount(price, hasCard) {
    if (HasCard(hasCard))
        return price -= price * 0.2;
    else
        return price;
}
function print(a) {
    console.log(a);
}
print(getDiscount(100, true));
