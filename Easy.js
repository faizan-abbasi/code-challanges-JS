// Check for Empty Object
const obj = { x: 5, y: 42 };
const empObj = {};
if (Object.keys(empObj).length === 0) {
  console.log(true);
}

// Fizz Buzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(100);

// Factorial of n Numbers
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Find the Largest number in the array
function maxNoOfArray(n) {
  let max = 0;
  for (let i = 0; i < n.length; i++) {
    if (max < n[i]) {
      max = n[i];
    }
  }
  return max;
}
let max_check_arr = [10, 195, 100, 2, 25];
console.log("Largest number is : ", maxNoOfArray(max_check_arr));
