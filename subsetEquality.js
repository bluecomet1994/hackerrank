const str = "1741380";

function subset_equality(str) {
  const subsets = [];
  let result = [str];

  // Helper function to calculate the sum of digits in a string
  const digitSum = substr => {
    let sum = 0;
    for (let i = 0; i < substr.length; i++) {
      sum += parseInt(substr.charAt(i));
    }
    return sum;
  };

  // Recursive function to generate subsets
  const generateSubsets = (startIndex, currSubsets) => {
    // Base case: we've reached the end of the string and found a valid set of subsets
    if (startIndex === str.length && currSubsets.length > 1) {
      const targetSum = digitSum(currSubsets[0]);  // Choose the first subset as the target sum
      const valid = currSubsets.every(subset => digitSum(subset) === targetSum);  // Check that all subsets have the same sum of digits
      if (valid) {
        subsets.push(currSubsets);
      }
    } else {
      // Recursive case: try to add each possible substring starting from the current index
      for (let i = startIndex; i < str.length; i++) {
        const currSubstring = str.slice(startIndex, i + 1);
        generateSubsets(i + 1, [...currSubsets, currSubstring]);
      }
    }
  };

  // Call generateSubsets to populate subsets array
  generateSubsets(0, []);

  // Convert subsets into format specified in problem
  const res = subsets.map(subsetArr => subsetArr.join("_"));

  res.reverse().map(answer => result.push(answer))

  return result;
}

console.log(subset_equality(str));