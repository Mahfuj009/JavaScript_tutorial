// this 

const person1 = {
    name: "Spongebob",
    favFood: "Bread",
    sayHello: ()=> console.log(`Hi I am ${this.name}`), // this doesnt work in arrow func
    eat: function(){console.log(`I am eating a ${this.favFood}`)}
}

person1.sayHello()
person1.eat()

const person2 = {
    name: "Patrik",
    favFood: "Cake",
    sayHello: ()=> console.log(`Hi I am ${this.name}`),
    eat: function(){console.log(`I am eating a ${this.favFood}`)}
}

person2.sayHello()
person2.eat()



//constructor 
function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}
const car1 = new Car("Ford","Mustang","2024","yeallow")
const car2 = new Car("Chevrolet","Camaro",2023,"Blue")

console.log(car1.year)
console.log(car2.year)
car2.drive()
