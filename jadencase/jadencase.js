//testing prototype...mixed opion (mostly DON'T) on adding prototypes to base classes but since example did frek it
String.prototype.replaceAtWithUpperCase = (string,index,length) => {
    return string.slice(index,length).toUpperCase() + string.slice(1)
}
String.prototype.toJadenCase = function () {
    return this.split(" ").map(x => x.replaceAtWithUpperCase(x,0,1)).join(' ')
}
console.log('this is the end'.toJadenCase())