// Step 38
// You should see the numbers zero through seven printed in your console, one per line. This will serve as the foundation for generating your pyramid.

// Replace your log statement with a statement to push i to your rows array.
const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
  }

  console.log(rows);