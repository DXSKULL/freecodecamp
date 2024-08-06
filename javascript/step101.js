// Step 101
// Your iteration statement is also going to be different. Instead of adding 1 to i with each loop, you need to subtract 1.

// Like you did earlier with i = i + 1, update your iteration statement to give i the value of subtracting 1 from itself.

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

for (let i = count; i > 0; i = i - 1) {

}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);