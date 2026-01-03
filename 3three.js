// .map() method 

const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map(square)
console.log(squares)

function square(element){
    return element * element
}


const students = ["Spongebob", "Patrick", "Sandy", "Mr. Krabs"]
const studentsUpper = students.map(uppercase)
console.log(studentsUpper)
const studentsLower = students.map(lowercase)
console.log(studentsLower)
function uppercase(element){
    return element.toUpperCase()
}

function lowercase(element){
    return element.toLowerCase()
}


const dates = ["2023-01-01", "2023-02-14", "2023-03-17"]
console.log( dates.map (formatDates))
function formatDates(element){
    const parts = element.split("-")
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}