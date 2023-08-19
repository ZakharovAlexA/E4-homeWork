function getSumNumbers(firstNumb) {
    return function(secondNumb) {
        return(firstNumb + secondNumb)
    }
};

let sumNumb = getSumNumbers(5);
let sum = sumNumb(3);

console.log(sum)