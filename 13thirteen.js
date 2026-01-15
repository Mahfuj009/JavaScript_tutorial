// super = call the constructor and methods of parent class


class Animal{
    constructor(name,age){
        this.isAlive = true
        this.name = name
        this.age = age
        
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}`)
    }
}

class Rabbit extends Animal{
    constructor(name,age,runspeed){
        super(name,age)
        this.runspeed = runspeed
    }
    run(){
        console.log(`This ${this.name} run at a speed of ${this.runspeed}`)
        super.move(this.runspeed)
    }
}

class Fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age)
        this.swimspeed = swimspeed
    }
    swim(){
        console.log(`This ${this.swim} can swim at a speed of ${this.swimspeed}`)
        super.move(this.swimspeed)
    }
}

class Hawk extends Animal{
    constructor(name,age,flyspeed){
        super(name,age)
        this.flyspeed = flyspeed
    }
    fly(){
        console.log(`This ${this.name} can fly at a speed of ${this.flyspeed}`)
        super.move(this.flyspeed
        )
    }
}

const rabbit = new Rabbit("rabbit",1,24)
const fish = new Fish("fish",12,33)
const hawk = new Hawk("hawk",23,34)

console.log(fish.swimspeed)
console.log(rabbit.name)
console.log(hawk.isAlive)
hawk.fly()