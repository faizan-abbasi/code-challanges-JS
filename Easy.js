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
