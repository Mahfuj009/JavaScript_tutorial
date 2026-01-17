// objects and this method in javaScript


const student  = {
    name : "Spongebob",
    age : 29,
    sayHello: function(){console.log(`Hello`)}

};
student.sayHello();


class Person{
    is_alive = true
    constructor(name,age){
        this.name = name
        this.age = age
        Person.userCount +=1

    }
    sayHello() {
        console.log(`${this.name}: Hello everyone!`);
    }
    ageShow(){
        console.log(`My age is ${this.age}`)
    }

    static PI = 3.1415986
    static showGrade(){
        console.log("My grade is Satisfactory")
    }
    static userCount = 0

    showid(id){
        console.log(`My id is ${id}`)
    }



}

const person1 = new Person("Patrick",23)
const person2 = new Person("Patrick",23)
person1.sayHello()
person1.ageShow()

console.log(Person.PI)
Person.showGrade();
console.log(Person.userCount)

class User extends Person{
    constructor(name,age,roll){
        super(name,age)
        this.roll = roll
    }
    showroll(){
        console.log(`My roll is ${this.roll}`)
        super.showid(this.roll)
    }
    set name(newName){
        if(newName.length>0 && typeof(newName)== "string"){
            this._name = newName
        }else{
            console.error("Invalid Name")
        }
    }

    get name(){
        return this._name
    }
    
    set age(newAge){
        if(newAge>0 && typeof(newAge) === "number"){
            this._age = newAge
        }
        else{
            console.error(`Invalid age`)
        }
    }
    get age(){
        return this._age
    }
}

const user1 = new User("Mr Krab",50,433);

user1.sayHello();
console.log(user1.is_alive)
console.log(User.userCount) 
user1.showroll()
console.log(user1.age)



let a = 44;
let b = 35;
[a,b] = [b,a]
console.log(a,b)


const favFruits = ["Pineapple","Mango","Lichi","Orange","Banana"];

[favFruits[0],favFruits[4]] = [favFruits[4],favFruits[0]]
console.log(favFruits)

const [first,second,...others] = favFruits;
console.log(others)

const charecter = {
    name: "Spongebob",
    age: 23,
    speech: function(){console.log(`Hello`)}
}
const {name,age,speech} = charecter;
console.log(name)
speech()

const cha = {
    name: "Mr Krab",
    age: 34
}

function displayCh({name,age,jop="restaurant_owner"}){
    console.log(`Name ${name} and age ${age} and job ${jop}`)
}
displayCh(cha);

const player = {
    name: "V",
    age: 25,
    speech: ["oh god", "Hey","Oh God","Crap"],
    tools : {
        weapon: "AK47",
        med: "eDrink"
    }

}

for (const tool in player.tools){
    console.log(player.tools[tool])
}
console.log(player.tools.weapon)

class Cat{
    constructor(name,age,...address){
        this.name = name
        this.age = age
        this.address = new Address(...address)
    }
}
class Address{
    constructor(house,city,country) {
        this.house = house
        this.city = city
        this.country = country
    }
}

const car1 = new Cat("Paku",2,134,"Dhaka","Bangladesh")
console.log(car1.name)
console.log(car1.address)
console.log(car1.address.city)

const fruits = [{name: "Pineapple",color:"white",cal:34},
    {name: "Apple",color:"Green",cal:22},
    {name:"Banana",color:"yellow",cal:233}
]

fruits.forEach(fruit=>console.log(fruit.name))


fruits.sort((a,b)=>a.cal -b.cal)
console.log(fruits)

fruits.sort((a,b)=>b.name.localeCompare(a.name))
console.log(fruits)

myNums = [13,23,11,55,22]
myNums.sort((a,b)=>b-a)
console.log(myNums)