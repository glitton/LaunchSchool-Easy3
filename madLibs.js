let input = require("readline-sync");

function madLibs() {
  const noun = input.question("Enter a noun: ");
  const verb = input.question("Enter a verb: ");
  const adjective = input.question("Enter a adjective: ");
  const adverb = input.question("Enter a adverb: ");

  console.log(`Do you love your ${noun}?  That's amazing!
  The ${adjective} ${noun} ${verb} ${adverb} with you.  
  You have to ${verb} right now!
  `);
}

madLibs();
