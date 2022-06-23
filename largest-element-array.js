// declaring a function

function largestElement(myArray){
    let largestIs=myArray[0];
    for(let i=0;i<myArray.length;i++){
        if(myArray[i]>largestIs){
            largestIs=myArray[i];
            
        } 
    }
    return largestIs;
}

let givenArray=[1,200,3,4,500,6,800]
let finalResult=largestElement(givenArray)
console.log("This is the largest",finalResult)