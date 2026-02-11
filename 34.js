//NodeList = static collection of html element by(id,class,element)
// forEach and indexing available
//querySelectorAll


let buttons = document.querySelectorAll(".btn")
console.log(buttons)

buttons.forEach(button => {
    button.addEventListener("click",event=>{
        event.target.style.backgroundColor = "tomato";
        event.target.textContent += "🥶"
    });
    
});

buttons.forEach(button=>{
    button.addEventListener("mouseover",event =>{
         event.target.style.backgroundColor = "green";
    })
})

buttons.forEach(button=>{
    button.addEventListener("mouseout",event =>{
        event.target.style.backgroundColor ="rgb(127, 240, 112)";
    })
})

//adding a new element to the classlist
const newButton = document.createElement("button")
newButton.textContent = "button5";

//setting class 
newButton.classList = "btn";

//adding to the html file
document.body.appendChild(newButton);

console.log(buttons) //NodeList is static therefore not auto upgraded

//adding to the classList or manually updating the classList
buttons = document.querySelectorAll(".btn")
console.log(buttons) //now the nodeList has 5 elements


//removing an element from classlist
buttons.forEach(button=>{
    button.addEventListener("dblclick",event=>{
        event.target.remove();
        buttons = document.querySelectorAll(".btn") //updating the classList
        console.log(buttons)
    })
})
