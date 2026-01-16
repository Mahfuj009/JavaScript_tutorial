// array of objects

const fruits = [{name: "Apple",color: "red", calories:35},
    {name: "Orange",color: "orange", calories:25},
    {name: "Banana",color: "yellow", calories:135},
    {name: "Pineapple",color: "white", calories:45}
]

console.log(fruits[0].name)

fruits.push({name:"Grapes",color:"green",calories:44})

console.log(fruits)

fruits.pop()

console.log(fruits)

//fruits.splice(1,3)
//console.log(fruits)

//----------forEach()------------//
fruits.forEach(fruit => console.log(fruit.name))
//------------map()----------------//
const fruitCal = fruits.map(fruit => fruit.calories)
console.log(fruitCal)

//-----------filter-------------//
const fruitYellow = fruits.filter(fruit => fruit.color ==="yellow")
console.log(fruitYellow)

const lowCalFruits = fruits.filter(fruit => fruit.calories < 60)
console.log(lowCalFruits)

//--------------reduce-----------------//
const maxCalFruit = fruits.reduce((max,fruit) =>
     fruit.calories>max.calories? fruit : max);
console.log(maxCalFruit)

//const maxFruit = fruits.reduce((max,fruit) => Math.max(max.calories,fruit.calories));
//console.log(maxFruit) // the returning value here is not an array so it doesn't work



