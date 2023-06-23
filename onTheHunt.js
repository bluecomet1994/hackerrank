const s = "abe";
const arr = ['f', 'g', 'h', 'i', 'j'];
const csv = "k,l,m,n,o,z";

function on_the_hunt(s, arr, csv) {
  let csv_arr = csv.split(",");
  let result = "";
  let exist = [];

  for(let i = 0; i < s.length; i++) {
    if(arr.includes(s[i]) && csv_arr.includes(s[i]) && !exist.includes(s[i])) {
      result += s[i];
      exist.push(s[i]);
    }
  }

  return result;
}

console.log(on_the_hunt(s, arr, csv));