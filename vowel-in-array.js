
function vowelIs(givenArray) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] == vowels[0] || givenArray[i] == vowels[1] || givenArray[i] == vowels[2] ||
            givenArray[i] == vowels[3] || givenArray[i] == vowels[4]) {
            console.log("It's a vowel", givenArray[i])
        }
        else {
           console.log("Not a vowel", givenArray[i])
        }
    }
}

let myArray = ["a", "j", "i", "p", "w"]
let finalResult = vowelIs(myArray)
// console.log(finalResult)