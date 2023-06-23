const n = 6;

function isPrime(n) {
  let prime = true;

  for(let i = 2; i < Math.sqrt(n); i++) {
    if(n % i === 0) {
      prime = false;
    }
  }

  return prime;
}

console.log(isPrime(n));