
let total :number = 0;
function sum():number
{
    let ar  :number [] =[1, 2, 3, 4, 5] ;
    for (const ary of ar) {
        total += ary;
    }
    return total;
}

console.log(sum());

