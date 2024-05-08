// function cleanUp(string) {
//   const cleanText = string.replace(/[^a-zA-Z0-9]/g, " ");
//   let cleanTextNoSpaces = "";
//   for (let i = 0; i < cleanText.length; i++) {
//    if(cleanText[i] === ' ')
//   }
// }

// console.log(cleanUp("---what's my +*& line?"));

function cleanUp(text) {
  let cleanText = "";

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== " ") {
      cleanText += " ";
    }
  }

  return cleanText;
}

function lastChar(text) {
  return text[text.length - 1];
}

function isLowerCaseLetter(char) {
  return char >= "a" && char <= "z";
}

function isUpperCaseLetter(char) {
  return char >= "A" && char <= "Z";
}

function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}
