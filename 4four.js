// .filter() method

let numbers = [1,2,3,4,5,6]
let evenNums = numbers.filter(isEven)
console.log(evenNums)

function isEven(element){
    return element % 2 === 0
}

const ages = [14,56,23,23,11,36,12,15]
const adults = ages.filter(isAdult)
console.log(adults)

function isAdult(element){
    return element >= 18
}

const words = ['apple','banana','kiwi','coconut','pineapple']
const shortwords = words.filter(getShortWords)
console.log(shortwords)

function getShortWords(element){
    return element.length <= 6
}