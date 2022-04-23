const arr = [   
{ name: 'Jim', acc: 5},
{ name: 'Kim', acc: 46},
{ name: 'Sue', acc: 125},
{ name: 'Bob', acc: 100}
];
// reduce 
// Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const sum = arr.reduce((total, number, index, arrays) => {
    // console.log('Index: ' + index)
    // console.log('Array: ' + arrays)
    return total + number.acc
}, 0)

console.log(sum);