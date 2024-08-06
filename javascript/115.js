// Step 115
// If your pyramid is not inverted, then you will want to have an else block that builds the pyramid in the normal order.

// In earlier steps, you learned how to work with else statement like this:

// Example Code
// if (condition) {
//   // if condition is true, run this code
// } else {
//   // if condition is false, run this code
// }
// Add an else block to your if block.
const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  }
  else {
    
  }

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
