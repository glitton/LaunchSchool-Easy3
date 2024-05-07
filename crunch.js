function crunchText(text) {
  let singleText = "";
  let index = 0;
  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      singleText += text[index];
    }
    index++;
  }
  return singleText;
}

console.log(crunchText("ddaaiillyy ddoouubbllee"));
console.log(crunchText("a"));
