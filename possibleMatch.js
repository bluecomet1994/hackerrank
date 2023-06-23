function solve(numbers, k) {
    let count = 0;
    let newNumbers = [];

    numbers.map(number => {
        if(!newNumbers.includes(number)) {
            newNumbers.push(number);
        }
    });

    for(let i = 0; i < newNumbers.length; i++) {
        for(let j = 0; j < newNumbers.length; j++) {
            if(newNumbers[i] + k === newNumbers[j]) {
                count++;
            }
        }
    }

    return count;
}

console.log(solve([1,2,3,4,5,6], 2));