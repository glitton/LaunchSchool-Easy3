function stringy(number) {
  let binary = "";
  for (let idx = 0; idx < number; idx++) {
    if (idx % 2 === 0) {
      binary += 1;
    } else {
      binary += 0;
    }
  }
  return binary;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));

// function stringy(size) {
//   let result = "";
//   for (let idx = 0; idx < size; idx++) {
//     let number = ((idx % 2) === 0) ? 1 : 0;
//     result += number;
//   }
//   return result;
// };
