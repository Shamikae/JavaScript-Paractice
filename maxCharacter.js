  // CHALLENGE 5: MAX CHARACTER
  // Return the character that is most common in a string
  // ex. maxCharacter('jAvascript') == 'a'
function maxCharacter(str) {
    // hash holds key value pairs with each character of the string being the key and the frequency of that character as the value
  const charHash = {};
  let maxChar = "";
  let maxValCounter = 0;
  for (let char of str) {
      // condition is calling for the object-key ( charHash[char] ) and setting it equal to its current value plus one. Or if unable to add one to the referenced value, then set it to one instead.
    charHash[char] = charHash[char] + 1 || 1;
  }
//console.log(charHash)

    // for…in loop will go over each character key inside charHash and check if its value is greater than maxValCounter
  for (let char in charHash) {
    if (charHash[char] > maxValCounter) {
      maxValCounter = charHash[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxCharacter('javascript'))