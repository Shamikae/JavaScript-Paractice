// CHALLENGE 3: REVERSE AN INTEGER
  // Return an integer in reverse
  // ex. reverseInt(521) === 125
  
  function reverseInt(int) {
      return int.toString().split("").reverse().join("")
  }

  console.log(reverseInt(876541));
