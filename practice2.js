class Animal{
    constructor(is_alive,name){
        this.isAlive = is_alive
        this.name = name
    }
    static withClass(){
        console.log("Hello Dear; Howdy")
    }
}

const cat = new Animal(true,"Mahfuj");
Animal.withClass()

const person = {
    name: "Spongebob",
    age:44,
    sayHello: ()=> console.log(`${this.name} : Hello`)
}
console.log( `${person.name} : Hello`)

class Character{
    isAlive = true
    constructor(movem){
        this.movemonent = movem
    }
    set movemonent(newmovement){
        if(newmovement.length>0 && typeof(newmovement) ==="string"){
            this._movement =newmovement
        } else{
            console.log(`Invalid`)
        }
    }
    get movemonent(){
        return this._movement
    }
    move(speed){
        console.log(`I can ${this.movemonent} at a speed of ${speed} km/h`)
    }
}

class Npc extends Character{
    constructor(m,name){
        super(m)
        this.name = name

    }
    speak(){
        console.log(`Hello there,\nMy name is ${this.name}`)
        super.move(66)
    }
}
villager = new Npc("Fly","Rafi")
console.log(villager.isAlive)
villager.move(22)
villager.speak()

const {name,age,sayHello} = person;

console.log(name)
console.log(age)

for(const ch in person){
    console.log(person[ch])
}