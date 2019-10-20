let memo = {};

//with memoization is O(n), without is O(2^n)
function fib(n) {
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if(n === 1 || n === 2) {
    result = 1;
  } else {
    result = fib(n - 1) + fib(n - 2);
    memo[n] = result;
    console.log(result);
  }
  
  return result;
}

fib(200);