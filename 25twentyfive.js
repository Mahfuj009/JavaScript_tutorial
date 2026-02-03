//Synchronus code = Executed line by line consecutively in a sequential manner
//                 code that waits for operation to complete before moving to the next line

//Asynchronus code =  Does not wait for operations to complete and moves to the next line
//                   code that executes while waiting for other operations to complete
//                  (1/0 operations, newtwork requests , fetching data)
//                   handled with : callbacks, promises, async/await

function func1(callback){
    setTimeout(()=>{
        console.log("set time out executed");
        callback();
    },2000)
}

function func2(){
    console.log("Function 2 executed");
}

func1(func2);

//setTimeout(()=> console.log("This is asynchronus code"),2000);
//console.log("this wil execute first");
//console.log("This will execute second");