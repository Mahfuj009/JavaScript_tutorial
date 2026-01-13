// objects in javaScripts

const person = {
    firstName : "Spongebob",
    lastName : "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){
        console.log("Hi I am spongebob")
    },
    eat: function(){console.log("I am eating Chocolate")},

}
console.log(`${person.firstName} ${person.lastName} age: ${person.age}`)
person.sayHello()
person.eat()


const fatPerson = {
    firstName: "Patrik",
    lastName: "Star",
    isEmployed: false,
    sayHello: ()=>console.log("Hey! I am Patrik"),
    eat: ()=> console.log("I am eating Pizza")
}
fatPerson.eat()
fatPerson.sayHello()

