// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

//My submitted before learned slice floors the values, mine has 2 extra steps not needed
const getMiddleMySolution = (s) => {
    return (s.length === 1) ? s : (s.length % 2 !== 0) ? s.slice(Math.round(s.length/2)-1,Math.round(s.length/2)) : s.slice(s.length/2-1,s.length/2+1)  
}

//How does this solution get around odd even choice?
//Solution uses the fact that slice automatically floors values sent to it
//Math breakdown
//s='testing'
//s.length = 7
//s.slice((7-1)/2),7/2+1)
//s.slice(3,4) why 4? becuase 3.5+1 = 4.5 which is floored by splice internally 
//s='a'
//(1-1/2=0,1/2+1=1.5(floored by splice)=1) 
//splice(0,1)
//s='test'
//(4-1/2),4/2+1)
//(1.5,3) flooring by splice makes it
//(1,3) 
//omg this is so good, leveraging the methods 'behavior' to make it so short
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}
console.log('result for a       ::', getMiddle('A'))
console.log('result for test    ::', getMiddle('test'))
console.log('result for testing ::', getMiddle('testing'))