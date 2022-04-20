// Challenge 1: Reverse a string
// Return string in reverse
// ex. reverseString('hello) === 'olleh'

function reverseString(str) {
    // Split() method turns string to new array
    // reverse() method reverses array 
    // join() method joins elements in array to string 
    return console.log(str.split("").reverse().join(""))
}

 // Call Function
reverseString("Hello World");
