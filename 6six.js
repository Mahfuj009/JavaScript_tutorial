// function declaration
function hello1(){
    console.log("Hello")
}

const hello = function(){
    console.log("Hello")
}
setTimeout(hello,4000)
setTimeout(function(){
    console.log("Hello")
},3000);


const numbers = [1,2,3,4,5]
const squares = numbers.map(squr)

function squr(element){
    return Math.pow(element,2);
}
console.log(squares)

//as expression
const sqrs = numbers.map(function(element){
    return Math.pow(element,2);
})
console.log(sqrs)

const evenNums = numbers.filter(function(element){
    return element%2 ===0
})
console.log(evenNums)

const oddNums = numbers.filter(function(element){
    return element%2 !==0
})
console.log(oddNums)
