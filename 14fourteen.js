// getter = readable
//setter = writeable      //together combined is validator


class Rectangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }

    set width(newWidth){  //setter to set conditional value
        if(newWidth >0){
            this._width = newWidth
        }
        else{
            console.error("Width must be a positive number")
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight
        }
        else{
            console.error("Height must be a positive number")
        
        }
    }
    
    get width(){                    //getter >> using console log
        return `${this._width.toFixed(1)} cm`
    }
    get height(){
        return this._height.toFixed(1)
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}`
    }
}

const rectangle = new Rectangle(3,4)

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)


//example 2
class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }

    //setters methods
    set firstname(newfirstname){
        if (typeof(newfirstname)==="string" && newfirstname.length>0){
            this._firstname = newfirstname
        }
        else{
            console.error("Invalid")
        }
    }
    set lastname(newlastname){
        if(typeof(newlastname) === "string" && newlastname.length>0){
            this._lastname = newlastname
        }
        else{
            console.error("Invalid")
        }
    }
    set age(newage){
        if(typeof(newage)==="number" && newage> 0){
            this._age = newage
        }
        else{
            console.error("Invalid")
        }
    }

    //getters method
    get firstname(){
        return this._firstname
    }
    get lastname(){
        return this._lastname
    }
    get age(){
        return this._age
    }

}

user1 = new Person("Mahfuj","Ahmed",22)
console.log(user1.age)
