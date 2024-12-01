// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// var charCode = "a".charCodeAt(0);
// console.log(charCode);

const input = "i@z#gs!m"
const convertStringToAlpabetIndex = (input) => {
    return  input.toUpperCase()
                 .split('')
                 .map((x) => (x.charCodeAt(0)-64 > 0) && (x.charCodeAt(0)-64 < 27) ? (x.charCodeAt(0)-64) : '')
                 .filter((x) => x !== '')
                 .join(' ')    
}
console.log('$'.charCodeAt(0) - 64)
console.log(convertStringToAlpabetIndex(input))
