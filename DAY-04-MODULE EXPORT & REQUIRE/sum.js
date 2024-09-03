console.log("Sum Module Executed");

// export let x = "Hello Sum";
// export function calculateSum(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }

  let x = "Hello Sum";
  function calculateSum(a, b) {
   const sum = a + b;
   console.log(sum);
 }

let y = "Hello Sum by Destructuring";
function calculateTripleSum(a, b, c) {
  const sum = a + b + c;
  console.log(sum);
}
console.log(module.exports)
module.exports = {
  x,
  y,
  calculateSum,
  calculateTripleSum,
};
