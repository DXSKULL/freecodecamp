// Step 111
// Your pyramid is no longer inverted. This is because you are adding new rows to the end of the array.

// Update your loop body to add new rows to the beginning of the array.

const character = "#";
const count = 8;
const rows = [];

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