// destructor , {} to perform object destructoring, [] to perfrom array destructing

let a = 11;
let b = 22;

console.log(a,b);
[a,b] = [b,a];      //semicolon must
console.log(a);

//example 2:
const colors = ["red","green","blue","black","white"];
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors);

//example 3:

const [firstcolor,secondcolor,thridcolor,...extracolors] = colors;
console.log(firstcolor);
console.log(extracolors);


//example 4:
//from objects
const person1 = {
    firstName:"Spongebob",
    lastName:"Squarepants",
    age : 30,
    job: "Cook"
}

const person2 ={
    firstName:"Patric",
    lastName:"Star",
    age: 34,
}

const {firstName,lastName,age,job= "unemployed"} = person2; // job default value
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


// example 5: destraction as a function
function displayPerson({firstName,lastName,age,job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`)
    console.log(`age: ${age} job : ${job}`)
}
displayPerson(person1)



