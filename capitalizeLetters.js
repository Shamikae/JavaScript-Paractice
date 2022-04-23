  // CHALLENGE 4: CAPITALIZE LETTERS
  // Return a string with the first letter of every word capitalized
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    // Seperate words
  let words = str.split(" ");
    // Iterate over each word 
    // For each word at index[0] make uppercase
    // add the remain letters back to word 
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  // join words back to sentence
  return words.join(" ");
}

// Using map
function capitalize(str) {
    // let words = str.split(" ");
   return str.split(" ").map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
    
}


console.log(capitalizeLetters('i love javascript'))
console.log(capitalize('i love javascript'))