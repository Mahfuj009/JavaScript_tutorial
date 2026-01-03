// forEach method

let numbers = [1, 2, 3, 4, 5]
numbers.forEach(display)
function display(element){
    console.log(element)
}

numbers.forEach(double)
function double(element){
    console.log(element*2)
}

function triple(element){
    console.log(element*3)
}
numbers.forEach(square)
function square(element){
    console.log(Math.pow(element,2))
}

let fruits = ["apple","banana","mango","orange"]
fruits.forEach(display)
function display(element){
    console.log(element)
}

fruits.forEach(uppercase)
function uppercase(element,index){
    fruits[index] = element.toUpperCase()
    console.log(fruits)
}

fruits.forEach(reversecapitalize)
function reversecapitalize(element,index){
    fruits[index] = element.charAt(0).toLowerCase() + element.slice(1)
    console.log(fruits)
}