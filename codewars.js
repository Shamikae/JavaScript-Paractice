// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number. 
        // highAndLow("1 2 3 4 5");  // return "5 1"
        // highAndLow("1 2 -3 4 5"); // return "5 -3"
        // highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
  }

function highAndLow1(numbers){
    numbers = numbers.split(" ");
    var min = Math.min.apply(null, numbers)
    var max = Math.max.apply(null, numbers)
    
    return max + ' ' + min
  }

function highAndLow2(numbers){
    numbers = numbers.split(" ");
    var min = Math.min(...numbers)
    var max = Math.max(...numbers)
    
    return max + ' ' + min
  }

  console.log(highAndLow("1 2 3 4 5"));
  console.log(highAndLow1("1 2 3 4 5"));
  console.log(highAndLow2("1 2 3 4 5"));
