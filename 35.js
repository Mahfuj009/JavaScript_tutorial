//classList : element property in JavaScript 
//used to interact with css class 


//add()
//remove()
//toggle() add if dne and remove id already exist
//replace(oldClass ,newClass)
//contains()

const button = document.getElementById("btn")
const h1 = document.getElementById("header")
//adding class add()

button.addEventListener("mouseover",event=>{
    event.target.classList.toggle("hover") //or add()
    console.log("hover class added")
})

button.addEventListener("mouseout",event =>{
    event.target.classList.toggle("hover") //or remove()
    console.log("hover class removed")
})

button.classList.add("brenable");
button.addEventListener("click",event=>{
    event.target.classList.replace("brenable","brdisable");
    console.log("class replaced")
}
)

button.addEventListener("click",event =>{
    if (event.target.classList.contains("brenable")){
        event.target.textContent +="#";
        
      }else{
      event.target.textContent += "@";  
      h1.textContent ="brenable";
    }
})









