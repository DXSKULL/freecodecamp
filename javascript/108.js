// Step 108
// Arrays also have a .shift() method. This will remove the first element of the array, unlike .pop() which removes the last element. Here is an example of the .shift() method:

// Example Code
// const numbers = [1, 2, 3];
// numbers.shift();
// The numbers array would be [2, 3].

// Directly below your numbers array, declare a shifted variable and assign it the result of calling .shift() on the numbers array. On the next line, log the shifted variable to the console.

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);

const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);



let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);