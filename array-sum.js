function sumOfAnArray(myArray){
    let sum=0;
    for(let i=0;i<myArray.length;i++){
        sum=sum+myArray[i];
    }
    return sum;
}

let myArray=[1,2,3,4,5,6,7,8,9,10,11]
let result=sumOfAnArray(myArray)
console.log(result)