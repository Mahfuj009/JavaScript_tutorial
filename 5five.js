// .reduce() method

const prices = [12,23,6,34,32,11,23]
const total = prices.reduce(sum)

console.log(`$${total.toFixed(2)}`)

function sum(accumalator,element){
    return accumalator + element
}


const grades = [75,50,80,64]


const maximum = grades.reduce(getMax)
console.log(maximum)

function getMax(accumalator,element){
    return Math.max(accumalator,element)
}
const minimum = grades.reduce(getMin)
console.log(minimum)
function getMin(accumalator,element){
    return Math.min(accumalator,element)
}