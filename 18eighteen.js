// sort()

let fruits = ["apple","pineapple","coconut","banana"]
fruits.sort()
console.log(fruits)

//example 2:

let numbers = [11,23,1,35,3,535,22]
numbers.sort((a,b) => a - b ); // default order
console.log(numbers)

numbers.sort((a,b) => b-a); // reverse order
console.log(numbers)       

//
const people = [{name: "Spongebob",age:30, gpa:3.0},
                {name:"Patrick",age:33, gpa:1.4},
                {name:"Sandie",age:24,gpa:4.0}
]

people.sort((a,b)=>a.age -b.age); // sorting by age
console.log(people)

people.sort((a,b)=> b.gpa-a.gpa); //sorting by gpa reverse
console.log(people)

people.sort((a,b) => b.name.localeCompare(a.name));
console.log(people)


