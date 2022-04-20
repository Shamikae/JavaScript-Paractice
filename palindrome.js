// CHALLENGE 2: VALIDATE A PALINDROME
  // Return true if palindrome and false if not
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  // solution without checking edge cases
  function isPalindrome(str) {
      var reverse = str.split("").reverse().join("");
      if(reverse === str) {
          console.log("Is Palindrome")
      }else console.log("nope")
      
  }
  isPalindrome("racecar")
 
  // To pass edge case, use Regular Expressions: /[^A-Za-z0–9]/g  or /[\W_]/g (\W removes all non-alphanumeric characters)(matches anything that does not enclose _)

  function palindrome(str) {
      // step 1: cleanup string with regex make lower case & remove unwanted characters
      var re = /[^A-Za-z0-9]/g;
      var lowerStr = str.toLowerCase().replace(re, '');
      // step 2: reverse string
      var reverseStr = lowerStr.split('').reverse().join('');
      var reverse = str.split("").reverse().join("");
      console.log(reverse)
      // step 3: check if equal
      return reverseStr === lowerStr;
  }
  palindrome("A man, a plan, a canal. Panama");
  