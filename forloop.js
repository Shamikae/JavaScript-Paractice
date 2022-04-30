const numArray = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
let positiveArr = [];

let negativeArr = [];
function forloop(){
    for(let i = 0; i < numArray.length ; i++){
        if(numArray[i] > 0){
            positiveArr.push(numArray[i])
        } 
        else 
        {
            negativeArr.push(numArray[i])
        }
    }
    console.log(positiveArr);
    console.log(negativeArr);
}

forloop()


const n = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
    var positive = [];
    var negative = [];
    n.forEach(function(item){
        if(item<0){
            negative.push(item);
        } else {
            positive.push(item)
        }
    })
console.log(positive)
console.log(negative)