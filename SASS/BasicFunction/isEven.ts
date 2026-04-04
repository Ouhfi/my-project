function isEvenOrOdd(a :number):boolean
{
    return (a % 2 === 0);
}

function enterNumber(Num:number):void
{
    for(let i = 1;i <= Num; i++)
    {
        console.log(`${i} is even :${isEvenOrOdd(i)}`);
    }
}

enterNumber(10);


