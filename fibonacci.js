// fibonacci series

let fiboSeries = [0, 1];
for (i = 2; i <= 10; i++) {
    fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
}
console.log(fiboSeries)

// USING FUNCTION
let series = [0, 1, 5];

function fiboNumber(fiboSeries) {
    for (i = 2; i <= 10; i++) {
        fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
    }
    return fiboSeries;
}
var result = fiboNumber(series);
console.log(result)

// USING FUNCTION TO nTh number series

function fibonacciSeries(number) {
    let fibonacciSeries = [0, 1];
    for (i = 2; i <= number; i++) {
        fibonacciSeries[i]=fibonacciSeries[i-1]+fibonacciSeries[i-2];
    }
    return fibonacciSeries;
}
let resulIs=fibonacciSeries(10);
console.log(resulIs)


