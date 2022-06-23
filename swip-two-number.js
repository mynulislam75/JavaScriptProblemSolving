let firstNumber = 10;
let secondNumber = 20;
let temp = "";
temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp
console.log(firstNumber, secondNumber)

// using function
function swapTwoNumber(a, b, temp) {
    temp = a;
    a = b;
    b = temp
    return {
        firstNumber: a,
        secondNumber: b
    }
}
let finalResult = swapTwoNumber(10, 20, '')
console.log(finalResult)
