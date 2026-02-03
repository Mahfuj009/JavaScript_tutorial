// Error = an object is created to represent a problem 

//try{} = encloses code that might potentially cause an error
//catch{} = catch and handle any thrown errors from try {}
//finally{} = (optional) always executes.used mostly for clean up 
//          ex.close files,close connections,release resources


try{
    console.log(x); // x not defined 

    //errors:
    //Network error
    //promise rejection
    //security error
}

catch(error){
    console.error(error)
}

finally{
    //close files
    //close connections
    //release resources
    console.log("This always executes");
}

console.log("example 2:");
try{
    const dividend = Number(window.prompt("Enter a dividend  "));
    const divisor = Number(window.prompt("Enter a divisor  "));

    if(divisor ==0){
        throw new Error("Division by zero is not allowed");
    }

    if (isNaN(dividend) || isNaN(divisor)){
        throw new Error("Invalid input: please enter numeric values");
    }
    const result = dividend/divisor;

    console.log(result)
}

catch(error){
    console.error("An error occurred: "+ error);  
};





console.log("You have reched the end of the code");
