function cleanUp(string) {
  return string.replace(/[^a-zA-Z0-9]/g, " ");
}

console.log(cleanUp("---what's my +*& line?"));
