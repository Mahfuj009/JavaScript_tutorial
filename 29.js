// firistElementChild
//lastElementChild
//nextElementSibling
//previousElementSibling
//parentElement
//children


//firstElementChild

const element = document.getElementById("veges");
 const firschild = element.firstElementChild;
firschild.style.backgroundColor = "red";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement =>{
    const childElement = ulElement.firstElementChild;
    childElement.style.color = "blue";
})



//lastElementChild
const element2 = document.getElementById("veges")
const lastchild = element2.lastElementChild;
lastchild.style.backgroundColor = "yellow";

const ulElements2 = document.querySelectorAll("ul");
ulElements2.forEach(ulElement2 =>{
    const lastchild2 = ulElement2.lastElementChild;
    lastchild2.style.color = "green";
})


//nextElementSibling
const element3 = document.getElementById("spongebob");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor="orange";
const secondSibling = nextSibling.nextElementSibling;
secondSibling.style.backgroundColor = "pink";

const list1 = document.getElementById("veges");
const secondList = list1.nextElementSibling;
secondList.style.backgroundColor = "gray"

//previousElementSibling
firstone = nextSibling.previousElementSibling;
firstone.style.backgroundColor = "cyan";


//parentElement 
const childEl = document.getElementById("fortnite");// or cod
const parentEl = childEl.parentElement;
parentEl.style.color = "purple";
console.log(parentEl)

//children
const parentElement = document.getElementById("games");
const children = parentElement.children;
console.log(children) //html collection of all the children elements of the parent element

Array.from(children).forEach(child =>{
    child.style.backgroundColor = "lightblue";
}) //typescasted

children[1].style.backgroundColor= "lightgreen";


