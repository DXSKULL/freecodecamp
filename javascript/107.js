// Step 107
// The .unshift() method of an array allows you to add a value to the beginning of the array, unlike .push() which adds the value at the end of the array. .unshift() returns the new length of the array it was called on.

// Example Code
// const countDown = [2, 1, 0];
// const newLength = countDown.unshift(3);
// console.log(countDown); // [3, 2, 1, 0]
// console.log(newLength); // 4
// Use const to declare an unshifted variable, and assign it the result of calling .unshift() on your numbers array. Pass 5 as the argument. Then print your unshifted variable.

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
const unshifted = numbers.unshift(5);
console.log(numbers);
console.log(unshifted);

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);