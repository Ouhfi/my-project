function isAdult(age : number):boolean
{
    return age >= 18;
}

function PrintRustle(rustle: boolean )
{
    console.log(rustle);
}
PrintRustle(isAdult(18));