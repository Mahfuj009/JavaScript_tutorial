// call back function example
hello(leave)
function hello(callback){
    setTimeout(function(){
        console.log("Hello, World!")
        callback()
    },3000)
}
function bye(){
    console.log("Goodbye, World!")
}
function leave(){
    console.log("leaveing now")
}


sum(showResult,4,5)
function sum(callback,a,b){
    let result = a + b
    callback(result)
    return result
}
function showResult(result){
    console.log(result)
}