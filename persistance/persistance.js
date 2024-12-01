//First attempt without looking at solutions.
const persistenceOld = (num) => {
    if (num.toString().length < 2) return 0;
    let count = 0
    let numArray = splitNumber(num)
    do {
        count++
        numArray = splitNumber(arrayProduct(numArray))
    } while (numArray.length !== 1)
    return count
}
const splitNumber = (number) => {
    return number
        .toString()
        .split('')
        .map(Number)//dont have to turn back into number (javascript can do multiplication on string "numbers" go straight to reduce
}
const arrayProduct = (array) => {
    return array.reduce((result, current) => result * current, 1);
}

//Submitted after looking at discussion below and relizing you can multiply "string numbers" in javascript doh 
//Also can just check "string number"  being > 9, 2 digits again doh, length would still work here but have to prime 
//it if using length and this is more concise
const persistence = (num) => {
    let count = 0
    while (num > 9) {
        count++
        num = num.toString()
            .split('')
            .reduce((result, current) => result * current, 1);
    }
    return count;
}

//Discussion reminded me can multiply string "numbers" not sure what the + for b is for? makes it positive? shouldn't matter?
function persistenceBetter(num) {
    let mul = 0;
    while (num > 9) {
        num = num.toString().split('').reduce((a, b) => a * +b, 1);
        mul++;
    }
    return mul;
}

// console.log(persistence      (12345698))
// console.log(persistenceBetter(12345678))
console.log(persistenceMy(12345698))
