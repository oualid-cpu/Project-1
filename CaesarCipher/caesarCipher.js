// Get inputs from the command line
const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);

// check if input valid
if (!phrase || isNaN(shift)) {
  console.log('Usage: node caesarCipherSimple.js "phrase" number');
  console.log('Example: node caesarCipherSimple.js "hello world" 3');
  process.exit(1);
}

// Our alphabets
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(text, shift) {
  let result = "";

  for (let char of text) {
    let lowerChar = char.toLowerCase(); // make case-insensitive

    if (alphabet.includes(lowerChar)) {
      // find position of the letter in alphabet
      let oldIndex = alphabet.indexOf(lowerChar);

      // shift and wrap around with %
      let newIndex = (oldIndex + shift) % 26;
      if (newIndex < 0) newIndex += 26; // fix negative shifts

      let newChar = alphabet[newIndex];

      // keep the same case as original
      if (char === char.toUpperCase()) {
        result += newChar.toUpperCase();
      } else {
        result += newChar;
      }
    } else {
      // not a letter → keep as is
      result += char;
    }
  }

  return result;
}

console.log(caesarCipher(phrase, shift));

