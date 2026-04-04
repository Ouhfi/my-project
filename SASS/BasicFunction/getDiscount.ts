function HasCard(Card:boolean):boolean
{
    return Card === true;
}

function getDiscount(price:number, hasCard:boolean):number
{
    if(HasCard(hasCard))
         return price -= price * 0.2;

        else 
        return price;
}

function print(a : number):void
{
    console.log(a);
}

print(getDiscount(100, true));

