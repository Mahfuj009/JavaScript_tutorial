//element selection methods
//document.getElementById()
//document.getElementsByClassName() similar to array but not an array, it is a collection of elements
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

const welcome = "Welcome to the Simulated  "

document.body.style.backgroundColor = "gray";

const head = document.getElementById("wc");

head.textContent =welcome + "!";
head.style.textAlign ="center";
head.style.backgroundColor = "blue";
console.log(head)

const characters = document.getElementsByClassName("character");
console.log(characters);
characters[0].style.backgroundColor ="yellow"; //html element

for (let character of characters){
    character.style.color = "red";
}

//characters.forEach() //does not work because it is not an array, it is a collection of elements

Array.from(characters).forEach(character =>{
 character.style.backgroundColor = "green";   
});

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

for(let h4element of h4Elements){
    h4element.style.color = "blue";
}

const liElements = document.getElementsByTagName("li");

for(let lielement of liElements){
    lielement.style.color = "purple";
}

Array.from(liElements).forEach(lielement =>{
    lielement.style.background = "yellow";
})


//querySelector() returns the first element that matches the specified CSS selector(s) in the document.
const element = document.querySelector(".character");
console.log(element)
element.style.background = "pink"; //first one only

const firstli = document.querySelector("li");
firstli.style.background = "orange"; //first one only

//querySelectorAll() returns a static NodeList of all elements that match the specified CSS selector(s) in the document.
// but html elements are not static they are live, so we can change them and they will change in the document

const chars = document.querySelectorAll(".character");
console.log(chars); //a node list have forEach method
chars.forEach(charr =>{
    charr.style.background ="cyan";
})






