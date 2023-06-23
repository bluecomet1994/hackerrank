const s = '1234';

const reverseString = (s) => {
    let result = "";
    
    s.split("").reverse().map(ch => result += ch);
    
    return result;
}

console.log(reverseString(s))