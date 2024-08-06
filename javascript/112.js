// Step 112
// What if you had a way to toggle between an inverted pyramid and a standard pyramid?

// Start by declaring an inverted variable, and assigning it the value true. You are not changing this variable in your code, but you will need to use let so our tests can modify it later.
const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
