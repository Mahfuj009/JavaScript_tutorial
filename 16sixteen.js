//nested objects

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate","jellyfishing","cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName)
console.log(person.address.city)
//iterating through nested objects

for(const property in person.address){
    console.log(person.address[property])
}


//example 2:
class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob",20,"124 Conch St.",
            "Bikini Bottom","Int Water")

const person2 = new Person("Patrick",23,"124 Conch St.",
            "Bikini Bottom","Int Water")

console.log(person1.address.country)