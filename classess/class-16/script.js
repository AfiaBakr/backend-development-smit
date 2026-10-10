const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(first) {
  return first > 18;
}
console.log(myFunction())

const numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction1(total, value) {
  return total + value
},0);

console.log(sum)