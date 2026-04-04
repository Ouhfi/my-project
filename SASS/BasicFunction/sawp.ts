function swap(a:number ,b :number)
{
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a , b);
}
swap(4,5);