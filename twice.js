// // Need to convert number to a string so you can get the length
// function twice(number) {
//   let stringNumber = String(number);
//   let centerIndex = Math.floor(stringNumber.length / 2);
//   let newNumber = "";
//   for (let index = 0; index < centerIndex; index++) {
//     if (stringNumber[index] === stringNumber[centerIndex]) {
//       newNumber += stringNumber[index];
//     } else {
//       return number * 2;
//     }
//   }
// }

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

console.log(twice(37));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(103103));
