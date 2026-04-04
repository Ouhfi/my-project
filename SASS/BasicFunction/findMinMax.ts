function findMax(ar: number[]): number {
    let max = ar[0];
    
    for (let index = 1; index < ar.length; index++) {
        if (ar[index] > max) {
            max = ar[index];
        }
    }
    return max;
}

function findMin(ar: number[]): number {
    let min = ar[0];
    
    for (let index = 1; index < ar.length; index++) {
        if (ar[index] < min) {
            min = ar[index];
        }
    }
    return min;
}

function findMinMax(ar: number[]): { min: number, max: number } {
    let min = findMin(ar);
    let max = findMax(ar);

    return { min, max };
}

// test
console.log(findMinMax([3, 7, 2, 9, 1]));