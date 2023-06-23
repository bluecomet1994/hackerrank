const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

const migratoryBirds = (arr) => {
    let freq = {};
    let maxType = [];

    arr.map(number => freq[number] ? freq[number]++ : freq[number] = 1);
    Object.keys(freq).reduce((max, current) => freq[max] > freq[current] ? maxType.push(max) : current);
    return maxType;
}

console.log(migratoryBirds(arr));