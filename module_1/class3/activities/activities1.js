let num = parseInt(prompt(" enter with number: "));
function isPrime(n) {
if (n == 2) {
  return true;
}
  let c = 2;
  for (let i = 0; i < n; i++) {
    if ((n %c) == 0) {
      return false;
    } 
    if (c > (n / 2)) {
      return true;
    }
    c++;
  }
  return false;
}
console.log(isPrime(num))
if (isPrime(num)) {
  console.log(" is prime!!"); 
} else {
  console.log(" is not prime")
}