// Finding factorial USING FOR LOOP & FUNCTION
function factorial(number){
    // init intial value 1 and it is declared outside becasue of loop condition,in loop everytime set the loop value
    var factorialIs=1;
    for(var i=1;i<=number;i++){
        factorialIs=factorialIs*i
    }
    return factorialIs;
}
var resultOfFactorial=factorial(7)
console.log(resultOfFactorial)


// USING WHILE LOOP &FUNCTION
function factorialTwo(number){
    var factorialIs=1;
    var i=1;
    while(i<=number){
        factorialIs=factorialIs*i;
        i++;
    }
    return factorialIs;
}
var resultOfFactorialTwo=factorialTwo(7)
console.log(resultOfFactorialTwo)