// Get input from command line
const input = process.argv.slice(2).join(" ");  // .join("") is just to transform the input as one string and not an array

// Function to translate a single word to Pig Latin
function pigLatin(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerWord = word.toLowerCase();

  // If word starts with a vowel
  if (vowels.includes(lowerWord[0])) {
    return word + "way";
  }

  // If word starts with two consonants
  if (!vowels.includes(lowerWord[0]) && !vowels.includes(lowerWord[1])) {
    return word.slice(2) + word.slice(0, 2) + "ay";
  }

  // If word starts with one consonant followed by a vowel
  return word.slice(1) + word[0] + "ay";
}

// Translate phrase
const translated = input
  .split(" ")
  .map(pigLatin)
  .join(" ");

// Output result
console.log(translated);
