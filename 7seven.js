
const hello =(name,age) => console.log(`hello ${name} You are ${age} year old`);
hello("Bro",29);

setTimeout(()=>console.log("Hello"),3000);

const numbers = [1,2,3,4,5]
const squares = numbers.map((elment)=>Math.pow(elment,2))
console.log(squares)

const cubes = numbers.map((element)=>Math.pow(element,3))
console.log(cubes)

const evenNums = numbers.filter((element)=>element%2 === 0)
console.log(evenNums)

const total = numbers.reduce((accumulator,element)=>accumulator+element)
console.log(total)