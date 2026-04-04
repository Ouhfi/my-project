function max(a:number, b:number):number
{
    if(a > b)
        return a;
    else
        return b;
}

function Print(a : number):void
{
    console.log(a);
}



Print(max(10, 20));
Print(max(50, 30));
Print(max(7, 7));