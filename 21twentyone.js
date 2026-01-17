//closure = a function inside another function and doesnt exist outside of the function
// make a variable private to a function

function outer(){
    let message = "Hello"

    function inner(){
        console.log(message)
    }
    inner()
}
outer()


//example 2:
function createCounter(){

    let count = 0;

    function increment(){
        count ++;
        console.log(`Count increased to ${count}`)
    }
    function getCount(){
        return count
    }

    return {increment,getCount};
}

const counter = createCounter();
counter.increment()
counter.increment()


console.log(counter.count)// undefined cause the variable is private

console.log(`The current count is ${counter.getCount()}`)


//example 
function createGame(){
    let score = 0;
function increaseScore(points){
    score += points
    console.log(`+${points}pts`)
}
function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`)
}

function getScore(){
    return score;
}
return {increaseScore,decreaseScore,getScore}
}

const game = createGame()

game.increaseScore(5)
game.decreaseScore(2)
console.log(`The final score is ${game.getScore()}`)