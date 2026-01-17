// static = owned by class only not by object

class MathUtil{
    static PI = 3.14159         //also owned by the child class
    static getDiameter(radius){
        return radius * 2
    }
    static getcircumference(radius){
        return 2*this.PI*radius
    }
    static getArea(radius){
        return this.PI*radius*radius
    }

}

console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getcircumference(10))
console.log(MathUtil.getArea(10))


// tracking the number of user
class User{
    static userCount = 0;

    constructor(username){
        this.username = username
        User.userCount ++
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello , My username is ${this.username}`)
    }
}

const user1 = new User("Spongebob")
const user2 = new User("Patrick")

console.log(User.userCount)
user1.sayHello()
User.getUserCount()

