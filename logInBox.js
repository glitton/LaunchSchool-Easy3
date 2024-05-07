function logInBox(text) {
  const dashes = "-".repeat(text.length);
  const spaces = " ".repeat(text.length + 2);
  const line = "|";
  const topBottomLines = `+-${dashes}-+`;
  const lineBorder = `${line}${spaces}${line}`;
  const textLine = `${line} ${text} ${line}`;

  return (
    topBottomLines +
    "\n" +
    lineBorder +
    "\n" +
    textLine +
    "\n" +
    lineBorder +
    "\n" +
    topBottomLines
  );
}

console.log(logInBox("bennie boy"));
console.log(logInBox(""));
console.log(logInBox("To boldly go where no one has gone before."));
