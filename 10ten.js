//class = (ES6 features) 

class Product{
    constructor(name,price){   //constructor
        this.name = name
        this.price = price
    }
    displayProducts(){          //methods
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price.toFixed(2)}`)
    }
    calculateTotal(salesTax){
        return this.price * (this.price*salesTax)
    }
}

const product1 = new Product("Shirt",19.909)
const product2 = new Product("Apple",3.50)

product1.displayProducts()
product2.displayProducts()

console.log(product1.name)
console.log(product2.price)

const total = product1.calculateTotal(.15)
console.log(`Total prize is ${total.toFixed(2)}`)




