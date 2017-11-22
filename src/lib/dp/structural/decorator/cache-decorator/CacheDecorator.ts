function factorial(n: number) {
  return n ? n * factorial(n - 1) : 1;
}

function factorialCached() {
  let data: {} = {};
  return function (n) {
    return (data['cache' + n]) ? data['cache' + n] : data['cache' + n] = factorial(n);
  }
}

let factorialC = factorialCached();

console.log(factorialC(5));
console.log(factorialC(5));
console.log(factorialC(4));
