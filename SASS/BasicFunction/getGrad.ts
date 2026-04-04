function getGrade(a: number): string {
    switch (true) {
        case a >= 16:
            return "A";
        case a >= 14:
            return "B";
        case a >= 12:
            return "C";
        case a >= 10:
            return "D";
        default:
            return "F";
    }
}
function print(a : string):void
{
    console.log(a);
}

print(getGrade(18));
print(getGrade(14));
print(getGrade(12));
print(getGrade(10));
