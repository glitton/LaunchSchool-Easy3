function triangle(number) {
  let stars = "*";
  let spaces = " ";
  let numSpaces = number - 1;

  for (let idx = 0; idx < number; idx++) {
    console.log(`${spaces.repeat(numSpaces)}${stars.repeat(idx + 1)}`);
    numSpaces--;
  }
}

triangle(5);
triangle(9);

// function triangle(height) {
//   let spaces = height - 1;
//   let stars = 1;
//   while (height > 0) {
//     console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
//     spaces -= 1;
//     stars += 1;
//     height -= 1;
//   }
// }
